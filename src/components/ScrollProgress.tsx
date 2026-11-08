'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  if (!mounted) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-1 pointer-events-none"
      style={{
        background: 'linear-gradient(90deg, #dc2626, #f97316, #fbbf24)',
        backgroundSize: '200% 100%',
        transformOrigin: 'left center',
        transform: scaleX,
      }}
      aria-hidden="true"
    />
  );
}
