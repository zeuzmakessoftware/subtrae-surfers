import React from 'react';
import { useGameStore } from './store/gameStore';
import { useGameControls } from './hooks/useGameControls';
import MainMenu from './components/MainMenu';
import GameEngine from './components/GameEngine';
import GameHUD from './components/GameHUD';
import PauseScreen from './components/PauseScreen';
import GameOverScreen from './components/GameOverScreen';
import { Toaster } from 'sonner';

function App() {
  const { gameStatus } = useGameStore();
  
  // Initialize game controls
  useGameControls();

  return (
    <div className="w-full h-screen overflow-hidden relative">
      {/* Main Menu */}
      {gameStatus === 'menu' && <MainMenu />}
      
      {/* Game Screen */}
      {gameStatus === 'playing' && (
        <>
          <GameEngine />
          <GameHUD />
        </>
      )}
      
      {/* Pause Overlay */}
      {gameStatus === 'paused' && (
        <>
          <GameEngine />
          <GameHUD />
          <PauseScreen />
        </>
      )}
      
      {/* Game Over Screen */}
      {gameStatus === 'gameOver' && <GameOverScreen />}
      
      {/* Toast notifications */}
      <Toaster 
        position="top-center" 
        toastOptions={{
          style: {
            background: 'rgba(0, 0, 0, 0.8)',
            color: 'white',
            border: 'none'
          }
        }}
      />
    </div>
  );
}

export default App;
