
"use client";

import { useEffect, useState, useMemo, useCallback } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

interface SplashScreenProps {
  setIsLoading: (loading: boolean) => void;
}

const SplashScreen = ({ setIsLoading }: SplashScreenProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [stage, setStage] = useState<'initial' | 'logo' | 'buttons' | 'closing'>('initial');
  const [countdown, setCountdown] = useState(10);
  const [countdownKey, setCountdownKey] = useState(0);
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
    if (hasSeenSplash) {
      setShowSplash(false);
      setIsLoading(false);
    } else {
      setShowSplash(true);
      setStage('logo');
    }
  }, [setIsLoading]);

  useEffect(() => {
    if (stage === 'logo') {
      const timer = setTimeout(() => {
        setStage('buttons');
      }, 2500); // Wait for name animation to roughly finish
      return () => clearTimeout(timer);
    }
  }, [stage]);

  const handleThemeSelect = useCallback((theme: 'light' | 'dark') => {
    if (stage === 'closing') return;
    setTheme(theme);
    setStage('closing');
    localStorage.setItem('hasSeenSplash', 'true');
    setTimeout(() => {
        setShowSplash(false);
        setIsLoading(false);
    }, 500); // Corresponds to fade-out animation
  }, [setTheme, stage, setIsLoading]);


  useEffect(() => {
    if (stage !== 'buttons') return;

    if (countdown <= 0) {
      handleThemeSelect('light');
      return;
    }

    const timer = setInterval(() => {
      setCountdown(prev => prev - 1);
      setCountdownKey(key => key + 1); // Reset animation for the number
    }, 1000);

    return () => clearInterval(timer);
  }, [stage, countdown, handleThemeSelect]);

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
            'transition-all duration-700 relative',
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
          <div
            key={countdownKey}
            className="absolute -top-8 right-0 left-0 mx-auto text-2xl font-mono text-white/50 animate-countdown"
          >
            {countdown}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
