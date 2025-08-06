import React, { useEffect, useState } from 'react';
import { RotateCcw, Home, Trophy, Coins, Target, Star } from 'lucide-react';
import { useGameStore } from '../store/gameStore';

export default function GameOverScreen() {
  const {
    score,
    coins,
    distance,
    highScore,
    totalCoins,
    setGameStatus,
    resetGame
  } = useGameStore();

  const [showContent, setShowContent] = useState(false);
  const [newHighScore, setNewHighScore] = useState(false);

  useEffect(() => {
    // Check if this is a new high score
    if (score > highScore) {
      setNewHighScore(true);
    }
    
    // Delay content appearance for dramatic effect
    const timer = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timer);
  }, [score, highScore]);

  const isNewHighScore = score > 0 && score >= highScore;
  const distanceInMeters = Math.floor(distance);

  const handleRestart = () => {
    window.location.href = "/"
  };

  const handleMainMenu = () => {
    window.location.href = "/"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E31902] via-[#354093] to-[#6AEEFD] flex items-center justify-center p-4 relative overflow-hidden animate-fade-transition">
      {/* Graffiti Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#FFED6D] rounded-full transform rotate-12"></div>
        <div className="absolute top-32 right-20 w-24 h-24 bg-[#F7BE76] rounded-full transform -rotate-45"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-[#6AEEFD] rounded-full transform rotate-45"></div>
        <div className="absolute bottom-32 right-10 w-28 h-28 bg-[#E31902] rounded-full transform -rotate-12"></div>
      </div>
      
      <div className={`bg-[#354093] border-8 border-[#FFED6D] rounded-3xl p-8 max-w-md w-full shadow-2xl transform -rotate-1 relative z-10 transition-all duration-500 ${showContent ? 'animate-game-over-bounce scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
        {/* Game Over Title */}
        <div className="text-center mb-8">
          <div className="bg-[#E31902] border-4 border-[#6AEEFD] rounded-2xl px-6 py-4 transform rotate-2 shadow-lg mb-4">
            <h1 className="text-4xl font-black text-[#FFED6D] drop-shadow-lg animate-title-bounce" style={{fontFamily: 'Impact, Arial Black, sans-serif', letterSpacing: '0.1em'}}>GAME OVER!</h1>
          </div>
          {isNewHighScore && (
            <div className="bg-[#FFED6D] border-4 border-[#E31902] rounded-2xl px-4 py-3 transform -rotate-1 shadow-lg animate-pulse">
              <div className="flex items-center justify-center space-x-2">
                <Star className="w-6 h-6 text-[#E31902] animate-spin-slow" />
                <span className="text-[#354093] font-black text-lg animate-text-rainbow" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>NEW HIGH SCORE!</span>
                <Star className="w-6 h-6 text-[#E31902] animate-spin-slow" />
              </div>
            </div>
          )}
        </div>

        {/* Score Display */}
        <div className="space-y-4 mb-8">
          {/* Final Score */}
          <div className={`bg-[#6AEEFD] border-4 border-[#E31902] rounded-2xl p-4 text-center transform rotate-1 shadow-lg transition-all duration-500 hover:scale-105 ${showContent ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`} style={{animationDelay: '0.2s'}}>
            <div className="text-[#354093] text-sm font-black mb-1 animate-text-glow" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>🏆 FINAL SCORE</div>
            <div className={`text-3xl font-black drop-shadow-lg animate-score-pop ${
              isNewHighScore ? 'text-[#FFED6D] animate-text-rainbow' : 'text-[#354093]'
            }`} style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>
              {score.toLocaleString()}
            </div>
            {isNewHighScore && (
              <Trophy className="w-8 h-8 text-[#FFED6D] animate-bounce animate-pulse-glow mx-auto mt-2" />
            )}
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className={`bg-[#F7BE76] border-4 border-[#354093] rounded-2xl p-4 text-center transform -rotate-1 shadow-lg transition-all duration-500 hover:scale-105 ${showContent ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`} style={{animationDelay: '0.3s'}}>
              <div className="flex items-center justify-center mb-2">
                <Target className="w-5 h-5 text-[#354093]" />
              </div>
              <div className="text-[#354093] text-xs font-black mb-1 animate-text-glow" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>📏 DISTANCE</div>
              <div className="text-[#E31902] text-xl font-black drop-shadow-lg animate-text-glow" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>
                {distanceInMeters}m
              </div>
            </div>

            <div className={`bg-[#FFED6D] border-4 border-[#E31902] rounded-2xl p-4 text-center transform rotate-1 shadow-lg transition-all duration-500 hover:scale-105 ${showContent ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`} style={{animationDelay: '0.4s'}}>
              <div className="flex items-center justify-center mb-2">
                <Coins className="w-5 h-5 text-[#E31902] animate-coin-spin" />
              </div>
              <div className="text-[#354093] text-xs font-black mb-1 animate-text-glow" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>💰 COINS EARNED</div>
              <div className="text-[#E31902] text-xl font-black drop-shadow-lg animate-coin-spin" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>
                {coins.toLocaleString()}
              </div>
            </div>
          </div>

          {/* High Score Comparison */}
          <div className={`bg-[#E31902] border-4 border-[#6AEEFD] rounded-2xl p-4 transform -rotate-1 shadow-lg transition-all duration-500 hover:scale-105 ${showContent ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`} style={{animationDelay: '0.5s'}}>
            <div className="flex justify-between items-center">
              <div>
                <div className="text-[#6AEEFD] text-sm font-black animate-text-glow" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>🏆 HIGH SCORE</div>
                <div className={`text-[#FFED6D] text-xl font-black drop-shadow-lg ${newHighScore ? 'animate-text-rainbow' : 'animate-text-glow'}`} style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>
                  {Math.max(score, highScore).toLocaleString()}
                </div>
              </div>
              <div className="text-right">
                <div className="text-[#6AEEFD] text-sm font-black animate-text-glow" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>💰 TOTAL COINS</div>
                <div className="text-[#FFED6D] text-xl font-black drop-shadow-lg animate-text-glow" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>
                  {totalCoins.toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Message */}
        <div className="text-center mb-8">
          <div className="bg-[#6AEEFD] border-4 border-[#FFED6D] rounded-2xl p-4 transform rotate-1 shadow-lg">
            <p className="text-[#354093] font-black text-lg" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>
              {score === 0 ? "🔥 BETTER LUCK NEXT TIME!" :
               score < 1000 ? "💪 KEEP PRACTICING!" :
               score < 5000 ? "👍 GOOD RUN!" :
               score < 10000 ? "🎉 GREAT PERFORMANCE!" :
               score < 25000 ? "⭐ EXCELLENT RUN!" :
               "🏆 AMAZING! YOU'RE A SUBWAY SURFER MASTER!"}
            </p>
            <p className="text-[#E31902] text-sm mt-2 font-bold">
              {distanceInMeters < 100 ? "🏃 Try to run further next time!" :
               distanceInMeters < 500 ? "🎯 You're getting the hang of it!" :
               distanceInMeters < 1000 ? "🚀 Nice distance covered!" :
               "💯 Incredible distance! Keep it up!"}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <button
            onClick={handleRestart}
            className={`w-full bg-gradient-to-r from-[#22c55e] to-[#16a34a] hover:from-[#16a34a] hover:to-[#15803d] border-4 border-[#FFED6D] text-white font-black py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-lg animate-pulse animate-button-hover-glow ${showContent ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`}
            style={{fontFamily: 'Impact, Arial Black, sans-serif', animationDelay: '0.6s'}}
          >
            <div className="flex items-center justify-center space-x-3">
              <RotateCcw className="w-6 h-6 animate-spin-slow" />
              <span className="text-lg drop-shadow-lg animate-text-glow">🔄 PLAY AGAIN!</span>
            </div>
          </button>

          <button
            onClick={handleMainMenu}
            className={`w-full bg-[#F7BE76] border-4 border-[#354093] hover:bg-[#354093] hover:border-[#F7BE76] text-[#354093] hover:text-[#F7BE76] font-black py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg animate-button-hover-glow ${showContent ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`}
            style={{fontFamily: 'Impact, Arial Black, sans-serif', animationDelay: '0.7s'}}
          >
            <div className="flex items-center justify-center space-x-3">
              <Home className="w-6 h-6 animate-wiggle" />
              <span className="text-lg drop-shadow-lg animate-text-glow">🏠 MAIN MENU</span>
            </div>
          </button>
        </div>

        {/* Tips */}
        <div className="mt-6 text-center">
          <div className="bg-[#FFED6D] border-3 border-[#E31902] rounded-2xl px-4 py-2 transform -rotate-1 shadow-lg">
            <p className="text-[#354093] text-sm font-black" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>
              💡 TIP: COLLECT POWER-UPS TO BOOST YOUR PERFORMANCE! 🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}