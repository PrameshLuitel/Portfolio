
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

// Simple pixel art rocket shape (coordinates relative to a center point)
const rocketShape = [
  // Tip
  { x: 0, y: -12 },
  // Body
  { x: 0, y: -11 },
  { x: -1, y: -10 }, { x: 0, y: -10 }, { x: 1, y: -10 },
  { x: -1, y: -9 }, { x: 0, y: -9 }, { x: 1, y: -9 },
  { x: -2, y: -8 }, { x: -1, y: -8 }, { x: 0, y: -8 }, { x: 1, y: -8 }, { x: 2, y: -8 },
  { x: -2, y: -7 }, { x: -1, y: -7 }, { x: 0, y: -7 }, { x: 1, y: -7 }, { x: 2, y: -7 },
  { x: -2, y: -6 }, { x: -1, y: -6 }, { x: 0, y: -6 }, { x: 1, y: -6 }, { x: 2, y: -6 },
  { x: -2, y: -5 }, { x: -1, y: -5 }, { x: 0, y: -5 }, { x: 1, y: -5 }, { x: 2, y: -5 },
  { x: -2, y: -4 }, { x: -1, y: -4 }, { x: 0, y: -4 }, { x: 1, y: -4 }, { x: 2, y: -4 },
  { x: -2, y: -3 }, { x: -1, y: -3 }, { x: 0, y: -3 }, { x: 1, y: -3 }, { x: 2, y: -3 },
  { x: -2, y: -2 }, { x: 0, y: -2 }, { x: 2, y: -2 },
  { x: -2, y: -1 }, { x: 0, y: -1 }, { x: 2, y: -1 },
  // Fins
  { x: -3, y: -1 }, { x: 3, y: -1 },
  { x: -4, y: 0 }, { x: -3, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 },
  { x: -4, y: 1 }, { x: 4, y: 1 },
];


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
    const particlesPerFrame = 5;
    const dotSize = 4;
    const rocketBaseY = 2 * dotSize; // Base of the rocket in canvas space

    const resizeCanvas = () => {
      if(canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
      }
    };
    resizeCanvas();

    const rocketCenterX = canvas.width / 2;
    const rocketCenterY = canvas.height / 2 - 20;

    const createParticle = () => {
      const angle = Math.PI / 2 + (Math.random() - 0.5) * (Math.PI / 4); // Pointing downwards
      const speed = 1 + Math.random() * 2;

      return {
        x: rocketCenterX + (Math.random() - 0.5) * 10,
        y: rocketCenterY + rocketBaseY,
        vx: Math.cos(angle) * speed * 0.5,
        vy: Math.sin(angle) * speed,
        size: Math.random() * 2 + 1.5,
        life: 100,
        maxLife: Math.random() * 50 + 50
      };
    };
    
    const drawRocket = () => {
      if (!ctx) return;
      const primaryColor = theme === 'dark' ? 'hsl(var(--primary))' : 'hsl(var(--primary))';
      ctx.fillStyle = primaryColor;
      ctx.shadowColor = primaryColor;
      ctx.shadowBlur = 5;

      rocketShape.forEach(p => {
        ctx.fillRect(rocketCenterX + p.x * dotSize, rocketCenterY + p.y * dotSize, dotSize -1, dotSize -1);
      });
      ctx.shadowBlur = 0;
    }

    const draw = () => {
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      drawRocket();

      for (let i = 0; i < particlesPerFrame; i++) {
        if(particlesRef.current.length < 300) {
            particlesRef.current.push(createParticle());
        }
      }
      
      particlesRef.current = particlesRef.current.filter(p => p.life > 0);

      particlesRef.current.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 100 / p.maxLife;

        const lifeRatio = p.life / 100;
        
        let color;
        if (lifeRatio > 0.8) {
          color = `rgba(255, 255, 180, ${lifeRatio * 0.9})`; // Bright Yellow
        } else if (lifeRatio > 0.5) {
          color = `rgba(255, 165, 0, ${lifeRatio * 0.9})`; // Orange
        } else if (lifeRatio > 0.2) {
            color = `rgba(255, 69, 0, ${lifeRatio * 0.9})`; // Red-Orange
        } else {
          color = `rgba(139, 0, 0, ${lifeRatio * 0.9})`; // Dark Red
        }
        
        ctx.fillStyle = color;
        
        ctx.beginPath();
        const radius = Math.max(0, p.size * lifeRatio);
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fill();
      });

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
    <canvas ref={canvasRef} className="w-full h-full" />
  );
};

export default RocketLaunchAnimation;
