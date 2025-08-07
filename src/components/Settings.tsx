import { ArrowLeft, Volume2, VolumeX, Music } from 'lucide-react';
import { useGameStore } from '../store/gameStore';

interface SettingsProps {
  onBack: () => void;
}

export default function Settings({ onBack }: SettingsProps) {
  const {
    soundEnabled,
    musicEnabled,
    volume,
    setSoundEnabled,
    setMusicEnabled,
    setVolume
  } = useGameStore();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E31902] via-[#354093] to-[#6AEEFD] flex flex-col relative overflow-hidden">
      {/* Graffiti Background Elements */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-16 left-8 w-36 h-36 bg-[#FFED6D] rounded-full transform rotate-12"></div>
        <div className="absolute top-32 right-16 w-28 h-28 bg-[#F7BE76] rounded-full transform -rotate-45"></div>
        <div className="absolute bottom-32 left-16 w-44 h-44 bg-[#6AEEFD] rounded-full transform rotate-45"></div>
        <div className="absolute bottom-16 right-8 w-32 h-32 bg-[#E31902] rounded-full transform -rotate-12"></div>
      </div>
      
      {/* Header */}
      <div className="flex items-center justify-between p-6 relative z-10">
        <button
          onClick={onBack}
          className="bg-[#F7BE76] border-4 border-[#354093] hover:bg-[#354093] hover:border-[#F7BE76] transition-all duration-200 rounded-2xl p-3 transform -rotate-2 shadow-lg group"
        >
          <ArrowLeft className="w-6 h-6 text-[#354093] group-hover:text-[#F7BE76]" />
        </button>
        <div className="bg-[#FFED6D] border-4 border-[#E31902] rounded-2xl px-6 py-3 transform rotate-1 shadow-lg">
          <h1 className="text-2xl font-black text-[#354093] drop-shadow-lg" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>⚙️ SETTINGS</h1>
        </div>
        <div className="w-12" /> {/* Spacer */}
      </div>

      {/* Settings Content */}
      <div className="flex-1 flex items-center justify-center px-6 relative z-10">
        <div className="bg-[#354093] border-8 border-[#FFED6D] rounded-3xl p-8 max-w-md w-full shadow-2xl transform -rotate-1">
          <div className="space-y-8">
            {/* Sound Settings */}
            <div>
              <div className="bg-[#E31902] border-4 border-[#6AEEFD] rounded-2xl px-4 py-3 transform rotate-1 shadow-lg mb-6">
                <h2 className="text-xl font-black text-[#FFED6D] drop-shadow-lg" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>🔊 AUDIO SETTINGS</h2>
              </div>
              
              {/* Sound Effects */}
              <div className="bg-[#6AEEFD] border-4 border-[#F7BE76] rounded-2xl p-4 mb-6 transform -rotate-1 shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {soundEnabled ? (
                      <Volume2 className="w-6 h-6 text-[#354093]" />
                    ) : (
                      <VolumeX className="w-6 h-6 text-[#6b7280]" />
                    )}
                    <span className="text-[#354093] font-black" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>🎵 SOUND EFFECTS</span>
                  </div>
                  <button
                    onClick={() => setSoundEnabled(!soundEnabled)}
                    className={`relative w-16 h-8 rounded-full border-3 transition-all duration-200 ${
                      soundEnabled ? 'bg-[#22c55e] border-[#FFED6D]' : 'bg-[#6b7280] border-[#9ca3af]'
                    }`}
                  >
                    <div
                      className={`absolute top-0.5 w-7 h-7 bg-[#FFED6D] border-2 border-[#354093] rounded-full transition-transform shadow-lg ${
                        soundEnabled ? 'translate-x-8' : 'translate-x-0.5'
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Music */}
              <div className="bg-[#F7BE76] border-4 border-[#E31902] rounded-2xl p-4 mb-6 transform rotate-1 shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {musicEnabled ? (
                      <Music className="w-6 h-6 text-[#354093]" />
                    ) : (
                      <Music className="w-6 h-6 text-[#6b7280]" />
                    )}
                    <span className="text-[#354093] font-black" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>🎶 MUSIC</span>
                  </div>
                  <button
                    onClick={() => setMusicEnabled(!musicEnabled)}
                    className={`relative w-16 h-8 rounded-full border-3 transition-all duration-200 ${
                      musicEnabled ? 'bg-[#22c55e] border-[#FFED6D]' : 'bg-[#6b7280] border-[#9ca3af]'
                    }`}
                  >
                    <div
                      className={`absolute top-0.5 w-7 h-7 bg-[#FFED6D] border-2 border-[#354093] rounded-full transition-transform shadow-lg ${
                        musicEnabled ? 'translate-x-8' : 'translate-x-0.5'
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Volume Slider */}
              <div className="bg-[#FFED6D] border-4 border-[#354093] rounded-2xl p-4 transform -rotate-1 shadow-lg">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[#354093] font-black" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>🔊 VOLUME</span>
                  <div className="bg-[#E31902] border-2 border-[#6AEEFD] rounded-lg px-3 py-1">
                    <span className="text-[#FFED6D] text-sm font-black" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>{Math.round(volume * 100)}%</span>
                  </div>
                </div>
                <div className="relative">
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    onChange={(e) => setVolume(parseFloat(e.target.value))}
                    className="w-full h-3 bg-[#354093] border-2 border-[#E31902] rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>
              </div>
            </div>

            {/* Game Info */}
            <div className="border-t-4 border-[#6AEEFD] pt-6">
              <div className="bg-[#E31902] border-4 border-[#F7BE76] rounded-2xl px-4 py-3 transform rotate-1 shadow-lg mb-4">
                <h2 className="text-xl font-black text-[#FFED6D] drop-shadow-lg" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>ℹ️ ABOUT</h2>
              </div>
              <div className="bg-[#6AEEFD] border-4 border-[#FFED6D] rounded-2xl p-4 transform -rotate-1 shadow-lg">
                <div className="space-y-2 text-[#354093] text-sm font-bold">
                  <p><span className="font-black" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>VERSION:</span> 1.0.0</p>
                  <p><span className="font-black" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>DEVELOPER:</span> Trae AI</p>
                  <p><span className="font-black" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>ENGINE:</span> React + TypeScript</p>
                </div>
              </div>
            </div>

            {/* Controls Info */}
            <div className="border-t-4 border-[#F7BE76] pt-6">
              <div className="bg-[#F7BE76] border-4 border-[#354093] rounded-2xl px-4 py-3 transform -rotate-1 shadow-lg mb-4">
                <h2 className="text-xl font-black text-[#354093] drop-shadow-lg" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>🎮 CONTROLS</h2>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-[#FFED6D] border-4 border-[#E31902] rounded-2xl p-4 transform rotate-1 shadow-lg">
                  <div className="text-[#354093] font-black mb-2" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>🖥️ DESKTOP</div>
                  <div className="text-[#E31902] text-xs space-y-1 font-bold">
                    <div>← → : Move lanes</div>
                    <div>↑ / Space : Jump</div>
                    <div>↓ : Roll/Slide</div>
                  </div>
                </div>
                <div className="bg-[#6AEEFD] border-4 border-[#F7BE76] rounded-2xl p-4 transform -rotate-1 shadow-lg">
                  <div className="text-[#354093] font-black mb-2" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>📱 MOBILE</div>
                  <div className="text-[#354093] text-xs space-y-1 font-bold">
                    <div>Swipe left/right</div>
                    <div>Swipe up / Tap</div>
                    <div>Swipe down</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}