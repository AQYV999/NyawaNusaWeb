'use client';

import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { AnnouncementBar } from './AnnouncementBar';
import { ScrollProgress } from './ScrollProgress';
import { BackToTop } from './BackToTop';

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-dark-950 text-white">
      <AnnouncementBar />
      <Navbar />
      <main id="main-content" className="pt-16 lg:pt-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="min-h-[calc(100vh-200px)]"
        >
          {children}
        </motion.div>
      </main>
      <Footer />
      <ScrollProgress />
      <BackToTop />
    </div>
  );
}