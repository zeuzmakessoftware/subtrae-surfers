import React from 'react';
import { Play, Home, Settings, RotateCcw } from 'lucide-react';
import { useGameStore } from '../store/gameStore';

export default function PauseScreen() {
  const {
    score,
    coins,
    distance,
    setGameStatus,
    resetGame
  } = useGameStore();

  const handleResume = () => {
    setGameStatus('playing');
  };

  const handleRestart = () => {
    resetGame();
    setGameStatus('playing');
  };

  const handleMainMenu = () => {
    resetGame();
    setGameStatus('menu');
  };

  const handleSettings = () => {
    // TODO: Implement settings screen
    console.log('Settings clicked');
  };

  return (
    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-sm w-full mx-4 shadow-2xl border border-white/20">
        {/* Pause Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Game Paused</h1>
          <p className="text-white/70">Take a break and come back when ready!</p>
        </div>

        {/* Current Stats */}
        <div className="bg-white/10 rounded-2xl p-4 mb-8">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-white/80 text-xs font-medium mb-1">Score</div>
              <div className="text-yellow-400 text-lg font-bold">
                {score.toLocaleString()}
              </div>
            </div>
            <div>
              <div className="text-white/80 text-xs font-medium mb-1">Coins</div>
              <div className="text-yellow-400 text-lg font-bold">
                {coins}
              </div>
            </div>
            <div>
              <div className="text-white/80 text-xs font-medium mb-1">Distance</div>
              <div className="text-blue-400 text-lg font-bold">
                {Math.floor(distance)}m
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleResume}
            className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg"
          >
            <div className="flex items-center justify-center space-x-3">
              <Play className="w-6 h-6 fill-current" />
              <span className="text-lg">Resume</span>
            </div>
          </button>

          <button
            onClick={handleRestart}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-2xl transition-all duration-200 transform hover:scale-105 active:scale-95"
          >
            <div className="flex items-center justify-center space-x-3">
              <RotateCcw className="w-5 h-5" />
              <span>Restart</span>
            </div>
          </button>

          <button
            onClick={handleSettings}
            className="w-full bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-6 rounded-2xl transition-all duration-200 transform hover:scale-105 active:scale-95 border border-white/30"
          >
            <div className="flex items-center justify-center space-x-3">
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </div>
          </button>

          <button
            onClick={handleMainMenu}
            className="w-full bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-6 rounded-2xl transition-all duration-200 transform hover:scale-105 active:scale-95 border border-white/30"
          >
            <div className="flex items-center justify-center space-x-3">
              <Home className="w-5 h-5" />
              <span>Main Menu</span>
            </div>
          </button>
        </div>

        {/* Controls Reminder */}
        <div className="mt-6 text-center">
          <p className="text-white/60 text-sm mb-2">Controls:</p>
          <div className="flex flex-wrap justify-center gap-2 text-white/70 text-xs">
            <span className="bg-white/10 px-2 py-1 rounded">← → Move</span>
            <span className="bg-white/10 px-2 py-1 rounded">↑ Jump</span>
            <span className="bg-white/10 px-2 py-1 rounded">↓ Roll</span>
          </div>
        </div>
      </div>
    </div>
  );
}