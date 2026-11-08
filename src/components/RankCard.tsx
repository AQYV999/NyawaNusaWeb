'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, Heart, Crown, Zap, Shield, Sparkles, ExternalLink } from 'lucide-react';
import { type Rank } from '@/data/ranks';

interface RankCardProps {
  rank: Rank;
  index?: number;
}

export function RankCard({ rank, index = 0 }: RankCardProps) {
  const isPopular = rank.popular;
  const delay = index * 0.08;

  return (
    <motion.article
      className={`rank-card relative group ${isPopular ? 'rank-card-popular' : 'border-dark-800'}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {/* Rotating border glow for popular/high tiers */}
      {isPopular && (
        <motion.div
          className="absolute inset-0 -z-10 rounded-[22px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'conic-gradient(from 0deg, transparent, #fbbf24, transparent)',
            animation: 'rotate-border 3s linear infinite',
          }}
          aria-hidden="true"
        />
      )}

      {/* Popular Badge */}
      {isPopular && (
        <motion.div
          className="absolute -top-3 left-1/2 -translate-x-1/2"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: delay + 0.3, type: 'spring', stiffness: 260, damping: 20 }}
        >
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-special text-dark-950 shadow-glow-amber whitespace-nowrap">
            PALING POPULER
          </span>
        </motion.div>
      )}

      {/* Rank Icon/Image */}
      <div className="relative mb-6">
        <div
          className={`w-20 h-20 mx-auto rounded-2xl ${rank.theme.iconBox} flex items-center justify-center border-2 ${isPopular ? 'border-special/50' : 'border-dark-700'}`}
          style={{ backgroundImage: `url(${rank.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          aria-hidden="true"
        >
          {/* Fallback icon if image fails */}
          <Heart className="w-10 h-10" aria-hidden="true" />
        </div>

        {/* Tier indicator */}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1">
          {['SURVIVOR', 'HUNTER', 'REAPER', 'LEGEND'].map((tier, i) => (
            <motion.div
              key={tier}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                ['SURVIVOR', 'HUNTER', 'REAPER', 'LEGEND'].indexOf(rank.id.toUpperCase()) >= i
                  ? rank.theme.solid
                  : 'bg-dark-700'
              }`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: delay + i * 0.05, type: 'spring', stiffness: 300 }}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>

      {/* Rank Name & Tagline */}
      <div className="text-center mb-4">
        <h3 className="font-display font-bold text-2xl text-white mb-1">
          {rank.name}
        </h3>
        <p className="text-slate-400 text-sm" style={{ color: rank.theme.text }}>
          {rank.tagline}
        </p>
      </div>

      {/* Description */}
      <p className="text-slate-500 text-sm mb-6 leading-relaxed text-center">
        {rank.description}
      </p>

      {/* Benefits */}
      <ul className="space-y-3 mb-6" role="list">
        {rank.benefits.map((benefit, i) => (
          <motion.li
            key={benefit}
            className="flex items-start gap-3 text-sm text-slate-300"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: delay + 0.2 + i * 0.04 }}
          >
            <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${rank.theme.check}`}>
              <Check className="w-3 h-3" aria-hidden="true" />
            </span>
            <span>{benefit}</span>
          </motion.li>
        ))}
      </ul>

      {/* Price & CTA */}
      <div className="pt-4 border-t border-dark-800">
        <div className="flex items-baseline justify-center gap-1 mb-4">
          {rank.price ? (
            <>
              <span className="font-display font-bold text-3xl text-white" style={{ fontFamily: 'Rajdhani, Outfit, sans-serif' }}>
                {rank.price}
              </span>
              <span className="text-slate-500 text-sm">/ once</span>
            </>
          ) : (
            <span className="font-display font-bold text-2xl text-special">GRATIS</span>
          )}
        </div>

        {rank.price ? (
          <Link
            to="/store"
            className={`btn-primary w-full justify-center ${rank.solidCta ? '' : ''}`}
            style={{
              background: rank.solidCta
                ? `linear-gradient(135deg, ${rank.theme.solid}, ${rank.theme.hover})`
                : undefined,
              borderColor: rank.solidCta ? rank.theme.solid : undefined,
            }}
          >
            <Heart className="w-4 h-4" aria-hidden="true" />
            Beli {rank.name}
          </Link>
        ) : (
          <button className="btn-secondary w-full justify-center" disabled>
            <Crown className="w-4 h-4" aria-hidden="true" />
            Default Rank
          </button>
        )}

        {rank.inherits && (
          <p className="text-center text-xs text-slate-500 mt-3">
            Termasuk semua fitur <span className="font-semibold text-slate-300">{rank.inherits}</span>
          </p>
        )}
      </div>
    </motion.article>
  );
}