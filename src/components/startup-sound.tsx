
"use client";

import { useEffect, useRef, useCallback } from 'react';

const StartupSound = () => {
  const audioContextRef = useRef<AudioContext | null>(null);

  const getAudioContext = useCallback(() => {
    if (typeof window === 'undefined') return null;
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    return audioContextRef.current;
  }, []);

  const playWhistleSound = useCallback(() => {
    const audioContext = getAudioContext();
    if (!audioContext) return;

    if (audioContext.state === 'suspended') {
      audioContext.resume();
    }

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    // Whistle sound properties
    oscillator.type = 'sine';
    // Start at a high frequency
    oscillator.frequency.setValueAtTime(2000, audioContext.currentTime); 
    // Quickly drop frequency for a "whistle down" effect
    oscillator.frequency.exponentialRampToValueAtTime(1200, audioContext.currentTime + 0.2);

    // Volume envelope to make it fade in and out quickly
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.2, audioContext.currentTime + 0.02); // Quick fade in
    gainNode.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.25); // Fade out

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.3);

    // Clean up interaction listener after playing
    const cleanup = () => {
        window.removeEventListener('click', playWhistleSound);
        window.removeEventListener('keydown', playWhistleSound);
    }
    cleanup();

  }, [getAudioContext]);


  useEffect(() => {
    const handleSoundLogic = () => {
        try {
            let hasVisited = localStorage.getItem('hasVisited');
            let visitCount = parseInt(localStorage.getItem('visitCount') || '0', 10);

            const triggerSound = () => {
                const audioContext = getAudioContext();
                if (audioContext && audioContext.state === 'suspended') {
                     window.addEventListener('click', playWhistleSound, { once: true });
                     window.addEventListener('keydown', playWhistleSound, { once: true });
                } else {
                    playWhistleSound();
                }
            };

            if (!hasVisited) {
                // First visit ever
                triggerSound();
                localStorage.setItem('hasVisited', 'true');
                localStorage.setItem('visitCount', '1');
            } else {
                // Subsequent visits
                visitCount++;
                if (visitCount >= 3) {
                    if (Math.random() < 0.33) {
                        triggerSound();
                        localStorage.setItem('visitCount', '0'); // Reset after playing
                    } else {
                         // Still reset to keep it random for the next 3 visits
                        localStorage.setItem('visitCount', '0');
                    }
                } else {
                    localStorage.setItem('visitCount', visitCount.toString());
                }
            }

        } catch (error) {
            console.error("Could not access localStorage for sound effect:", error);
        }
    }
    
    // Defer initialization to after the initial render to ensure window is available
    const timeoutId = setTimeout(handleSoundLogic, 1);

    return () => {
      clearTimeout(timeoutId);
      // Ensure listeners are cleaned up when the component unmounts
      window.removeEventListener('click', playWhistleSound);
      window.removeEventListener('keydown', playWhistleSound);
    };
  }, [playWhistleSound, getAudioContext]);


  return null; // This component doesn't render anything
};

export default StartupSound;
