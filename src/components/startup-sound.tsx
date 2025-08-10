"use client";

import { useEffect, useRef } from 'react';

const StartupSound = () => {
  const audioContextRef = useRef<AudioContext | null>(null);
  const hasPlayedRef = useRef(false);

  const playSound = () => {
    if (!audioContextRef.current || hasPlayedRef.current) return;
    
    if (audioContextRef.current.state === 'suspended') {
        audioContextRef.current.resume();
    }

    // Check if sound has already been played in this session
    if (sessionStorage.getItem('startupSoundPlayed')) {
      hasPlayedRef.current = true;
      return;
    }
    
    const audioContext = audioContextRef.current;
    
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    // Sound properties
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(880, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(1400, audioContext.currentTime + 0.1);

    // Volume envelope
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.05);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.3);

    // Connect nodes and start sound
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.3);

    // Mark that the sound has been played
    sessionStorage.setItem('startupSoundPlayed', 'true');
    hasPlayedRef.current = true;

    // Clean up interaction listener
    window.removeEventListener('click', playSound);
    window.removeEventListener('keydown', playSound);
  };

  useEffect(() => {
    // Initialize AudioContext
    if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    
    // Try to play immediately
    playSound();

    // If it's suspended, it requires user interaction
    if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
      window.addEventListener('click', playSound, { once: true });
      window.addEventListener('keydown', playSound, { once: true });
    }

    return () => {
      // Cleanup listeners on component unmount
      window.removeEventListener('click', playSound);
      window.removeEventListener('keydown', playSound);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default StartupSound;
