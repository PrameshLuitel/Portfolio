"use client";

import { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
  target: number;
  duration?: number;
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ target, duration = 2000, className }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const end = target;
          if (start === end) return;

          const totalFrames = Math.round(duration / (1000 / 60));
          const increment = (end - start) / totalFrames;
          let currentFrame = 0;

          const timer = setInterval(() => {
            currentFrame++;
            const newCount = start + increment * currentFrame;
            setCount(Math.min(newCount, end));

            if (currentFrame === totalFrames) {
              clearInterval(timer);
              setCount(end);
            }
          }, 1000 / 60);

          observer.disconnect();
          return () => clearInterval(timer);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [target, duration]);

  return <span ref={ref} className={className}>{Math.round(count).toLocaleString()}</span>;
};

export default AnimatedCounter;
