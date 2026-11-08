'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight, Shield, HeartCrack, Skull, Target, Zap, Users, Award, ExternalLink } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { FeatureCard } from '@/components/FeatureCard';
import { GameplaySystemCard } from '@/components/GameplaySystemCard';
import { RankCard } from '@/components/RankCard';
import { NewsCard } from '@/components/NewsCard';
import { ServerStatus } from '@/components/ServerStatus';
import { LIFESTEAL_FEATURES, GAMEPLAY_SYSTEMS } from '@/data/features';
import { RANKS } from '@/data/ranks';
import { NEWS } from '@/data/news';
import { SITE } from '@/config/site';

export function Home() {
  const featuredNews = NEWS[0];
  const recentNews = NEWS.slice(1, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-labelledby="hero-title">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(220,38,38,0.15),transparent_70%)]" aria-hidden="true" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(220,38,38,0.05)_0%,_transparent_50%)]" aria-hidden="true" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(220,38,38,0.03)_1px,_transparent_1px),_linear-gradient(90deg,_rgba(220,38,38,0.03)_1px,_transparent_1px)] bg-[size:60px_60px]" aria-hidden="true" />

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-primary/30 blur-[8px]"
              style={{
                width: 4 + (i * 0.8),
                height: 4 + (i * 0.8),
                left: `${10 + (i * 6)}%`,
                top: `${20 + (i * 4)}%`,
              }}
              initial={false}
              animate={{
                y: [0, -20 - (i * 2), 0],
                opacity: [0.1, 0.4, 0.1],
              }}
              transition={{
                duration: 6 + (i * 0.5),
                delay: i * 0.3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        <div className="container-main relative z-10 py-20">
          <motion.div
            className="text-center max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 text-primary border border-primary/30 mb-8 text-sm font-semibold uppercase tracking-wider"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 300 }}
            >
              <Heart className="w-4 h-4 animate-pulse-slow" aria-hidden="true" />
              <span>HIGH-STAKES LIFESTEAL</span>
              <HeartCrack className="w-4 h-4" aria-hidden="true" />
            </motion.div>

            {/* Title */}
            <h1
              id="hero-title"
              className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-white mb-6 leading-[1.1]"
            >
              <span className="block">NyawaNusa</span>
              <span className="block text-primary shimmer-text">LifeSteal</span>
            </h1>

            {/* Subtitle */}
            <motion.p
              className="text-lg sm:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Nyawa di taruh, harta di taruh, hanya yang berani yang menang.
              <br />
              <span className="font-semibold text-primary">Start: 10♥ | Max: 40♥ | Kill: +2♥ | Drop Heart: ON | Ban on Elimination: ON</span>
            </motion.p>

            {/* Stats Bar */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-dark-900/80 backdrop-blur-md border border-dark-800">
                <div className="p-2 rounded-xl bg-primary/15 text-primary">
                  <Heart className="w-5 h-5" aria-hidden="true" />
                </div>
                <div className="text-left">
                  <p className="font-display font-bold text-2xl text-white">10</p>
                  <p className="text-xs text-slate-500">Start Hearts</p>
                </div>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-dark-900/80 backdrop-blur-md border border-dark-800">
                <div className="p-2 rounded-xl bg-special/15 text-special">
                  <HeartCrack className="w-5 h-5" aria-hidden="true" />
                </div>
                <div className="text-left">
                  <p className="font-display font-bold text-2xl text-white">40</p>
                  <p className="text-xs text-slate-500">Max Hearts</p>
                </div>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-dark-900/80 backdrop-blur-md border border-dark-800">
                <div className="p-2 rounded-xl bg-secondary/15 text-secondary">
                  <Target className="w-5 h-5" aria-hidden="true" />
                </div>
                <div className="text-left">
                  <p className="font-display font-bold text-2xl text-white">+2</p>
                  <p className="text-xs text-slate-500">Hearts Per Kill</p>
                </div>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-dark-900/80 backdrop-blur-md border border-red-500/30">
                <div className="p-2 rounded-xl bg-red-500/15 text-red-400">
                  <Skull className="w-5 h-5" aria-hidden="true" />
                </div>
                <div className="text-left">
                  <p className="font-display font-bold text-2xl text-red-400">PERMA</p>
                  <p className="text-xs text-slate-500">Ban on Death</p>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Link to="/store" className="btn-primary text-lg px-8 py-4 group w-full sm:w-auto">
                <Heart className="w-5 h-5" aria-hidden="true" />
                <span>Beli Rank & Mulai Main</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <a
                href={SITE.discordInvite}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto"
              >
                <ExternalLink className="w-5 h-5" aria-hidden="true" />
                Join Discord
              </a>
              <Link to="/rules" className="btn-outline text-lg px-6 py-3 w-full sm:w-auto hidden sm:inline-flex">
                <Shield className="w-5 h-5" aria-hidden="true" />
                Baca Rules
              </Link>
            </motion.div>

            {/* Server Status */}
            <motion.div
              className="mt-16 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <ServerStatus />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          aria-hidden="true"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <motion.div
            className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center pt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </section>

      {/* Core Features */}
      <section className="section relative" aria-labelledby="features-title">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,_rgba(220,38,38,0.08),transparent_60%)]" aria-hidden="true" />
        <div className="container-main relative">
          <SectionHeading
            eyebrow="MEKANIK INTI"
            title="Mengapa NyawaNusa Berbeda?"
            desc="LifeSteal paling ekstrem yang pernah ada. Setiap mekanik dirancang untuk menciptakan ketegangan maksimal dan reward yang layak."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {LIFESTEAL_FEATURES.map((feature, i) => (
              <FeatureCard key={feature.id} feature={feature} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Gameplay Systems */}
      <section className="section relative bg-dark-900/50" aria-labelledby="systems-title">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(249,115,22,0.06),transparent_60%)]" aria-hidden="true" />
        <div className="container-main relative">
          <SectionHeading
            eyebrow="SISTEM GAMEPLAY"
            title="Stack Teknologi & Plugin"
            desc="8 plugin inti yang bekerja harmonis menciptakan pengalaman high-stakes yang seamless, fair, dan adiktif."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {GAMEPLAY_SYSTEMS.map((system, i) => (
              <GameplaySystemCard key={system.id} system={system} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Rank Overview */}
      <section className="section relative" aria-labelledby="ranks-title">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(251,191,36,0.08),transparent_60%)]" aria-hidden="true" />
        <div className="container-main relative">
          <SectionHeading
            eyebrow="RANK & PROGRESI"
            title="Pilih Jalurmu"
            desc="Dari Survivor hingga LEGEND. Setiap rank naik = lebih banyak jantung, claim block, kit, dan kekebalan. Rank LEGEND = kebebasan total."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {RANKS.map((rank, i) => (
              <RankCard key={rank.id} rank={rank} index={i} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/store" className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-3">
              <Award className="w-5 h-5" aria-hidden="true" />
              Lihat Semua Rank & Beli
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="section relative bg-dark-900/50" aria-labelledby="news-title">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(220,38,38,0.06),transparent_60%)]" aria-hidden="true" />
        <div className="container-main relative">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <SectionHeading
              eyebrow="BERITA TERBARU"
              title="Pengumuman & Update"
              centered={false}
            />
            <Link to="/news" className="btn-outline self-end sm:self-auto">
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
              Semua Berita
            </Link>
          </div>

          {/* Featured */}
          <NewsCard news={featuredNews} featured />

          {/* Recent */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-8">
            {recentNews.map((news, i) => (
              <NewsCard key={news.id} news={news} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section relative" aria-labelledby="cta-title">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-special/10" aria-hidden="true" />
        <div className="container-main relative">
          <motion.div
            className="max-w-4xl mx-auto text-center p-8 md:p-12 rounded-3xl bg-dark-900/80 backdrop-blur-md border border-primary/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 text-primary border border-primary/30 mb-6 text-sm font-semibold uppercase tracking-wider">
              <Zap className="w-4 h-4" aria-hidden="true" />
              SIAP TARUH NYAWA?
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
              Server tidak menunggu. <span className="text-primary">Hanya yang berani yang menang.</span>
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Join ribuan pemain yang sudah menguji nyawanya. Start dengan 10 jantung, bangun kekuatanmu hingga 40, dan jadilah LEGEND di NyawaNusa.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/store" className="btn-primary text-lg px-8 py-4 group">
                <Heart className="w-5 h-5" aria-hidden="true" />
                Beli Rank Sekarang
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <a
                href={SITE.discordInvite}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-lg px-8 py-4"
              >
                <Users className="w-5 h-5" aria-hidden="true" />
                Join Komunitas Discord
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}