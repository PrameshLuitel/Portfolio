"use client";

import React, { useRef, useEffect } from 'react';

const DotGridBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

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
    resizeCanvas();
    
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('resize', resizeCanvas);
    document.body.addEventListener('mousemove', handleMouseMove);

    const draw = () => {
      if(!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const spacing = 35;
      const dotSize = 1.2;
      const mouseRadius = 150;

      for (let x = 0; x < canvas.width; x += spacing) {
        for (let y = 0; y < canvas.height; y += spacing) {
          const dx = mouse.x - x;
          const dy = mouse.y - y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          const opacity = Math.max(0, 1 - dist / mouseRadius);
          
          if (opacity > 0.05) {
            ctx.fillStyle = `hsla(90, 100%, 50%, ${opacity * 0.6})`;
            ctx.beginPath();
            ctx.arc(x, y, dotSize + opacity * 2, 0, Math.PI * 2);
            ctx.fill();
          } else {
            ctx.fillStyle = 'hsla(159, 100%, 22%, 0.4)';
            ctx.beginPath();
            ctx.arc(x, y, dotSize, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      document.body.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={parentRef} className="fixed top-0 left-0 w-full h-full -z-10">
      <canvas ref={canvasRef}/>
    </div>
  );
};

export default DotGridBackground;
