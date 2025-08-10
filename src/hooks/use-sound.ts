"use client";

import { useRef, useCallback } from 'react';

// A client-side hook to play sounds
export const useSound = () => {
  const audioContextRef = useRef<AudioContext | null>(null);

  // Initialize AudioContext on first use, and only in the browser
  const getAudioContext = useCallback(() => {
    if (typeof window === 'undefined') return null;
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    // Resume context if it's suspended (required by browser security policies)
    if (audioContextRef.current.state === 'suspended') {
      audioContextRef.current.resume();
    }
    return audioContextRef.current;
  }, []);

  const playHoverSound = useCallback(() => {
    const audioContext = getAudioContext();
    if (!audioContext) return;
    
    // Create a simple, subtle "pop" sound
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    // Sound properties for a quick, low-pitched pop
    oscillator.type = 'sine'; 
    oscillator.frequency.setValueAtTime(200, audioContext.currentTime);

    // Volume envelope to make it sound like a "pop"
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.01); // Quick attack
    gainNode.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.05); // Quick decay

    // Connect nodes and play
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
  }, [getAudioContext]);

  return { playHoverSound };
};
