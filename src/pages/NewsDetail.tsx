'use client';

import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { Calendar, Tag, ArrowLeft, Heart, HeartCrack, Skull, Target, Zap, Share2, ExternalLink, Loader2 } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
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

export function NewsDetail() {
  const { id } = useParams<{ id: string }>();
  const news = NEWS.find(n => n.id === id);

  if (!news) {
    return (
      <section className="min-h-[60vh] flex items-center justify-center">
        <div className="container-main text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card p-12 max-w-md mx-auto"
          >
            <Loader2 className="w-16 h-16 mx-auto mb-4 text-primary animate-spin" aria-hidden="true" />
            <h2 className="font-display font-bold text-2xl text-white mb-2">Artikel Tidak Ditemukan</h2>
            <p className="text-slate-400 mb-6">Artikel yang kamu cari tidak ada atau sudah dihapus.</p>
            <Link to="/news" className="btn-primary inline-flex items-center gap-2">
              <ArrowLeft className="w-5 h-5" aria-hidden="true" />
              Kembali ke Berita
            </Link>
          </motion.div>
        </div>
      </section>
    );
  }

  const catColor = categoryColors[news.category] || 'bg-slate-700 text-slate-300 border-slate-600';

  const shareUrl = typeof window !== 'undefined' ? window.location.href : `${SITE.discordInvite}/news/${news.id}`;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: news.title,
          text: news.description,
          url: shareUrl,
        });
      } catch (err) {
        // User cancelled or error
      }
    } else {
      navigator.clipboard.writeText(shareUrl);
      alert('Link disalin ke clipboard!');
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden" aria-labelledby="news-detail-title">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(220,38,38,0.15),transparent_70%)]" aria-hidden="true" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(220,38,38,0.03)_1px,_transparent_1px),_linear-gradient(90deg,_rgba(220,38,38,0.03)_1px,_transparent_1px)] bg-[size:60px_60px]" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent" aria-hidden="true" />
        <div className="container-main relative">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Link to="/news" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6 group">
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
              Kembali ke Berita
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${catColor}`}>
                {news.category}
              </span>
              <span className="flex items-center gap-1 text-slate-500 text-sm">
                <Calendar className="w-4 h-4" aria-hidden="true" />
                {news.date}
              </span>
            </div>

            <h1 id="news-detail-title" className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6 leading-tight">
              {news.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section relative" aria-labelledby="content-title">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,_rgba(220,38,38,0.06),transparent_60%)]" aria-hidden="true" />
        <div className="container-main relative">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8 p-4 bg-dark-900/50 rounded-xl border border-dark-800">
              <div className="flex items-center gap-4">
                <button onClick={handleShare} className="p-2 rounded-xl bg-dark-800 border border-dark-700 text-slate-400 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all">
                  <Share2 className="w-5 h-5" aria-hidden="true" />
                </button>
                <div>
                  <p className="text-xs text-slate-500">Bagikan</p>
                  <p className="font-medium text-white text-sm">Sebarkan berita ini</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-slate-400 text-sm">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                  {news.date}
                </span>
                <span className="flex items-center gap-1">
                  <Tag className="w-4 h-4" aria-hidden="true" />
                  {news.category}
                </span>
              </div>
            </div>

            <motion.article
              className="prose prose-invert prose-lg max-w-none card p-6 md:p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-slate-300 leading-relaxed whitespace-pre-wrap">
                {news.content || news.description}
              </div>
            </motion.article>

            {/* Related News */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="font-display font-semibold text-xl text-white mb-6 flex items-center gap-2">
                <Zap className="w-6 h-6 text-primary" aria-hidden="true" />
                Berita Lainnya
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {NEWS.filter(n => n.id !== news.id).slice(0, 2).map((related, i) => (
                  <Link key={related.id} to={`/news/${related.id}`} className="card card-hover p-4 group">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider ${categoryColors[related.category] || 'bg-slate-700 text-slate-300 border-slate-600'}`}>
                        {related.category}
                      </span>
                      <span className="text-slate-500 text-sm">{related.date}</span>
                    </div>
                    <h4 className="font-semibold text-white group-hover:text-primary transition-colors mb-1">{related.title}</h4>
                    <p className="text-slate-400 text-sm line-clamp-2">{related.description}</p>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
