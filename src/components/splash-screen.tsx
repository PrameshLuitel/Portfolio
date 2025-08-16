
"use client";

import { useEffect, useState, useMemo } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface SplashScreenProps {
  setIsLoading: (loading: boolean) => void;
}

const SplashScreen = ({ setIsLoading }: SplashScreenProps) => {
  const name = "Pramesh Luitel";
  const letters = useMemo(() => name.split('').map((char, index) => (
    <span
      key={index}
      className="splash-letter"
      style={{ animationDelay: `${0.5 + index * 0.08}s` }}
    >
      {char === ' ' ? ' ' : char}
    </span>
  )), [name]);

  useEffect(() => {
    // Determine the duration of the splash screen
    const hasSeenSplash = localStorage.getItem('hasSeenSplash');
    const duration = hasSeenSplash ? 1000 : 3000; // Shorter duration for returning visitors

    const closeTimer = setTimeout(() => {
      localStorage.setItem('hasSeenSplash', 'true');
      setIsLoading(false);
    }, duration);

    return () => clearTimeout(closeTimer);

  }, [setIsLoading]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0d1a15]'
      )}
    >
      <div className="text-center">
        <motion.h1 
          layoutId="main-logo"
          className="font-headline text-5xl md:text-7xl text-white mb-4"
          transition={{
            type: 'spring',
            stiffness: 70,
            damping: 20,
            duration: 1.5,
            delay: 1.5
          }}
        >
          {letters}
        </motion.h1>
        <p className="splash-subtitle text-muted-foreground text-sm md:text-base">
          Creative Solutions to Eliminate Inefficiency
        </p>
      </div>
    </motion.div>
  );
};

export default SplashScreen;
