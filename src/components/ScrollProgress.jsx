import { motion, useScroll, useSpring } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const reducedMotion = useReducedMotion();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: reducedMotion ? 1000 : 200,
    damping: reducedMotion ? 100 : 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left bg-accent"
      style={{ scaleX }}
    />
  );
}
