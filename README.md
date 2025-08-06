# Subtrae Surfers Clone

A modern, web-based endless runner game inspired by Subway Surfers, built with React, TypeScript, and Three.js. Run, jump, roll, and collect coins while avoiding obstacles in this addictive 3D game!

## 🎮 Features

### Core Gameplay
- **Endless Runner**: Run as far as you can while avoiding obstacles
- **3D Graphics**: Beautiful Three.js-powered 3D environment
- **Multiple Characters**: Unlock and play as different characters (Jake, Tricky, Fresh, Yutani)
- **Power-ups**: Collect jetpacks, magnets, sneakers, and multipliers
- **Progressive Difficulty**: Speed increases as you run further
- **Score System**: Track your score, coins, and distance

### Controls
- **Keyboard**: Arrow keys or WASD for movement, Spacebar for jump
- **Touch/Mobile**: Swipe gestures for movement and actions
- **Mouse**: Click and drag for desktop play

### Game Modes
- **Main Menu**: Character selection and game start
- **Playing**: Active gameplay with HUD
- **Paused**: Pause overlay with resume options
- **Game Over**: Score display and restart options

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd zss
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to play the game!

### Building for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

### 3D Graphics & Game Engine
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for React Three Fiber

### State Management
- **Zustand** - Lightweight state management
- **React Spring** - Animation library

### Audio
- **Howler.js** - Audio library for sound effects and music

### UI/UX
- **Sonner** - Toast notifications
- **React Router DOM** - Navigation
- **React Use Gesture** - Touch and mouse gesture handling

## 🎯 Game Mechanics

### Movement
- **Lane Switching**: Move between 3 lanes (left, center, right)
- **Jumping**: Avoid low obstacles by jumping
- **Rolling**: Slide under high obstacles

### Collectibles
- **Coins**: Collect for character unlocks and high scores
- **Power-ups**: Temporary boosts with different effects
  - Jetpack: Fly over obstacles
  - Magnet: Attract nearby coins
  - Sneakers: Run faster
  - Multiplier: Double score points

### Obstacles
- **Trains**: Moving obstacles that require timing
- **Barriers**: Static obstacles to avoid
- **Poles**: Vertical obstacles requiring jumping or rolling

### Characters
- **Jake** (Default): The original subway surfer
- **Tricky** (500 coins): The brains of the Surfers
- **Fresh** (1000 coins): 80s styled character
- **Yutani** (1500 coins): Tech genius character

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── GameEngine.tsx  # Main 3D game engine
│   ├── GameHUD.tsx     # Heads-up display
│   ├── MainMenu.tsx    # Main menu screen
│   ├── PauseScreen.tsx # Pause overlay
│   ├── GameOverScreen.tsx # Game over screen
│   ├── Settings.tsx    # Settings panel
│   ├── Shop.tsx        # Character shop
│   └── Empty.tsx       # Placeholder component
├── hooks/              # Custom React hooks
│   ├── useGameControls.ts # Input handling
│   └── useTheme.ts     # Theme management
├── store/              # State management
│   └── gameStore.ts    # Zustand game state
├── pages/              # Page components
│   └── Home.tsx        # Home page
├── lib/                # Utility functions
│   └── utils.ts        # Helper functions
├── assets/             # Static assets
│   └── react.svg       # React logo
├── App.tsx             # Main app component
├── main.tsx            # App entry point
└── index.css           # Global styles
```

## 🎨 Customization

### Adding New Characters
Edit the `initialCharacters` array in `src/store/gameStore.ts`:

```typescript
{
  id: 'new-character',
  name: 'New Character',
  unlocked: false,
  cost: 2000,
  description: 'Description of the new character'
}
```

### Modifying Game Settings
Adjust game constants in `src/components/GameEngine.tsx`:

```typescript
const LANE_WIDTH = 120;
const OBSTACLE_SPAWN_DISTANCE = 40;
const COIN_SPAWN_DISTANCE = 20;
const SPEED_MULTIPLIER = 0.05;
```

### Styling
The project uses Tailwind CSS for styling. Custom styles can be added to:
- `src/index.css` - Global styles
- `src/animations.css` - Custom animations

## 🎵 Audio

The game supports:
- **Sound Effects**: Obstacle collisions, coin collection, power-ups
- **Background Music**: Ambient game music
- **Volume Control**: Adjustable audio levels
- **Mute Options**: Toggle sound and music independently

## 📱 Mobile Support

The game is fully responsive and optimized for:
- **Touch Controls**: Swipe gestures for movement
- **Mobile Browsers**: Optimized performance
- **Responsive Design**: Adapts to different screen sizes

## 🚀 Performance

- **60 FPS Gameplay**: Smooth animations and responsive controls
- **Optimized 3D Rendering**: Efficient Three.js scene management
- **Memory Management**: Proper cleanup of 3D objects and event listeners
- **Progressive Loading**: Assets load as needed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by Subway Surfers by Kiloo Games
- Built with modern web technologies
- Special thanks to the Three.js and React communities

## 🐛 Known Issues

- Performance may vary on older devices
- Some browsers may require WebGL support
- Touch controls may need adjustment for different screen sizes

## 📞 Support

If you encounter any issues or have questions:
1. Check the [Issues](https://github.com/your-repo/issues) page
2. Create a new issue with detailed information
3. Include your browser, device, and steps to reproduce

---

**Happy Gaming! 🎮**
