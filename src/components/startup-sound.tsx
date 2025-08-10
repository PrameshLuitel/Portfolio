"use client";

import { useEffect } from 'react';

const StartupSound = () => {
  useEffect(() => {
    const playSound = () => {
      // Check if sound has already been played in this session
      if (sessionStorage.getItem('startupSoundPlayed')) {
        return;
      }

      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      
      // Prevent sound from playing on browsers that require user interaction first
      if (audioContext.state === 'suspended') {
        return;
      }
      
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      // Sound properties
      oscillator.type = 'sine'; // A clean, simple waveform
      oscillator.frequency.setValueAtTime(880, audioContext.currentTime); // A5 note
      oscillator.frequency.exponentialRampToValueAtTime(1400, audioContext.currentTime + 0.1);


      // Volume envelope
      gainNode.gain.setValueAtTime(0, audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.05); // Quick fade in
      gainNode.gain.exponentialRampToValueAtTime(0.0001, audio-context.currentTime + 0.3); // Fade out

      // Connect nodes and start sound
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.3);

      // Mark that the sound has been played
      sessionStorage.setItem('startupSoundPlayed', 'true');
    };

    // A small delay can help ensure the AudioContext is ready.
    const timer = setTimeout(playSound, 100);

    return () => clearTimeout(timer);
  }, []);

  return null; // This component doesn't render anything
};

export default StartupSound;
