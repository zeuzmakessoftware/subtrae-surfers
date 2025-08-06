import { create } from 'zustand';

export interface Character {
  id: string;
  name: string;
  unlocked: boolean;
  cost: number;
  description: string;
}

export interface PowerUp {
  id: string;
  name: string;
  type: 'jetpack' | 'magnet' | 'sneakers' | 'multiplier' | 'hoverboard';
  duration: number;
  active: boolean;
  timeLeft: number;
}

export interface GameState {
  // Game status
  gameStatus: 'menu' | 'playing' | 'paused' | 'gameOver';
  
  // Player stats
  score: number;
  coins: number;
  distance: number;
  highScore: number;
  totalCoins: number;
  
  // Character and customization
  selectedCharacter: string;
  characters: Character[];
  
  // Gameplay
  speed: number;
  lane: number; // 0, 1, 2 (left, center, right)
  isJumping: boolean;
  isRolling: boolean;
  powerUps: PowerUp[];
  
  // Settings
  soundEnabled: boolean;
  musicEnabled: boolean;
  volume: number;
  
  // Actions
  setGameStatus: (status: GameState['gameStatus']) => void;
  addScore: (points: number) => void;
  addCoins: (amount: number) => void;
  addDistance: (dist: number) => void;
  setLane: (lane: number) => void;
  setJumping: (jumping: boolean) => void;
  setRolling: (rolling: boolean) => void;
  activatePowerUp: (powerUp: PowerUp) => void;
  updatePowerUps: (deltaTime: number) => void;
  selectCharacter: (characterId: string) => void;
  unlockCharacter: (characterId: string) => void;
  resetGame: () => void;
  setSoundEnabled: (enabled: boolean) => void;
  setMusicEnabled: (enabled: boolean) => void;
  setVolume: (volume: number) => void;
}

const initialCharacters: Character[] = [
  {
    id: 'jake',
    name: 'Jake',
    unlocked: true,
    cost: 0,
    description: 'The original subway surfer and our main surfer!'
  },
  {
    id: 'tricky',
    name: 'Tricky',
    unlocked: false,
    cost: 500,
    description: 'A real perfectionist and the brains of the Surfers!'
  },
  {
    id: 'fresh',
    name: 'Fresh',
    unlocked: false,
    cost: 1000,
    description: 'A boy with 80s styled high top fade!'
  },
  {
    id: 'yutani',
    name: 'Yutani',
    unlocked: false,
    cost: 1500,
    description: 'A tech genius and science obsessed!'
  }
];

export const useGameStore = create<GameState>((set, get) => ({
  // Initial state
  gameStatus: 'menu',
  score: 0,
  coins: 0,
  distance: 0,
  highScore: parseInt(localStorage.getItem('highScore') || '0'),
  totalCoins: parseInt(localStorage.getItem('totalCoins') || '0'),
  selectedCharacter: 'jake',
  characters: initialCharacters,
  speed: 0.8, // Much slower initial speed
  lane: 1,
  isJumping: false,
  isRolling: false,
  powerUps: [],
  soundEnabled: true,
  musicEnabled: true,
  volume: 0.7,

  // Actions
  setGameStatus: (status) => set({ gameStatus: status }),
  
  addScore: (points) => set((state) => {
    const newScore = state.score + points;
    const newHighScore = Math.max(newScore, state.highScore);
    if (newHighScore > state.highScore) {
      localStorage.setItem('highScore', newHighScore.toString());
    }
    return { score: newScore, highScore: newHighScore };
  }),
  
  addCoins: (amount) => set((state) => {
    const newCoins = state.coins + amount;
    const newTotalCoins = state.totalCoins + amount;
    localStorage.setItem('totalCoins', newTotalCoins.toString());
    return { coins: newCoins, totalCoins: newTotalCoins };
  }),
  
  addDistance: (dist) => set((state) => ({ distance: state.distance + dist })),
  
  setLane: (lane) => set({ lane: Math.max(0, Math.min(2, lane)) }),
  
  setJumping: (jumping) => set({ isJumping: jumping }),
  
  setRolling: (rolling) => set({ isRolling: rolling }),
  
  activatePowerUp: (powerUp) => set((state) => {
    const existingIndex = state.powerUps.findIndex(p => p.type === powerUp.type);
    if (existingIndex >= 0) {
      // Extend existing power-up
      const newPowerUps = [...state.powerUps];
      newPowerUps[existingIndex] = {
        ...newPowerUps[existingIndex],
        timeLeft: powerUp.duration,
        active: true
      };
      return { powerUps: newPowerUps };
    } else {
      // Add new power-up
      return {
        powerUps: [...state.powerUps, { ...powerUp, active: true, timeLeft: powerUp.duration }]
      };
    }
  }),
  
  updatePowerUps: (deltaTime) => set((state) => {
    const updatedPowerUps = state.powerUps
      .map(powerUp => ({
        ...powerUp,
        timeLeft: Math.max(0, powerUp.timeLeft - deltaTime)
      }))
      .filter(powerUp => powerUp.timeLeft > 0);
    
    return { powerUps: updatedPowerUps };
  }),
  
  selectCharacter: (characterId) => set({ selectedCharacter: characterId }),
  
  unlockCharacter: (characterId) => set((state) => {
    const character = state.characters.find(c => c.id === characterId);
    if (character && state.totalCoins >= character.cost) {
      const newTotalCoins = state.totalCoins - character.cost;
      localStorage.setItem('totalCoins', newTotalCoins.toString());
      
      return {
        characters: state.characters.map(c => 
          c.id === characterId ? { ...c, unlocked: true } : c
        ),
        totalCoins: newTotalCoins
      };
    }
    return state;
  }),
  
  resetGame: () => set({
    score: 0,
    coins: 0,
    distance: 0,
    speed: 0.8, // Reset speed back to original value
    lane: 1,
    isJumping: false,
    isRolling: false,
    powerUps: [],
    gameStatus: 'menu'
  }),
  
  setSoundEnabled: (enabled) => set({ soundEnabled: enabled }),
  setMusicEnabled: (enabled) => set({ musicEnabled: enabled }),
  setVolume: (volume) => set({ volume })
}));