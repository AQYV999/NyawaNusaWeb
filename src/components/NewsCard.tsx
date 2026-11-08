'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Tag, ArrowRight, HeartCrack, Skull } from 'lucide-react';
import type { NewsItem } from '@/data/news';

interface NewsCardProps {
  news: NewsItem;
  index?: number;
  featured?: boolean;
}

export function NewsCard({ news, index = 0, featured = false }: NewsCardProps) {
  const categoryColors: Record<string, string> = {
    Peluncuran: 'bg-primary/20 text-primary border-primary/30',
    Gameplay: 'bg-secondary/20 text-secondary border-secondary/30',
    Teknis: 'bg-special/20 text-special border-special/30',
    Event: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    Maintenance: 'bg-red-500/20 text-red-400 border-red-500/30',
    Perbaikan: 'bg-green-500/20 text-green-400 border-green-500/30',
    Pengumuman: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  };

  const catColor = categoryColors[news.category] || 'bg-slate-700 text-slate-300 border-slate-600';
  const newsLink = `/news/${news.id}`;

  if (featured) {
    return (
      <motion.article
        className="card card-hover relative overflow-hidden group"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
        <div className="relative grid lg:grid-cols-2 gap-8 items-center">
          <div className="p-4 lg:p-8">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${catColor}`}>
                {news.category}
              </span>
              <span className="flex items-center gap-1 text-slate-500 text-sm">
                <Calendar className="w-3 h-3" aria-hidden="true" />
                {news.date}
              </span>
            </div>
            <h3 className="font-display font-bold text-2xl lg:text-3xl text-white mb-4 leading-tight">
              {news.title}
            </h3>
            <p className="text-slate-400 text-base lg:text-lg leading-relaxed mb-6">
              {news.description}
            </p>
            <Link
              to={newsLink}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-primary to-red-700 hover:from-red-700 hover:to-red-800 active:scale-[0.98] transition-all duration-200 shadow-glow-red group"
            >
              Baca Selengkapnya
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[300px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-dark-900 to-dark-950" aria-hidden="true" />
            <div className="relative h-full flex items-center justify-center p-8">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-primary/15 text-primary flex items-center justify-center">
                  <HeartCrack className="w-12 h-12" aria-hidden="true" />
                </div>
                <p className="text-slate-400 text-sm">Artikel Unggulan</p>
              </div>
            </div>
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      className="card card-hover group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
    >
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${catColor}`}>
          {news.category}
        </span>
        <span className="flex items-center gap-1 text-slate-500 text-sm">
          <Calendar className="w-3 h-3" aria-hidden="true" />
          {news.date}
        </span>
      </div>
      <Link to={newsLink} className="block">
        <h3 className="font-display font-semibold text-lg text-white mb-2 group-hover:text-primary transition-colors">
          {news.title}
        </h3>
      </Link>
      <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
        {news.description}
      </p>
      <Link
        to={newsLink}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-red-400 transition-colors"
      >
        Baca selengkapnya
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </Link>
    </motion.article>
  );
}
