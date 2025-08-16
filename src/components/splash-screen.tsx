
"use client";

import { useEffect, useState, useMemo } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface SplashScreenProps {
  setIsLoading: (loading: boolean) => void;
}

const SplashScreen = ({ setIsLoading }: SplashScreenProps) => {
  const [isMounted, setIsMounted] = useState(false);
  
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
    
    const closeTimer = setTimeout(() => {
      // Allow framer-motion to animate out
      localStorage.setItem('hasSeenSplash', 'true');
      setIsLoading(false);
    }, 3000); // Total splash screen duration

    return () => clearTimeout(closeTimer);

  }, [setIsLoading]);

  useEffect(() => {
    const hasSeenSplash = localStorage.getItem('hasSeenSplash');
    if (hasSeenSplash) {
      setIsLoading(false);
    }
  }, [setIsLoading]);

  if (!isMounted) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2.5 }}
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
