import { useEffect, useRef } from 'react';
import { animate, motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function AnimatedCounter({ value, duration = 1.6, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const reducedMotion = useReducedMotion();
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (!isInView) return undefined;

    if (reducedMotion) {
      count.set(value);
      return undefined;
    }

    const controls = animate(count, value, { duration, delay, ease: [0.22, 1, 0.36, 1] });
    return () => controls.stop();
  }, [isInView, value, duration, delay, reducedMotion, count]);

  return (
    <motion.span ref={ref} aria-label={String(value)}>
      {rounded}
    </motion.span>
  );
}
