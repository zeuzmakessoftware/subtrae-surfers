import React from 'react';
import { ArrowLeft, Coins, Lock, Check } from 'lucide-react';
import { useGameStore } from '../store/gameStore';
import { toast } from 'sonner';

interface ShopProps {
  onBack: () => void;
}

export default function Shop({ onBack }: ShopProps) {
  const {
    characters,
    selectedCharacter,
    totalCoins,
    selectCharacter,
    unlockCharacter
  } = useGameStore();

  const handlePurchase = (characterId: string) => {
    const character = characters.find(c => c.id === characterId);
    if (!character) return;

    if (totalCoins >= character.cost) {
      unlockCharacter(characterId);
      selectCharacter(characterId);
      toast.success(`${character.name} unlocked!`);
    } else {
      toast.error(`Not enough coins! Need ${character.cost - totalCoins} more coins.`);
    }
  };

  const handleSelect = (characterId: string) => {
    selectCharacter(characterId);
    toast.success('Character selected!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E31902] via-[#354093] to-[#6AEEFD] flex flex-col relative overflow-hidden">
      {/* Graffiti Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-[#FFED6D] rounded-full transform rotate-12"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-[#F7BE76] rounded-full transform -rotate-45"></div>
        <div className="absolute bottom-40 left-20 w-48 h-48 bg-[#6AEEFD] rounded-full transform rotate-45"></div>
        <div className="absolute bottom-20 right-10 w-36 h-36 bg-[#E31902] rounded-full transform -rotate-12"></div>
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
          <h1 className="text-2xl font-black text-[#354093] drop-shadow-lg" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>🛍️ CHARACTER SHOP</h1>
        </div>
        <div className="bg-[#6AEEFD] border-4 border-[#FFED6D] rounded-2xl px-4 py-3 transform rotate-2 shadow-lg">
          <div className="flex items-center space-x-2">
            <Coins className="w-6 h-6 text-[#FFED6D]" />
            <span className="text-[#354093] font-black" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>{totalCoins.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Shop Content */}
      <div className="flex-1 px-6 pb-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="bg-[#E31902] border-4 border-[#6AEEFD] rounded-2xl px-6 py-4 transform -rotate-1 shadow-lg inline-block">
              <p className="text-[#FFED6D] text-lg font-black" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>
                💰 UNLOCK NEW CHARACTERS WITH YOUR COINS! 🎮
              </p>
            </div>
          </div>

          {/* Characters Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {characters.map((character) => {
              const isSelected = selectedCharacter === character.id;
              const canAfford = totalCoins >= character.cost;

              return (
                <div
                  key={character.id}
                  className={`rounded-3xl p-6 border-4 transition-all duration-200 transform hover:scale-105 shadow-lg ${
                    isSelected
                      ? 'bg-[#FFED6D] border-[#E31902] shadow-lg shadow-[#FFED6D]/30 rotate-1'
                      : character.unlocked
                      ? 'bg-[#6AEEFD] border-[#354093] hover:border-[#FFED6D] -rotate-1'
                      : canAfford
                      ? 'bg-[#F7BE76] border-[#22c55e] hover:border-[#16a34a] rotate-1'
                      : 'bg-[#354093] border-[#6b7280] rotate-0'
                  }`}
                >
                  {/* Character Avatar */}
                  <div className="flex justify-center mb-4">
                    <div className="relative">
                      <div
                        className={`w-28 h-28 rounded-full border-4 flex items-center justify-center shadow-lg ${
                          character.unlocked
                            ? isSelected
                              ? 'border-[#E31902] bg-gradient-to-b from-[#FFED6D]/30 to-[#F7BE76]/30 animate-pulse'
                              : 'border-[#354093] bg-[#6AEEFD]/20'
                            : 'border-[#6b7280] bg-[#374151]/20'
                        }`}
                      >
                        {/* Character representation */}
                        <div
                          className={`w-20 h-20 rounded-full border-2 border-white shadow-inner ${
                            character.id === 'jake'
                              ? 'bg-gradient-to-br from-[#22c55e] to-[#16a34a]'
                              : character.id === 'tricky'
                              ? 'bg-gradient-to-br from-[#E31902] to-[#dc2626]'
                              : character.id === 'fresh'
                              ? 'bg-gradient-to-br from-[#6AEEFD] to-[#354093]'
                              : 'bg-gradient-to-br from-[#F7BE76] to-[#f59e0b]'
                          }`}
                        />
                      </div>

                      {/* Status indicators */}
                      {!character.unlocked && (
                        <div className="absolute inset-0 bg-[#354093]/80 rounded-full flex items-center justify-center border-4 border-[#6b7280]">
                          <Lock className="w-10 h-10 text-[#6AEEFD]" />
                        </div>
                      )}
                      
                      {isSelected && character.unlocked && (
                        <div className="absolute -top-3 -right-3 w-10 h-10 bg-[#E31902] border-3 border-[#FFED6D] rounded-full flex items-center justify-center animate-bounce shadow-lg">
                          <Check className="w-6 h-6 text-[#FFED6D]" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Character Info */}
                  <div className="text-center mb-6">
                    <div className={`rounded-2xl px-4 py-2 mb-3 border-3 ${
                      isSelected ? 'bg-[#E31902] border-[#FFED6D]' : 
                      character.unlocked ? 'bg-[#354093] border-[#6AEEFD]' : 'bg-[#6b7280] border-[#9ca3af]'
                    }`}>
                      <h3 className={`text-xl font-black drop-shadow-lg ${
                        isSelected ? 'text-[#FFED6D]' :
                        character.unlocked ? 'text-[#6AEEFD]' : 'text-[#d1d5db]'
                      }`} style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>{character.name}</h3>
                    </div>
                    <p className={`text-sm mb-4 font-bold ${
                      isSelected ? 'text-[#354093]' :
                      character.unlocked ? 'text-[#354093]' : 'text-[#9ca3af]'
                    }`}>{character.description}</p>
                    
                    {!character.unlocked && (
                      <div className="bg-[#FFED6D] border-3 border-[#E31902] rounded-2xl px-4 py-2 inline-block transform rotate-1">
                        <div className="flex items-center justify-center space-x-2">
                          <Coins className="w-5 h-5 text-[#E31902]" />
                          <span className={`font-black ${
                            canAfford ? 'text-[#22c55e]' : 'text-[#dc2626]'
                          }`} style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>
                            {character.cost.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Action Button */}
                  <div className="text-center">
                    {character.unlocked ? (
                      isSelected ? (
                        <div className="bg-[#FFED6D] border-4 border-[#E31902] text-[#354093] font-black py-4 px-6 rounded-2xl transform rotate-1 shadow-lg animate-pulse" style={{fontFamily: 'Impact, Arial Black, sans-serif'}}>
                          ✅ SELECTED!
                        </div>
                      ) : (
                        <button
                          onClick={() => handleSelect(character.id)}
                          className="bg-[#6AEEFD] border-4 border-[#354093] hover:bg-[#354093] hover:border-[#6AEEFD] text-[#354093] hover:text-[#6AEEFD] font-black py-4 px-6 rounded-2xl transition-all duration-200 w-full transform hover:scale-110 shadow-lg"
                          style={{fontFamily: 'Impact, Arial Black, sans-serif'}}
                        >
                          🎯 SELECT!
                        </button>
                      )
                    ) : (
                      <button
                        onClick={() => handlePurchase(character.id)}
                        disabled={!canAfford}
                        className={`font-black py-4 px-6 rounded-2xl transition-all w-full border-4 shadow-lg ${
                          canAfford
                            ? 'bg-[#22c55e] border-[#FFED6D] hover:bg-[#16a34a] hover:border-[#F7BE76] text-[#FFED6D] transform hover:scale-110 animate-pulse'
                            : 'bg-[#6b7280] border-[#9ca3af] text-[#d1d5db] cursor-not-allowed'
                        }`}
                        style={{fontFamily: 'Impact, Arial Black, sans-serif'}}
                      >
                        {canAfford ? '💰 PURCHASE!' : '❌ NOT ENOUGH COINS'}
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}