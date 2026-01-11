
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
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      // Update the black circle position immediately for zero-lag feeling
      mouseX.set(clientX);
      mouseY.set(clientY);

      // Increment hue based on movement for smooth spectrum shift
      const dx = clientX - lastMousePos.current.x;
      const dy = clientY - lastMousePos.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      if (dist > 1) {
        hueRef.current = (hueRef.current + dist * 0.5) % 360;
        
        trailRef.current.push({ 
          x: clientX, 
          y: clientY, 
          age: 0, 
          hue: hueRef.current 
        });
        
        lastMousePos.current = { x: clientX, y: clientY };
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    handleResize();

    let animationFrame: number;
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Trail properties
      const maxAge = 40; 
      // Increased strokeWidth by 50% (18 * 1.5 = 27)
      const strokeWidth = 27; 
      
      trailRef.current = trailRef.current.filter(p => p.age < maxAge);

      // Draw segments
      for (let i = 1; i < trailRef.current.length; i++) {
        const p1 = trailRef.current[i - 1];
        const p2 = trailRef.current[i];
        p1.age += 1;

        const opacity = 1 - p1.age / maxAge;

        ctx.beginPath();
        ctx.lineWidth = strokeWidth;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        
        // HSL Spectrum
        ctx.strokeStyle = `hsla(${p1.hue}, 95%, 50%, ${opacity})`;
        
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }

      animationFrame = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
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
          // Increased blur proportionally to maintain the soft look at larger size (8 * 1.5 = 12)
          filter: 'blur(12px)' 
        }}
      />
      <motion.div
        className="fixed pointer-events-none z-[9999] top-0 left-0"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        {/* Solid Black Circle Cursor - 1/2 size (w-4 h-4) with crisp edges */}
        <div className="w-4 h-4 bg-black rounded-full shadow-lg border border-white/20" />
      </motion.div>
    </>
  );
};

export default PaintCursor;
