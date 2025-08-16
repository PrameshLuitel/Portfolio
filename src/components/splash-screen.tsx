
"use client";

import { useEffect, useState, useMemo } from 'react';
import { cn } from '@/lib/utils';

interface SplashScreenProps {
  setIsLoading: (loading: boolean) => void;
}

const SplashScreen = ({ setIsLoading }: SplashScreenProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [isClosing, setIsClosing] = useState(false);
  
  const name = "Pramesh Luitel";
  const letters = useMemo(() => name.split('').map((char, index) => (
    <span
      key={index}
      className="splash-letter"
      style={{ animationDelay: `${0.5 + index * 0.08}s` }}
    >
      {char === ' ' ? '\u00A0' : char}
    </span>
  )), [name]);

  useEffect(() => {
    setIsMounted(true);
    const hasSeenSplash = localStorage.getItem('hasSeenSplash');
    if (hasSeenSplash) {
      setShowSplash(false);
      setIsLoading(false);
    } else {
      setShowSplash(true);
      const closeTimer = setTimeout(() => {
        setIsClosing(true);
        localStorage.setItem('hasSeenSplash', 'true');
        // Wait for fade-out animation to complete
        setTimeout(() => {
            setShowSplash(false);
            setIsLoading(false);
        }, 500);
      }, 3000); // Total splash screen duration

      return () => clearTimeout(closeTimer);
    }
  }, [setIsLoading]);

  if (!isMounted || !showSplash) {
    return null;
  }

  return (
    <div
      className={cn(
        'fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0d1a15] transition-opacity duration-500',
        isClosing ? 'animate-fade-out' : 'animate-fade-in'
      )}
    >
      <div className="text-center">
        <h1 className="font-headline text-5xl md:text-7xl text-white mb-4">
          {letters}
        </h1>
        <p className="splash-subtitle text-muted-foreground text-sm md:text-base">
          Creative Solutions to Eliminate Inefficiency
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;
