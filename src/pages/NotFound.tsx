'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Search, Compass, Heart, Skull, ArrowLeft, RotateCcw, BookOpen, Gem, Crown, Shield, MessageSquare } from 'lucide-react';
import { SITE } from '@/config/site';

export function NotFound() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden" aria-labelledby="notfound-title">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(220,38,38,0.2),transparent_70%)]" aria-hidden="true" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(220,38,38,0.03)_1px,_transparent_1px),_linear-gradient(90deg,_rgba(220,38,38,0.03)_1px,_transparent_1px)] bg-[size:60px_60px]" aria-hidden="true" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/20 blur-[4px]"
            style={{
              width: 3 + (i * 0.5),
              height: 3 + (i * 0.5),
              left: `${5 + (i * 4.5)}%`,
              top: `${10 + (i * 4)}%`,
            }}
            initial={false}
            animate={{
              y: [0, -30 - (i * 2), 0],
              x: [0, 10 - (i * 1), 0],
              opacity: [0.05, 0.3, 0.05],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 8 + (i * 0.3),
              delay: i * 0.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="container-main relative z-10 text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Error Code */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 15 }}
          >
            <span className="font-display font-black text-9xl sm:text-12xl lg:text-16xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-600 to-special tracking-tight leading-none">
              404
            </span>
            <motion.div
              className="absolute -top-4 -right-4 w-16 h-16 border-4 border-primary/30 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              aria-hidden="true"
            />
          </motion.div>

          {/* Title */}
          <h1 id="notfound-title" className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
            Halaman <span className="text-primary">Tidak Ditemukan</span>
          </h1>

          {/* Description */}
          <motion.p
            className="text-lg sm:text-xl text-slate-300 max-w-xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Sepertinya kamu tersesat di dunia NyawaNusa. Mungkin linknya salah ketik,
            atau halaman sudah dipindahkan. Jangan khawatir — nyawa kamu masih utuh.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Link to="/" className="btn-primary text-lg px-8 py-4 group w-full sm:w-auto">
              <Home className="w-5 h-5" aria-hidden="true" />
              Kembali ke Home
              <ArrowLeft className="w-5 h-5 -rotate-90 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
            </Link>
            <Link to="/wiki" className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto">
              <BookOpen className="w-5 h-5" aria-hidden="true" />
              Buka Wiki
            </Link>
            <button
              onClick={() => window.history.back()}
              className="btn-outline text-lg px-6 py-3 w-full sm:w-auto"
            >
              <RotateCcw className="w-5 h-5" aria-hidden="true" />
              Kembali Sebelumnya
            </button>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <p className="text-slate-500 text-sm mb-4">Atau lompat ke halaman populer:</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link to="/store" className="px-4 py-2 rounded-xl bg-dark-800 border border-dark-700 text-slate-300 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all text-sm">
                <Heart className="w-4 h-4 inline mr-1" aria-hidden="true" />
                Store & Rank
              </Link>
              <Link to="/vote" className="px-4 py-2 rounded-xl bg-dark-800 border border-dark-700 text-slate-300 hover:text-white hover:border-special/50 hover:bg-special/10 transition-all text-sm">
                <Gem className="w-4 h-4 inline mr-1" aria-hidden="true" />
                Vote & Reward
              </Link>
              <Link to="/leaderboard" className="px-4 py-2 rounded-xl bg-dark-800 border border-dark-700 text-slate-300 hover:text-white hover:border-special/50 hover:bg-special/10 transition-all text-sm">
                <Crown className="w-4 h-4 inline mr-1" aria-hidden="true" />
                Leaderboard
              </Link>
              <Link to="/rules" className="px-4 py-2 rounded-xl bg-dark-800 border border-dark-700 text-slate-300 hover:text-white hover:border-red-500/50 hover:bg-red-500/10 transition-all text-sm">
                <Shield className="w-4 h-4 inline mr-1" aria-hidden="true" />
                Rules
              </Link>
              <Link to="/support" className="px-4 py-2 rounded-xl bg-dark-800 border border-dark-700 text-slate-300 hover:text-white hover:border-green-500/50 hover:bg-green-500/10 transition-all text-sm">
                <MessageSquare className="w-4 h-4 inline mr-1" aria-hidden="true" />
                Support
              </Link>
            </div>
          </motion.div>

          {/* Discord CTA */}
          <motion.div
            className="mt-16 p-8 rounded-3xl bg-dark-900/80 backdrop-blur-md border border-primary/20 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 mb-3">
              <Heart className="w-6 h-6 text-red-400 animate-pulse-slow" aria-hidden="true" />
              <Skull className="w-6 h-6 text-slate-500" aria-hidden="true" />
            </div>
            <p className="text-slate-300 mb-4">
              Butuh bantuan langsung? Staff kami siap 24/7 di Discord.
            </p>
            <a
              href={SITE.discordInvite}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <MessageSquare className="w-5 h-5" aria-hidden="true" />
              Join Discord NyawaNusa
            </a>
          </motion.div>

          {/* Fun message */}
          <motion.p
            className="mt-12 text-slate-600 text-sm italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            "Di NyawaNusa, bahkan halaman 404 pun berbahaya.
            <br />
            Untungnya kamu cuma kehilangan halaman, bukan jantung."
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
