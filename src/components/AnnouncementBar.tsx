'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, AlertTriangle, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';
import { ANNOUNCEMENT } from '@/config/site';

export function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!ANNOUNCEMENT.enabled) {
      setVisible(false);
      return;
    }
    const stored = localStorage.getItem(`announcement-${ANNOUNCEMENT.id}`);
    if (stored === 'dismissed') {
      setDismissed(true);
      setVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setDismissed(true);
    localStorage.setItem(`announcement-${ANNOUNCEMENT.id}`, 'dismissed');
    setVisible(false);
  };

  if (!visible || !ANNOUNCEMENT.enabled) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative bg-gradient-to-r from-primary/20 via-dark-950 to-dark-950 border-b border-primary/30"
        role="status"
        aria-live="polite"
      >
        <div className="container-main py-3">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-3 flex-1 min-w-[200px]">
              <div className="p-1.5 rounded-lg bg-primary/30 text-primary flex-shrink-0">
                <AlertTriangle className="w-5 h-5" aria-hidden="true" />
              </div>
              <p className="text-sm sm:text-base text-white font-medium">
                {ANNOUNCEMENT.text}
              </p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              {ANNOUNCEMENT.href && ANNOUNCEMENT.label && (
                <a
                  href={ANNOUNCEMENT.href}
                  className="btn-primary text-sm px-4 py-2 flex items-center gap-2"
                >
                  {ANNOUNCEMENT.label}
                  <ExternalLink className="w-3 h-3" aria-hidden="true" />
                </a>
              )}
              <button
                onClick={handleDismiss}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-dark-800 transition-colors flex-shrink-0"
                aria-label="Tutup pengumuman"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}