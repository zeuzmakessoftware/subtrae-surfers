import { useEffect, useCallback } from 'react';
import { useGameStore } from '../store/gameStore';

interface TouchStart {
  x: number;
  y: number;
  time: number;
}

export function useGameControls() {
  const {
    gameStatus,
    lane,
    setLane,
    setJumping,
    setRolling,
    isJumping,
    isRolling
  } = useGameStore();

  // Handle keyboard controls
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (!event || gameStatus !== 'playing') return;

    switch (event.key) {
      case 'ArrowLeft':
      case 'a':
      case 'A':
        event.preventDefault();
        setLane(lane - 1);
        break;
      case 'ArrowRight':
      case 'd':
      case 'D':
        event.preventDefault();
        setLane(lane + 1);
        break;
      case 'ArrowUp':
      case 'w':
      case 'W':
      case ' ': // Spacebar
        event.preventDefault();
        if (!isJumping && !isRolling) {
          setJumping(true);
          setTimeout(() => setJumping(false), 800);
        }
        break;
      case 'ArrowDown':
      case 's':
      case 'S':
        event.preventDefault();
        if (!isJumping && !isRolling) {
          setRolling(true);
          setTimeout(() => setRolling(false), 600);
        }
        break;
    }
  }, [gameStatus, lane, setLane, setJumping, setRolling, isJumping, isRolling]);

  // Handle touch/swipe controls
  const handleTouchStart = useCallback((event: TouchEvent) => {
    if (!event || gameStatus !== 'playing') return;
    
    const touch = event.touches[0];
    const touchStart: TouchStart = {
      x: touch.clientX,
      y: touch.clientY,
      time: Date.now()
    };
    
    // Store touch start data
    (event.target as any).touchStart = touchStart;
  }, [gameStatus]);

  const handleTouchEnd = useCallback((event: TouchEvent) => {
    if (!event || gameStatus !== 'playing') return;
    
    const touchStart = (event.target as any).touchStart as TouchStart;
    if (!touchStart) return;
    
    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStart.x;
    const deltaY = touch.clientY - touchStart.y;
    const deltaTime = Date.now() - touchStart.time;
    
    // Minimum swipe distance and maximum time for a valid swipe
    const minSwipeDistance = 50;
    const maxSwipeTime = 500;
    
    if (deltaTime > maxSwipeTime) return;
    
    const absDeltaX = Math.abs(deltaX);
    const absDeltaY = Math.abs(deltaY);
    
    // Determine swipe direction
    if (absDeltaX > absDeltaY && absDeltaX > minSwipeDistance) {
      // Horizontal swipe
      if (deltaX > 0) {
        // Swipe right
        setLane(lane + 1);
      } else {
        // Swipe left
        setLane(lane - 1);
      }
    } else if (absDeltaY > absDeltaX && absDeltaY > minSwipeDistance) {
      // Vertical swipe
      if (deltaY < 0) {
        // Swipe up - jump
        if (!isJumping && !isRolling) {
          setJumping(true);
          setTimeout(() => setJumping(false), 800);
        }
      } else {
        // Swipe down - roll
        if (!isJumping && !isRolling) {
          setRolling(true);
          setTimeout(() => setRolling(false), 600);
        }
      }
    } else if (absDeltaX < minSwipeDistance && absDeltaY < minSwipeDistance && deltaTime < 200) {
      // Tap - jump
      if (!isJumping && !isRolling) {
        setJumping(true);
        setTimeout(() => setJumping(false), 800);
      }
    }
    
    // Clean up
    delete (event.target as any).touchStart;
  }, [gameStatus, lane, setLane, setJumping, setRolling, isJumping, isRolling]);

  // Handle mouse controls (for desktop)
  const handleMouseDown = useCallback((event: MouseEvent) => {
    if (!event || gameStatus !== 'playing') return;
    
    const mouseStart = {
      x: event.clientX,
      y: event.clientY,
      time: Date.now()
    };
    
    (event.target as any).mouseStart = mouseStart;
  }, [gameStatus]);

  const handleMouseUp = useCallback((event: MouseEvent) => {
    if (!event || gameStatus !== 'playing') return;
    
    const mouseStart = (event.target as any).mouseStart;
    if (!mouseStart) return;
    
    const deltaX = event.clientX - mouseStart.x;
    const deltaY = event.clientY - mouseStart.y;
    const deltaTime = Date.now() - mouseStart.time;
    
    const minSwipeDistance = 30;
    const maxSwipeTime = 300;
    
    if (deltaTime > maxSwipeTime) return;
    
    const absDeltaX = Math.abs(deltaX);
    const absDeltaY = Math.abs(deltaY);
    
    if (absDeltaX > absDeltaY && absDeltaX > minSwipeDistance) {
      // Horizontal drag
      if (deltaX > 0) {
        setLane(lane + 1);
      } else {
        setLane(lane - 1);
      }
    } else if (absDeltaY > absDeltaX && absDeltaY > minSwipeDistance) {
      // Vertical drag
      if (deltaY < 0) {
        // Drag up - jump
        if (!isJumping && !isRolling) {
          setJumping(true);
          setTimeout(() => setJumping(false), 800);
        }
      } else {
        // Drag down - roll
        if (!isJumping && !isRolling) {
          setRolling(true);
          setTimeout(() => setRolling(false), 600);
        }
      }
    } else if (absDeltaX < minSwipeDistance && absDeltaY < minSwipeDistance && deltaTime < 200) {
      // Click - jump
      if (!isJumping && !isRolling) {
        setJumping(true);
        setTimeout(() => setJumping(false), 800);
      }
    }
    
    delete (event.target as any).mouseStart;
  }, [gameStatus, lane, setLane, setJumping, setRolling, isJumping, isRolling]);

  useEffect(() => {
    // Add event listeners
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: false });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Cleanup
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleKeyDown, handleTouchStart, handleTouchEnd, handleMouseDown, handleMouseUp]);

  return {
    // Return any control state if needed
    isControlsActive: gameStatus === 'playing'
  };
}