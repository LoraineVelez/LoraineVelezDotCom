import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue } from 'framer-motion';

const PaintCursor: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const trailRef = useRef<{ x: number; y: number; age: number; hue: number }[]>([]);
  const hueRef = useRef<number>(0);
  const lastMousePos = useRef<{ x: number; y: number }>({ x: -100, y: -100 });
  
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const updatePosition = (x: number, y: number) => {
      mouseX.set(x);
      mouseY.set(y);

      const dx = x - lastMousePos.current.x;
      const dy = y - lastMousePos.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      if (dist > 1) {
        hueRef.current = (hueRef.current + dist * 0.5) % 360;
        trailRef.current.push({ 
          x: x, 
          y: y, 
          age: 0, 
          hue: hueRef.current 
        });
        lastMousePos.current = { x: x, y: y };
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      updatePosition(e.clientX, e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) {
        updatePosition(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchstart', (e) => {
      if (e.touches[0]) {
        lastMousePos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    }, { passive: true });

    handleResize();

    let animationFrame: number;
    const render = () => {
      // Use CSS-based blur instead of context filter for better mobile performance
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const maxAge = 40; 
      const strokeWidth = 27; 
      
      trailRef.current = trailRef.current.filter(p => p.age < maxAge);

      if (trailRef.current.length > 1) {
        for (let i = 1; i < trailRef.current.length; i++) {
          const p1 = trailRef.current[i - 1];
          const p2 = trailRef.current[i];
          p1.age += 1;

          const opacity = 1 - p1.age / maxAge;

          ctx.beginPath();
          ctx.lineWidth = strokeWidth;
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.strokeStyle = `hsla(${p1.hue}, 95%, 50%, ${opacity})`;
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }

      animationFrame = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[9998]"
        style={{ 
          mixBlendMode: 'normal',
          filter: 'blur(12px)',
          transform: 'translateZ(0)', // Force GPU layer to prevent black square artifacts
          willChange: 'transform, filter',
          backfaceVisibility: 'hidden'
        }}
      />
      <motion.div
        className="fixed pointer-events-none z-[9999] top-0 left-0"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          transform: 'translateZ(0)',
          willChange: 'transform'
        }}
      >
        <div className="w-4 h-4 bg-black rounded-full shadow-lg border border-white/20" />
      </motion.div>
    </>
  );
};

export default PaintCursor;