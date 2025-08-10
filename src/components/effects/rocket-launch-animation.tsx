
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

// A more detailed pixel art rocket shape
const rocketShape = [
  // Tip
  { x: 0, y: -12, color: 'hsl(0, 0%, 90%)' }, 
  // Body
  { x: -1, y: -11, color: 'hsl(0, 0%, 80%)' }, { x: 0, y: -11, color: 'hsl(0, 0%, 95%)' }, { x: 1, y: -11, color: 'hsl(0, 0%, 75%)' },
  { x: -1, y: -10, color: 'hsl(0, 0%, 80%)' }, { x: 0, y: -10, color: 'hsl(0, 0%, 95%)' }, { x: 1, y: -10, color: 'hsl(0, 0%, 75%)' },
  { x: -2, y: -9, color: 'hsl(0, 0%, 70%)' }, { x: -1, y: -9, color: 'hsl(0, 0%, 80%)' }, { x: 0, y: -9, color: 'hsl(0, 0%, 95%)' }, { x: 1, y: -9, color: 'hsl(0, 0%, 75%)' }, { x: 2, y: -9, color: 'hsl(0, 0%, 65%)' },
  { x: -2, y: -8, color: 'hsl(0, 0%, 70%)' }, { x: -1, y: -8, color: 'hsl(0, 0%, 80%)' }, { x: 0, y: -8, color: 'hsl(0, 0%, 95%)' }, { x: 1, y: -8, color: 'hsl(0, 0%, 75%)' }, { x: 2, y: -8, color: 'hsl(0, 0%, 65%)' },
  { x: -2, y: -7, color: 'hsl(0, 0%, 70%)' }, { x: -1, y: -7, color: 'hsl(0, 0%, 80%)' }, { x: 0, y: -7, color: 'hsl(0, 0%, 95%)' }, { x: 1, y: -7, color: 'hsl(0, 0%, 75%)' }, { x: 2, y: -7, color: 'hsl(0, 0%, 65%)' },
  { x: -2, y: -6, color: 'hsl(0, 0%, 70%)' }, { x: -1, y: -6, color: 'hsl(0, 0%, 80%)' }, { x: 0, y: -6, color: 'hsl(0, 0%, 95%)' }, { x: 1, y: -6, color: 'hsl(0, 0%, 75%)' }, { x: 2, y: -6, color: 'hsl(0, 0%, 65%)' },
  { x: -2, y: -5, color: 'hsl(0, 0%, 70%)' }, { x: -1, y: -5, color: 'hsl(0, 0%, 80%)' }, { x: 0, y: -5, color: 'hsl(0, 0%, 95%)' }, { x: 1, y: -5, color: 'hsl(0, 0%, 75%)' }, { x: 2, y: -5, color: 'hsl(0, 0%, 65%)' },
  { x: -2, y: -4, color: 'hsl(0, 0%, 70%)' }, { x: -1, y: -4, color: 'hsl(0, 0%, 80%)' }, { x: 0, y: -4, color: 'hsl(0, 0%, 95%)' }, { x: 1, y: -4, color: 'hsl(0, 0%, 75%)' }, { x: 2, y: -4, color: 'hsl(0, 0%, 65%)' },
  { x: -2, y: -3, color: 'hsl(0, 0%, 70%)' }, { x: -1, y: -3, color: 'hsl(0, 0%, 80%)' }, { x: 0, y: -3, color: 'hsl(0, 0%, 95%)' }, { x: 1, y: -3, color: 'hsl(0, 0%, 75%)' }, { x: 2, y: -3, color: 'hsl(0, 0%, 65%)' },
  // Engine
  { x: -1, y: -2, color: 'hsl(0, 0%, 50%)' }, { x: 0, y: -2, color: 'hsl(0, 0%, 60%)' }, { x: 1, y: -2, color: 'hsl(0, 0%, 45%)' },
  // Fins
  { x: -4, y: 0, color: 'hsl(0, 0%, 60%)' }, { x: -3, y: 0, color: 'hsl(0, 0%, 70%)' }, { x: 3, y: 0, color: 'hsl(0, 0%, 60%)' }, { x: 4, y: 0, color: 'hsl(0, 0%, 50%)' },
  { x: -4, y: 1, color: 'hsl(0, 0%, 60%)' }, { x: -3, y: 1, color: 'hsl(0, 0%, 70%)' }, { x: 3, y: 1, color: 'hsl(0, 0%, 60%)' }, { x: 4, y: 1, color: 'hsl(0, 0%, 50%)' },
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
    const particlesPerFrame = 8;
    const dotSize = 4;
    const rocketBaseY = 2 * dotSize; 

    const resizeCanvas = () => {
      if(canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
      }
    };
    resizeCanvas();

    const rocketCenterX = canvas.width / 2;
    const rocketCenterY = canvas.height / 2 - 40; // Move rocket up

    const createParticle = () => {
      const angle = Math.PI / 2 + (Math.random() - 0.5) * (Math.PI / 3); 
      const speed = 2 + Math.random() * 4;

      return {
        x: rocketCenterX + (Math.random() - 0.5) * 12,
        y: rocketCenterY + rocketBaseY,
        vx: Math.cos(angle) * speed * 0.5,
        vy: Math.sin(angle) * speed,
        size: Math.random() * 2.5 + 2,
        life: 100,
        maxLife: Math.random() * 60 + 40
      };
    };
    
    const drawRocket = () => {
      if (!ctx) return;
      const primaryColor = theme === 'dark' ? 'hsl(var(--primary))' : 'hsl(var(--primary))';
      ctx.shadowColor = primaryColor;
      ctx.shadowBlur = 15;
      
      rocketShape.forEach(p => {
        ctx.fillStyle = p.color;
        ctx.fillRect(rocketCenterX + p.x * dotSize, rocketCenterY + p.y * dotSize, dotSize, dotSize);
      });
      ctx.shadowBlur = 0;
    }

    const draw = () => {
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      drawRocket();

      for (let i = 0; i < particlesPerFrame; i++) {
        if(particlesRef.current.length < 500) { // More particles
            particlesRef.current.push(createParticle());
        }
      }
      
      particlesRef.current = particlesRef.current.filter(p => p.life > 0);

      particlesRef.current.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy *= 1.01; // slight acceleration
        p.life -= 100 / p.maxLife;

        const lifeRatio = p.life / 100;
        
        let color;
        if (lifeRatio > 0.85) {
          color = `rgba(255, 255, 220, ${lifeRatio})`; // Bright Yellow/White
        } else if (lifeRatio > 0.6) {
          color = `rgba(255, 190, 0, ${lifeRatio})`; // Orange
        } else if (lifeRatio > 0.3) {
            color = `rgba(255, 100, 0, ${lifeRatio})`; // Red-Orange
        } else {
          color = `rgba(150, 50, 0, ${lifeRatio * 0.8})`; // Dark Red/Brown
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
