import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

const DIRECTIONS = {
  up: { y: 24, x: 0 },
  down: { y: -24, x: 0 },
  left: { x: 24, y: 0 },
  right: { x: -24, y: 0 },
  none: { x: 0, y: 0 },
};

export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = '',
  as = 'div',
  once = true,
}) {
  const reducedMotion = useReducedMotion();
  const offset = DIRECTIONS[direction] ?? DIRECTIONS.up;
  const MotionTag = motion[as] ?? motion.div;

  if (reducedMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
