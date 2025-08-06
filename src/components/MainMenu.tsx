import React, { useEffect, useState } from 'react';
import { Play, Settings, ShoppingCart, Trophy, Coins } from 'lucide-react';
import { useGameStore } from '../store/gameStore';

export default function MainMenu() {
  const {
    setGameStatus,
    selectedCharacter,
    selectCharacter,
    characters,
    highScore,
    totalCoins
  } = useGameStore();

  const [floatingElements, setFloatingElements] = useState<Array<{id: number, x: number, y: number, size: number, delay: number}>>([]);
  const [sparkles, setSparkles] = useState<Array<{id: number, x: number, y: number, opacity: number}>>([]);

  // Generate floating background elements
  useEffect(() => {
    const elements = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 30 + 10,
      delay: Math.random() * 5
    }));
    setFloatingElements(elements);

    // Generate sparkles
    const sparkleElements = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random() * 0.8 + 0.2
    }));
    setSparkles(sparkleElements);
  }, []);

  const handleStartGame = () => {
    setGameStatus('playing');
  };

  const handleCharacterSelect = (characterId: string) => {
    const character = characters.find(c => c.id === characterId);
    if (character && character.unlocked) {
      selectCharacter(characterId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#6AEEFD] via-[#354093] to-[#E31902] flex flex-col relative overflow-hidden animate-gradient-x">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="absolute bg-gradient-to-br from-[#FFED6D] to-[#F7BE76] rounded-full blur-2xl animate-float"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: `${element.size}px`,
              height: `${element.size}px`,
              animationDelay: `${element.delay}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
        {sparkles.map((sparkle) => (
          <div
            key={sparkle.id}
            className="absolute w-2 h-2 bg-[#FFED6D] rounded-full animate-twinkle"
            style={{
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
              opacity: sparkle.opacity,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Particle System */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#FFED6D] rounded-full animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      {/* Header */}
      <div className="flex justify-between items-center p-6 animate-slide-down">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-[#FFED6D] border-4 border-[#F7BE76] rounded-full px-6 py-3 shadow-lg transform hover:scale-110 transition-all duration-300 hover:rotate-2 animate-bounce-gentle">
            <Coins className="w-7 h-7 text-[#E31902] animate-spin-slow" />
            <span className="text-[#354093] font-black text-xl tracking-wide">{totalCoins.toLocaleString()}</span>
          </div>
          <div className="flex items-center space-x-2 bg-[#FFED6D] border-4 border-[#F7BE76] rounded-full px-6 py-3 shadow-lg transform hover:scale-110 transition-all duration-300 hover:-rotate-2 animate-bounce-gentle" style={{animationDelay: '0.2s'}}>
            <Trophy className="w-7 h-7 text-[#E31902] animate-pulse" />
            <span className="text-[#354093] font-black text-xl tracking-wide">{highScore.toLocaleString()}</span>
          </div>
        </div>
        
        <div className="flex space-x-3">
          <button className="bg-[#F7BE76] border-4 border-[#FFED6D] hover:bg-[#FFED6D] hover:border-[#F7BE76] transition-all duration-300 rounded-full p-4 shadow-lg transform hover:scale-125 active:scale-95 hover:rotate-12 animate-wiggle">
            <Settings className="w-7 h-7 text-[#354093] animate-spin-slow" />
          </button>
          <button className="bg-[#F7BE76] border-4 border-[#FFED6D] hover:bg-[#FFED6D] hover:border-[#F7BE76] transition-all duration-300 rounded-full p-4 shadow-lg transform hover:scale-125 active:scale-95 hover:-rotate-12 animate-wiggle" style={{animationDelay: '0.5s'}}>
            <ShoppingCart className="w-7 h-7 text-[#354093] animate-bounce" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        {/* Game Title */}
        <div className="text-center mb-12 relative animate-fade-in-up">
          {/* Title with graffiti-style outline */}
          <div className="relative">
            <h1 className="text-7xl md:text-9xl font-black text-[#FFED6D] mb-2 transform -rotate-2 relative z-10 animate-title-bounce" style={{textShadow: '6px 6px 0px #354093, 12px 12px 0px #E31902, 18px 18px 20px rgba(0,0,0,0.3)', fontFamily: 'Impact, Arial Black, sans-serif', letterSpacing: '0.1em'}}>
            SUBTRAE
            </h1>
            <h2 className="text-5xl md:text-7xl font-black text-[#6AEEFD] transform rotate-1 relative z-10 animate-title-bounce" style={{textShadow: '4px 4px 0px #354093, 8px 8px 0px #E31902, 12px 12px 15px rgba(0,0,0,0.3)', fontFamily: 'Impact, Arial Black, sans-serif', letterSpacing: '0.1em', animationDelay: '0.3s'}}>
              SURFERS
            </h2>
            {/* Glowing effect behind title */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFED6D] via-[#F7BE76] to-[#6AEEFD] opacity-30 blur-3xl animate-pulse-glow" />
          </div>
          <div className="bg-[#F7BE76] border-4 border-[#FFED6D] rounded-2xl px-6 py-3 mt-6 inline-block transform rotate-1 shadow-lg animate-wiggle-slow hover:scale-110 transition-transform duration-300">
            <p className="text-[#354093] text-xl font-bold animate-text-glow">
              🏃‍♂️ Run as far as you can! 🚇
            </p>
          </div>
        </div>

        {/* Character Selection */}
        <div className="mb-12 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <div className="bg-[#6AEEFD] border-4 border-[#FFED6D] rounded-2xl px-8 py-4 mb-8 inline-block transform -rotate-1 shadow-lg animate-bounce-gentle hover:scale-105 transition-transform duration-300">
            <h3 className="text-[#354093] text-3xl font-black text-center animate-text-rainbow" style={{fontFamily: 'Impact, Arial Black, sans-serif', letterSpacing: '0.05em'}}>🎭 CHOOSE YOUR SURFER! 🎭</h3>
          </div>
          <div className="flex space-x-4 overflow-x-auto pb-4">
            {characters.map((character, index) => (
              <div
                key={character.id}
                className={`relative flex-shrink-0 cursor-pointer transition-all duration-500 hover:scale-110 animate-character-float ${
                  selectedCharacter === character.id ? 'scale-115 animate-selected-glow' : ''
                }`}
                style={{animationDelay: `${index * 0.2}s`}}
                onClick={() => handleCharacterSelect(character.id)}
              >
                <div
                  className={`w-28 h-36 rounded-3xl border-6 flex items-center justify-center relative overflow-hidden shadow-xl transform transition-all duration-300 ${
                    character.unlocked
                      ? selectedCharacter === character.id
                        ? 'border-[#FFED6D] bg-gradient-to-b from-[#F7BE76] to-[#6AEEFD] scale-110 shadow-2xl animate-character-selected'
                        : 'border-[#C6FEFE] bg-gradient-to-b from-[#6AEEFD]/30 to-[#354093]/30 hover:border-[#FFED6D] hover:scale-105 hover:rotate-3'
                      : 'border-gray-400 bg-gray-600/50 animate-locked-shake'
                  }`}
                >
                  {/* Character Avatar */}
                  <div
                    className={`w-20 h-20 rounded-full border-4 border-white shadow-lg animate-avatar-pulse ${
                      character.id === 'jake'
                        ? 'bg-gradient-to-br from-[#22c55e] to-[#16a34a]'
                        : character.id === 'tricky'
                        ? 'bg-gradient-to-br from-[#E31902] to-[#dc2626]'
                        : character.id === 'fresh'
                        ? 'bg-gradient-to-br from-[#6AEEFD] to-[#3b82f6]'
                        : 'bg-gradient-to-br from-[#a855f7] to-[#7c3aed]'
                    }`}
                    style={{animationDelay: `${index * 0.1}s`}}
                  />
                  
                  {/* Lock overlay */}
                  {!character.unlocked && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                        <span className="text-black text-xs font-bold">🔒</span>
                      </div>
                    </div>
                  )}
                  
                  {/* Selected indicator */}
                  {selectedCharacter === character.id && character.unlocked && (
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#FFED6D] border-3 border-[#354093] rounded-full flex items-center justify-center shadow-lg animate-selected-indicator">
                      <span className="text-[#354093] text-sm font-black animate-checkmark">✓</span>
                    </div>
                  )}
                </div>
                
                <div className="text-center mt-3">
                  <div className="bg-[#354093] border-2 border-[#FFED6D] rounded-xl px-3 py-1 inline-block">
                    <p className="text-[#FFED6D] font-black text-sm" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>{character.name.toUpperCase()}</p>
                  </div>
                  {!character.unlocked && (
                    <div className="bg-[#E31902] border-2 border-[#FFED6D] rounded-lg px-2 py-1 mt-1 inline-block">
                      <p className="text-[#FFED6D] text-xs font-bold">💰 {character.cost}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Play Button */}
        <div className="animate-fade-in-up" style={{animationDelay: '1s'}}>
          <button
            onClick={handleStartGame}
            className="group relative bg-gradient-to-r from-[#22c55e] to-[#16a34a] hover:from-[#16a34a] hover:to-[#15803d] border-6 border-[#FFED6D] text-white font-black py-8 px-16 rounded-full text-4xl shadow-2xl transform transition-all duration-300 hover:scale-125 active:scale-95 animate-play-button-pulse hover:rotate-2"
            style={{fontFamily: 'Impact, Arial Black, sans-serif', letterSpacing: '0.1em'}}
          >
            <div className="flex items-center space-x-4">
              <Play className="w-10 h-10 fill-current animate-play-icon" />
              <span className="drop-shadow-lg animate-text-glow">PLAY!</span>
            </div>
            
            {/* Multiple glow effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFED6D] to-[#F7BE76] rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-xl animate-glow-pulse" />
            <div className="absolute inset-0 bg-[#22c55e] rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-2xl" />
            
            {/* Enhanced sparkle effects */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#FFED6D] rounded-full animate-sparkle"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#F7BE76] rounded-full animate-sparkle" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute -top-2 -left-2 w-2 h-2 bg-[#6AEEFD] rounded-full animate-sparkle" style={{animationDelay: '1s'}}></div>
            <div className="absolute -bottom-2 -right-2 w-2 h-2 bg-[#E31902] rounded-full animate-sparkle" style={{animationDelay: '1.5s'}}></div>
            
            {/* Ripple effect */}
            <div className="absolute inset-0 rounded-full border-4 border-[#FFED6D] opacity-0 group-hover:opacity-100 animate-ripple" />
          </button>
        </div>

        {/* Controls Info */}
        <div className="mt-12 text-center animate-fade-in-up" style={{animationDelay: '1.2s'}}>
          <div className="bg-[#354093] border-4 border-[#6AEEFD] rounded-2xl px-8 py-4 inline-block transform rotate-1 shadow-lg animate-wiggle-slow hover:scale-105 transition-transform duration-300">
            <p className="text-[#FFED6D] text-lg font-black mb-3 animate-text-rainbow" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>🎮 CONTROLS 🎮</p>
            <div className="flex flex-wrap justify-center gap-3 text-[#C6FEFE] text-sm font-bold">
              <div className="bg-[#6AEEFD] text-[#354093] px-3 py-1 rounded-lg border-2 border-[#FFED6D] animate-control-bounce hover:scale-110 transition-transform duration-200">← → Move</div>
              <div className="bg-[#6AEEFD] text-[#354093] px-3 py-1 rounded-lg border-2 border-[#FFED6D] animate-control-bounce hover:scale-110 transition-transform duration-200" style={{animationDelay: '0.1s'}}>↑ Jump</div>
              <div className="bg-[#6AEEFD] text-[#354093] px-3 py-1 rounded-lg border-2 border-[#FFED6D] animate-control-bounce hover:scale-110 transition-transform duration-200" style={{animationDelay: '0.2s'}}>↓ Roll</div>
              <div className="bg-[#6AEEFD] text-[#354093] px-3 py-1 rounded-lg border-2 border-[#FFED6D] animate-control-bounce hover:scale-110 transition-transform duration-200" style={{animationDelay: '0.3s'}}>📱 Swipe</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center p-6 relative z-10 animate-fade-in-up" style={{animationDelay: '1.4s'}}>
        <div className="bg-[#E31902] border-4 border-[#FFED6D] rounded-2xl px-6 py-3 inline-block transform -rotate-1 shadow-lg animate-wiggle-slow hover:scale-105 transition-transform duration-300">
          <p className="text-[#FFED6D] text-lg font-black animate-text-glow" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>
            💰 COLLECT COINS • 🚫 AVOID OBSTACLES • 🏆 BEAT HIGH SCORE!
          </p>
        </div>
      </div>
    </div>
  );
}