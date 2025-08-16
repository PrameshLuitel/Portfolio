"use client";

import { useEffect, useState, useMemo } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const SplashScreen = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [showSplash, setShowSplash] = useState(false);
  const [stage, setStage] = useState<'initial' | 'logo' | 'buttons' | 'closing'>('initial');
  const { setTheme } = useTheme();
  
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
    if (!hasSeenSplash) {
      setShowSplash(true);
      setStage('logo');
    }
  }, []);

  useEffect(() => {
    if (stage === 'logo') {
      const timer = setTimeout(() => {
        setStage('buttons');
      }, 2500); // Wait for name animation to roughly finish
      return () => clearTimeout(timer);
    }
  }, [stage]);

  const handleThemeSelect = (theme: 'light' | 'dark') => {
    setTheme(theme);
    setStage('closing');
    localStorage.setItem('hasSeenSplash', 'true');
    // Hide splash screen after fade out animation
    setTimeout(() => {
        setShowSplash(false);
    }, 500);
  };

  if (!isMounted || !showSplash) {
    return null;
  }

  return (
    <div
      className={cn(
        'fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0d1a15] transition-opacity duration-500',
        stage === 'closing' ? 'animate-fade-out' : 'animate-fade-in'
      )}
    >
      <div className="text-center">
        <h1 className="font-headline text-5xl md:text-7xl text-white mb-12">
          {letters}
        </h1>

        <div
          className={cn(
            'transition-all duration-700',
            stage === 'buttons' ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          )}
        >
          <p className="text-muted-foreground mb-6 text-lg">Choose your experience</p>
          <div className="flex gap-4 justify-center">
            <Button
              onClick={() => handleThemeSelect('light')}
              variant="outline"
              size="lg"
              className="bg-transparent border-white/20 text-white hover:bg-white hover:text-black"
            >
              <Sun className="mr-2" />
              Light
            </Button>
            <Button
              onClick={() => handleThemeSelect('dark')}
              variant="outline"
              size="lg"
              className="bg-transparent border-white/20 text-white hover:bg-white hover:text-black"
            >
              <Moon className="mr-2" />
              Dark
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
