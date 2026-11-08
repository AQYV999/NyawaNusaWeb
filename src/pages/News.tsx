'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Tag, ArrowRight, Heart, HeartCrack, Skull, Target, Zap, Users, Award, ExternalLink, Loader2 } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { NewsCard } from '@/components/NewsCard';
import { NEWS } from '@/data/news';
import { SITE } from '@/config/site';

const categoryColors: Record<string, string> = {
  Peluncuran: 'bg-primary/20 text-primary border-primary/30',
  Gameplay: 'bg-secondary/20 text-secondary border-secondary/30',
  Teknis: 'bg-special/20 text-special border-special/30',
  Event: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  Maintenance: 'bg-red-500/20 text-red-400 border-red-500/30',
  Perbaikan: 'bg-green-500/20 text-green-400 border-green-500/30',
  Pengumuman: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
};

export function News() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden" aria-labelledby="news-hero-title">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(220,38,38,0.15),transparent_70%)]" aria-hidden="true" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(220,38,38,0.03)_1px,_transparent_1px),_linear-gradient(90deg,_rgba(220,38,38,0.03)_1px,_transparent_1px)] bg-[size:60px_60px]" aria-hidden="true" />
        <div className="container-main relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 text-primary border border-primary/30 mb-6 text-sm font-semibold uppercase tracking-wider"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 300 }}
            >
              <Zap className="w-4 h-4" aria-hidden="true" />
              BERITA & PENGUMUMAN
            </motion.span>
            <h1 id="news-hero-title" className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white mb-4">
              Berita <span className="text-primary shimmer-text">NyawaNusa</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Update server, event, patch notes, & pengumuman penting. Jangan ketinggalan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="section relative" aria-labelledby="featured-title">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,_rgba(220,38,38,0.08),transparent_60%)]" aria-hidden="true" />
        <div className="container-main relative">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <SectionHeading
              eyebrow="ARTIKEL UNGGULAN"
              title="Pengumuman Terbaru"
              centered={false}
            />
          </div>

          {NEWS.length > 0 && (
            <NewsCard news={NEWS[0]} featured />
          )}
        </div>
      </section>

      {/* All News Grid */}
      <section className="section relative bg-dark-900/50" aria-labelledby="all-news-title">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(249,115,22,0.06),transparent_60%)]" aria-hidden="true" />
        <div className="container-main relative">
          <SectionHeading
            eyebrow="SEMUA BERITA"
            title="Arsip Lengkap"
            desc={`${NEWS.length} artikel & pengumuman. Filter by kategori di bawah.`}
            centered
          />

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8" role="group" aria-label="Filter kategori berita">
            <button
              className="px-4 py-2 rounded-xl font-medium text-sm transition-all bg-primary/20 text-primary border border-primary/30"
              aria-pressed="true"
            >
              Semua
            </button>
            {['Peluncuran', 'Gameplay', 'Teknis', 'Event', 'Maintenance', 'Perbaikan', 'Pengumuman'].map(cat => (
              <button
                key={cat}
                className="px-4 py-2 rounded-xl font-medium text-sm transition-all bg-dark-800 text-slate-300 hover:bg-dark-700 hover:text-white border border-dark-700"
                aria-pressed="false"
              >
                {cat}
              </button>
            ))}
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {NEWS.slice(1).map((news, i) => (
              <NewsCard key={news.id} news={news} index={i} />
            ))}
          </div>

          {/* Load More / Pagination placeholder */}
          <div className="text-center mt-12">
            <button className="btn-outline px-8 py-3 flex items-center gap-2 mx-auto" disabled>
              <Loader2 className="w-5 h-5" aria-hidden="true" />
              Muat Lebih Banyak (Coming Soon)
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter / Stay Updated */}
      <section className="section relative" aria-labelledby="stay-title">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-special/10" aria-hidden="true" />
        <div className="container-main relative">
          <motion.div
            className="max-w-2xl mx-auto text-center p-8 md:p-12 rounded-3xl bg-dark-900/80 backdrop-blur-md border border-primary/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 text-primary border border-primary/30 mb-6 text-sm font-semibold uppercase tracking-wider">
              <Zap className="w-4 h-4" aria-hidden="true" />
              JANGAN KETINGGALAN
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
              Dapatkan update <span className="text-primary">real-time</span> di Discord
            </h2>
            <p className="text-slate-300 mb-8">
              Semua pengumuman, event, maintenance, & patch notes di-post pertama kali di Discord #📢・announcements. Join sekarang.
            </p>
            <a
              href={SITE.discordInvite}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-3 px-8 py-4"
            >
              <Users className="w-5 h-5" aria-hidden="true" />
              Join Discord
              <ExternalLink className="w-5 h-5" aria-hidden="true" />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}