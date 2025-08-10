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

    // Create a "shrrr" sound with white noise and a filter
    const duration = 0.15;
    const bufferSize = audioContext.sampleRate * duration;
    const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
    const output = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    const noise = audioContext.createBufferSource();
    noise.buffer = buffer;

    const bandpass = audioContext.createBiquadFilter();
    bandpass.type = 'bandpass';
    bandpass.frequency.setValueAtTime(1000, audioContext.currentTime);
    bandpass.frequency.linearRampToValueAtTime(3000, audioContext.currentTime + duration * 0.8);
    bandpass.Q.value = 5;

    const gainNode = audioContext.createGain();
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.05, audioContext.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + duration);

    noise.connect(bandpass);
    bandpass.connect(gainNode);
    gainNode.connect(audioContext.destination);

    noise.start(audioContext.currentTime);
    noise.stop(audioContext.currentTime + duration);

  }, [getAudioContext]);

  return { playHoverSound };
};
