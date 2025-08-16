
"use client";

import React, { useRef, useEffect } from 'react';
import { useTheme } from 'next-themes';

const DotGridBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let mouse = { x: -1000, y: -1000 };
    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const draw = () => {
      if(!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const spacing = 35;
      const dotSize = 1.2;
      const mouseRadius = 150;

      const lightThemeColors = {
        glow: 'hsla(221, 100%, 65%,', // primary
        dot: 'hsla(215, 20%, 90%, 0.5)', // border
      };
      const darkThemeColors = {
        glow: 'hsla(90, 100%, 50%,', // primary
        dot: 'hsla(158, 100%, 22%, 0.4)', // accent
      };

      const colors = theme === 'light' ? lightThemeColors : darkThemeColors;

      for (let x = 0; x < canvas.width; x += spacing) {
        for (let y = 0; y < canvas.height; y += spacing) {
          const dx = mouse.x - x;
          const dy = mouse.y - y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          let size = dotSize;
          
          if (dist < mouseRadius) {
            const falloff = (mouseRadius - dist) / mouseRadius;
            size = dotSize + 3 * Math.sin(falloff * Math.PI); // Grow effect
          }

          ctx.fillStyle = colors.dot;
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Draw the glow effect at the mouse position
      if (mouse.x > -1000) {
        const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, mouseRadius);
        gradient.addColorStop(0, `${colors.glow} 0.2)`);
        gradient.addColorStop(0.5, `${colors.glow} 0.05)`);
        gradient.addColorStop(1, `${colors.glow} 0)`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouseRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    // Run on client mount
    resizeCanvas();
    draw();

    window.addEventListener('resize', resizeCanvas);
    document.body.addEventListener('mousemove', handleMouseMove);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      document.body.removeEventListener('mousemove', handleMouseMove);
    };
  }, [theme]);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <canvas ref={canvasRef}/>
    </div>
  );
};

export default DotGridBackground;
