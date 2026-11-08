'use client';

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export function BackToTop() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mql = window.matchMedia('(hover: hover)');
    setIsDesktop(mql.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (isDesktop) setVisible(latest > 600);
  });

  if (!mounted || !isDesktop) return null;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[50] p-3 rounded-xl bg-gradient-to-r from-primary to-red-700 text-white shadow-glow-red hover:from-red-700 hover:to-red-800 active:scale-[0.95] transition-all duration-200"
          aria-label="Kembali ke atas"
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.3, type: 'spring', stiffness: 300, damping: 30 }}
        >
          <ChevronUp className="w-5 h-5" aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}