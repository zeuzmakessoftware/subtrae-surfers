import React, { useEffect, useState } from 'react';
import { Pause, Coins, Zap, Magnet, Footprints, Star } from 'lucide-react';
import { useGameStore } from '../store/gameStore';

export default function GameHUD() {
  const {
    score,
    coins,
    distance,
    powerUps,
    setGameStatus,
    gameStatus
  } = useGameStore();

  const [prevScore, setPrevScore] = useState(score);
  const [scoreChanged, setScoreChanged] = useState(false);
  const [prevCoins, setPrevCoins] = useState(coins);
  const [coinsChanged, setCoinsChanged] = useState(false);

  // Animate score changes
  useEffect(() => {
    if (score !== prevScore) {
      setScoreChanged(true);
      setPrevScore(score);
      const timer = setTimeout(() => setScoreChanged(false), 300);
      return () => clearTimeout(timer);
    }
  }, [score, prevScore]);

  // Animate coin changes
  useEffect(() => {
    if (coins !== prevCoins) {
      setCoinsChanged(true);
      setPrevCoins(coins);
      const timer = setTimeout(() => setCoinsChanged(false), 300);
      return () => clearTimeout(timer);
    }
  }, [coins, prevCoins]);

  const handlePause = () => {
    setGameStatus('paused');
  };

  const getPowerUpIcon = (type: string) => {
    switch (type) {
      case 'jetpack':
        return <Zap className="w-4 h-4" />;
      case 'magnet':
        return <Magnet className="w-4 h-4" />;
      case 'sneakers':
        return <Footprints className="w-4 h-4" />;
      case 'multiplier':
        return <Star className="w-4 h-4" />;
      default:
        return <Zap className="w-4 h-4" />;
    }
  };

  const getPowerUpColor = (type: string) => {
    switch (type) {
      case 'jetpack':
        return 'bg-[#354093] border-[#6AEEFD]';
      case 'magnet':
        return 'bg-[#E31902] border-[#FFED6D]';
      case 'sneakers':
        return 'bg-[#6AEEFD] border-[#354093]';
      case 'multiplier':
        return 'bg-[#F7BE76] border-[#E31902]';
      default:
        return 'bg-[#FFED6D] border-[#354093]';
    }
  };

  if (gameStatus !== 'playing') {
    return null;
  }

  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      {/* Top HUD */}
      <div className="flex justify-between items-start p-4 pointer-events-auto animate-hud-slide-in">
        {/* Left side - Score and Distance */}
        <div className="space-y-3">
          <div className={`bg-[#354093] border-4 border-[#FFED6D] rounded-2xl px-4 py-3 transform -rotate-1 shadow-lg transition-all duration-300 hover:scale-105 animate-bounce-gentle ${scoreChanged ? 'animate-score-pop' : ''}`}>
            <div className="text-[#6AEEFD] text-sm font-black animate-text-glow" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>🏆 SCORE</div>
            <div className="text-[#FFED6D] text-2xl font-black drop-shadow-lg animate-text-glow" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>
              {score.toLocaleString()}
            </div>
          </div>
          
          <div className="bg-[#E31902] border-4 border-[#6AEEFD] rounded-2xl px-4 py-3 transform rotate-1 shadow-lg transition-all duration-300 hover:scale-105 animate-bounce-gentle" style={{animationDelay: '0.2s'}}>
            <div className="text-[#FFED6D] text-sm font-black animate-text-glow" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>📏 DISTANCE</div>
            <div className="text-[#6AEEFD] text-lg font-black drop-shadow-lg animate-text-glow" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>
              {Math.floor(distance)}m
            </div>
          </div>
        </div>

        {/* Right side - Coins and Pause */}
        <div className="space-y-3">
          <div className={`bg-[#FFED6D] border-4 border-[#E31902] rounded-2xl px-4 py-3 transform rotate-2 shadow-lg transition-all duration-300 hover:scale-105 animate-bounce-gentle ${coinsChanged ? 'animate-score-pop' : ''}`}>
            <div className="flex items-center space-x-2">
              <Coins className="w-6 h-6 text-[#E31902] animate-spin-slow" />
              <span className="text-[#354093] text-xl font-black drop-shadow-lg animate-text-glow" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>
                {coins.toLocaleString()}
              </span>
            </div>
          </div>
          
          <button
            onClick={handlePause}
            className="bg-[#6AEEFD] border-4 border-[#354093] hover:bg-[#354093] hover:border-[#6AEEFD] transition-all duration-300 rounded-2xl p-3 transform -rotate-1 shadow-lg group hover:scale-110 animate-wiggle"
          >
            <Pause className="w-6 h-6 text-[#354093] group-hover:text-[#6AEEFD] transition-colors animate-pulse" />
          </button>
        </div>
      </div>

      {/* Power-ups Display */}
      {powerUps.length > 0 && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 animate-fade-in-up">
          <div className="flex space-x-3">
            {powerUps.map((powerUp, index) => (
              <div
                key={powerUp.id}
                className={`${getPowerUpColor(powerUp.type)} border-4 rounded-2xl px-4 py-3 flex items-center space-x-2 shadow-lg transform ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'} animate-powerup-glow hover:scale-110 transition-transform duration-300`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-white animate-bounce">
                  {getPowerUpIcon(powerUp.type)}
                </div>
                <span className="text-white font-black text-sm drop-shadow-lg animate-text-glow" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>
                  {Math.ceil(powerUp.timeLeft)}s
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Speed indicator */}
      <div className="absolute bottom-4 left-4 animate-hud-slide-in" style={{animationDelay: '0.3s'}}>
        <div className="bg-[#F7BE76] border-4 border-[#354093] rounded-2xl px-4 py-3 transform -rotate-1 shadow-lg hover:scale-105 transition-transform duration-300 animate-bounce-gentle">
          <div className="text-[#354093] text-sm font-black mb-2 animate-text-glow" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>⚡ SPEED</div>
          <div className="w-32 h-3 bg-[#354093] rounded-full overflow-hidden border-2 border-[#E31902] relative">
            <div 
              className="h-full bg-gradient-to-r from-[#22c55e] via-[#FFED6D] to-[#E31902] transition-all duration-300 shadow-inner animate-pulse-glow"
              style={{ width: `${Math.min(100, (distance / 1000) * 100)}%` }}
            />
            {/* Speed bar glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-float" />
          </div>
        </div>
      </div>

      {/* Lane indicators */}
      <div className="absolute bottom-4 right-4 animate-hud-slide-in" style={{animationDelay: '0.4s'}}>
        <div className="bg-[#6AEEFD] border-4 border-[#E31902] rounded-2xl p-4 transform rotate-1 shadow-lg hover:scale-105 transition-transform duration-300 animate-bounce-gentle">
          <div className="text-[#354093] text-xs font-black mb-3 text-center animate-text-glow" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>🛤️ LANE</div>
          <div className="flex space-x-2">
            {[0, 1, 2].map((laneIndex) => {
              const { lane } = useGameStore.getState();
              return (
                <div
                  key={laneIndex}
                  className={`w-4 h-10 rounded-lg border-2 transition-all duration-300 ${
                    lane === laneIndex 
                      ? 'bg-[#FFED6D] border-[#E31902] shadow-lg animate-selected-glow transform scale-110' 
                      : 'bg-[#354093] border-[#6AEEFD] hover:scale-105'
                  }`}
                  style={{animationDelay: `${laneIndex * 0.1}s`}}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile controls hint */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 md:hidden animate-fade-in-up" style={{animationDelay: '0.6s'}}>
        <div className="bg-[#E31902] border-3 border-[#FFED6D] rounded-2xl px-4 py-2 transform rotate-1 shadow-lg animate-wiggle-slow hover:scale-105 transition-transform duration-300">
          <p className="text-[#FFED6D] text-xs text-center font-black animate-text-glow" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>
            👆 SWIPE TO MOVE • TAP TO JUMP 👆
          </p>
        </div>
      </div>
    </div>
  );
}