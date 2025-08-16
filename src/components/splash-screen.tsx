
"use client";

import { useEffect, useMemo } from 'react';
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
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Splash screen duration

    return () => clearTimeout(timer);
  }, [setIsLoading]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={cn(
        'fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background'
      )}
    >
      <div className="text-center">
        <motion.h1 
          layoutId="main-logo"
          className="font-headline text-5xl md:text-7xl text-white mb-4"
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
