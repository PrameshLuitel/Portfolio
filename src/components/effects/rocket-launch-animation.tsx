
"use client";
import React, { useRef, useEffect } from 'react';
import { useTheme } from 'next-themes';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  maxLife: number;
}

const RocketLaunchAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let lastTime = 0;
    const particlesPerSecond = 200;

    const resizeCanvas = () => {
      if(canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
      }
    };
    resizeCanvas();

    const createParticle = () => {
      const x = canvas.width / 2;
      const y = canvas.height;
      const angle = -Math.PI / 2 + (Math.random() - 0.5) * (Math.PI / 3);
      const speed = 5 + Math.random() * 5;

      return {
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: Math.random() * 3 + 2,
        life: 100,
        maxLife: Math.random() * 50 + 80
      };
    };

    const draw = (timestamp: number) => {
      if (!ctx) return;

      const deltaTime = timestamp - lastTime;
      lastTime = timestamp;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const numNewParticles = Math.floor(particlesPerSecond * (deltaTime / 1000));
      for (let i = 0; i < numNewParticles; i++) {
        if(particlesRef.current.length < 500) {
            particlesRef.current.push(createParticle());
        }
      }
      
      particlesRef.current = particlesRef.current.filter(p => p.life > 0);

      particlesRef.current.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.05; // gravity
        p.life -= 100 / p.maxLife;

        const lifeRatio = p.life / 100;
        
        // Color transition from yellow -> orange -> red -> dark
        let color;
        if (lifeRatio > 0.8) {
          color = `rgba(255, 255, 180, ${lifeRatio})`; // Bright Yellow
        } else if (lifeRatio > 0.5) {
          color = `rgba(255, 165, 0, ${lifeRatio})`; // Orange
        } else if (lifeRatio > 0.2) {
            color = `rgba(255, 69, 0, ${lifeRatio})`; // Red-Orange
        } else {
          color = `rgba(139, 0, 0, ${lifeRatio})`; // Dark Red
        }
        
        ctx.fillStyle = color;
        ctx.shadowColor = color;
        ctx.shadowBlur = 10;
        
        ctx.beginPath();
        const radius = Math.max(0, p.size * lifeRatio);
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.shadowBlur = 0;
      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resizeCanvas);
    animationFrameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [theme]);

  return (
    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10" />
  );
};

export default RocketLaunchAnimation;
