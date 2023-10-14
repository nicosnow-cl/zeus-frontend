'use client';

import { useEffect, useState } from 'react';
import { motion, useAnimate, useMotionValue, useSpring } from 'framer-motion';

export type FlipEffectProps = {
  frontChild: React.ReactNode;
  backChild?: React.ReactNode;
  delay?: number;
};

const variants = (revealed: boolean) => ({
  hidden: {
    opacity: 0,
    rotateY: 0,
    transition: { duration: 1 },
  },
  visible: {
    rotateY: revealed ? 180 : 0,
    opacity: 1,
    transition: { duration: 1 },
  },
});

export const FlipResetV2 = ({ frontChild, backChild, delay = 1000 }: FlipEffectProps) => {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => setRevealed(true), delay);

    return () => clearTimeout(timeoutId);
  }, [delay]);

  return (
    <div className="relative flex h-[636px] items-center justify-center">
      <motion.div
        className="absolute h-fit w-full"
        initial="visible"
        animate={!revealed ? 'visible' : 'hidden'}
        variants={variants(revealed)}
      >
        {backChild}
      </motion.div>

      <motion.div
        className="h-fit w-full"
        initial="hidden"
        animate={revealed ? 'visible' : 'hidden'}
        variants={variants(revealed)}
      >
        {frontChild}
      </motion.div>
    </div>
  );
};
