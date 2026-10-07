import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setEnabled(isFinePointer && !reducedMotion);
  }, []);

  useEffect(() => {
    if (!enabled) return undefined;

    const dot = dotRef.current;
    let raf = null;
    let mouseX = 0;
    let mouseY = 0;

    const handleMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        if (dot) dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        raf = null;
      });
    };

    const handleDown = () => dot?.classList.add('scale-150');
    const handleUp = () => dot?.classList.remove('scale-150');

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mousedown', handleDown);
    window.addEventListener('mouseup', handleUp);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mousedown', handleDown);
      window.removeEventListener('mouseup', handleUp);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[200] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/80 mix-blend-difference transition-transform duration-150 ease-out will-change-transform"
    />
  );
}
