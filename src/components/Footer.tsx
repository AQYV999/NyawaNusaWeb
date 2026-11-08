'use client';

import { Link } from 'react-router-dom';
import { Heart, MessageSquare, MessageCircle, Mail, Shield, HeartCrack, Skull, ExternalLink } from 'lucide-react';
import { NAVIGATION, SITE } from '@/config/site';
import { isWhatsAppConfigured, isWhatsAppUrlConfigured, whatsappLink } from '@/config/site';

export function Footer() {
  const whatsappReady = isWhatsAppConfigured() && isWhatsAppUrlConfigured();

  const footerLinks = NAVIGATION.filter(item => item.group === 'more');

  return (
    <footer className="relative bg-dark-950 border-t border-dark-800 overflow-hidden" role="contentinfo">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,_rgba(220,38,38,0.08),transparent_60%)]" aria-hidden="true" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(220,38,38,0.03)_0%,_transparent_50%)]" aria-hidden="true" />

      <div className="container-main relative py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6" aria-label={`${SITE.name} - Home`}>
              <Heart className="w-8 h-8 text-primary animate-pulse-slow" aria-hidden="true" />
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                {SITE.name}
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              {SITE.description}
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <HeartCrack className="w-3 h-3 text-primary" aria-hidden="true" />
              <span className="font-mono">Start: 10♥ | Max: 40♥ | Kill: +2♥</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
              <Skull className="w-3 h-3 text-red-500" aria-hidden="true" />
              <span className="font-mono">Ban on Elimination: ACTIVE</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-8">
              <a
                href={SITE.discordInvite}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-dark-800 border border-dark-700 text-slate-400 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all duration-200"
                aria-label="Discord"
              >
                <MessageSquare className="w-5 h-5" aria-hidden="true" />
              </a>
              {whatsappReady && (
                <a
                  href={whatsappLink('Halo!')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-dark-800 border border-dark-700 text-slate-400 hover:text-white hover:border-green-500/50 hover:bg-green-500/10 transition-all duration-200"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" aria-hidden="true" />
                </a>
              )}
              <a
                href={`mailto:${SITE.supportEmail}`}
                className="p-2 rounded-xl bg-dark-800 border border-dark-700 text-slate-400 hover:text-white hover:border-special/50 hover:bg-special/10 transition-all duration-200"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-2">
            <h3 className="font-display font-semibold text-white mb-4">Navigasi</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-3">
                {NAVIGATION.filter(item => !item.group).slice(0, 3).map(item => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="block text-slate-400 hover:text-primary transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="space-y-3">
                {NAVIGATION.filter(item => !item.group).slice(3).map(item => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="block text-slate-400 hover:text-primary transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="space-y-3">
                {footerLinks.slice(0, 3).map(item => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="block text-slate-400 hover:text-primary transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="space-y-3">
                {footerLinks.slice(3).map(item => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="block text-slate-400 hover:text-primary transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Server Info */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Server Info</h3>
            <dl className="space-y-3 text-sm">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-dark-900/50 border border-dark-800">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Shield className="w-4 h-4" aria-hidden="true" />
                </div>
                <div>
                  <dt className="text-slate-500">Edisi</dt>
                  <dd className="text-white font-mono">{SITE.edition}</dd>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-dark-900/50 border border-dark-800">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <HeartCrack className="w-4 h-4" aria-hidden="true" />
                </div>
                <div>
                  <dt className="text-slate-500">Start Hearts</dt>
                  <dd className="text-white font-mono">10 (5 bar HP)</dd>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-dark-900/50 border border-dark-800">
                <div className="p-2 rounded-lg bg-special/10 text-special">
                  <Heart className="w-4 h-4" aria-hidden="true" />
                </div>
                <div>
                  <dt className="text-slate-500">Max Hearts</dt>
                  <dd className="text-white font-mono">40 (20 bar HP)</dd>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-dark-900/50 border border-dark-800">
                <div className="p-2 rounded-lg bg-secondary/10 text-secondary">
                  <Skull className="w-4 h-4" aria-hidden="true" />
                </div>
                <div>
                  <dt className="text-slate-500">Eliminasi</dt>
                  <dd className="text-white font-mono">Permanent Ban</dd>
                </div>
              </div>
            </dl>
          </div>

          {/* Quick Actions */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Aksi Cepat</h3>
            <div className="space-y-3">
              <Link to="/store" className="btn-primary w-full justify-center">
                <Heart className="w-4 h-4" aria-hidden="true" />
                Beli Rank & Kit
              </Link>
              <a
                href={SITE.discordInvite}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full justify-center flex"
              >
                <MessageSquare className="w-4 h-4" aria-hidden="true" />
                Join Discord
              </a>
              {whatsappReady && (
                <a
                  href={whatsappLink('Halo, mau tanya soal NyawaNusa!')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline w-full justify-center flex"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  Chat WhatsApp
                </a>
              )}
              <Link to="/support" className="btn-ghost w-full justify-center flex">
                <Mail className="w-4 h-4" aria-hidden="true" />
                Hubungi Support
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-dark-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm text-center md:text-left">
              {SITE.footerCopyright}
            </p>
            <div className="flex items-center gap-6 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <Heart className="w-3 h-3 text-primary" aria-hidden="true" />
                High-Stakes LifeSteal
              </span>
              <span className="flex items-center gap-1">
                <Shield className="w-3 h-3 text-special" aria-hidden="true" />
                Paper 1.21.4
              </span>
              <span className="flex items-center gap-1">
                <ExternalLink className="w-3 h-3 text-secondary" aria-hidden="true" />
                Aternos Hosted
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}