'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X, Heart, MessageSquare, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { NAVIGATION, SITE } from '@/config/site';
import { isWhatsAppConfigured, isWhatsAppUrlConfigured, whatsappLink } from '@/config/site';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [whatsappReady, setWhatsappReady] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setWhatsappReady(isWhatsAppConfigured() && isWhatsAppUrlConfigured());
  }, []);

  const navClass = scrolled
    ? 'bg-dark-950/80 backdrop-blur-xl border-b border-primary/20 shadow-glow-red'
    : 'bg-dark-950/60 backdrop-blur-xl border-b border-dark-800';

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClass}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      role="navigation"
      aria-label="Navigasi utama"
    >
      <div className="container-main">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-white" aria-label={`${SITE.name} - Home`}>
            <Heart className="w-7 h-7 text-primary animate-pulse-slow" aria-hidden="true" />
            <span className="font-display font-bold text-xl lg:text-2xl tracking-tight">
              {SITE.name}
            </span>
            <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-primary/20 text-primary rounded border border-primary/30">
              HIGH-STAKES
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {NAVIGATION.filter(item => !item.group).map(item => (
              <Link
                key={item.href}
                to={item.href}
                className="px-4 py-2 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-dark-800 transition-all duration-200 relative after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-3/4"
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center gap-2 ml-2">
              <Link to="/store" className="btn-primary text-sm px-5 py-2">
                <Heart className="w-4 h-4" aria-hidden="true" />
                Store
              </Link>
              <a
                href={SITE.discordInvite}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm px-5 py-2"
              >
                <MessageSquare className="w-4 h-4" aria-hidden="true" />
                Discord
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-dark-800 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Tutup menu' : 'Buka menu'}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          id="mobile-menu"
          className="lg:hidden overflow-hidden border-t border-dark-800 bg-dark-950/95 backdrop-blur-xl"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: mobileOpen ? 'auto' : 0, opacity: mobileOpen ? 1 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          role="navigation"
          aria-label="Menu mobile"
        >
          <div className="container-main py-6 space-y-3">
            {NAVIGATION.map(item => (
              <Link
                key={item.href}
                to={item.href}
                className="block px-4 py-3 rounded-xl text-base font-medium text-slate-300 hover:text-white hover:bg-dark-800 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="divider my-2" />
            <div className="flex flex-col gap-3 pt-2">
              <Link to="/store" className="btn-primary w-full justify-center" onClick={() => setMobileOpen(false)}>
                <Heart className="w-4 h-4" aria-hidden="true" />
                Store
              </Link>
              <a
                href={SITE.discordInvite}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full justify-center"
              >
                <MessageSquare className="w-4 h-4" aria-hidden="true" />
                Discord
              </a>
              {whatsappReady && (
                <a
                  href={whatsappLink('Halo, mau tanya soal server NyawaNusa LifeSteal!')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline w-full justify-center"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  WhatsApp
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}