'use client';

import { motion } from 'framer-motion';
import { Heart, HeartPulse, Target, Gift, Skull, ShieldAlert, Coins, Store } from 'lucide-react';
import { type Feature } from '@/data/features';

interface FeatureCardProps {
  feature: Feature;
  index?: number;
}

const iconMap: Record<string, React.ReactNode> = {
  heart: <Heart className="w-6 h-6" />,
  'heart-pulse': <HeartPulse className="w-6 h-6" />,
  target: <Target className="w-6 h-6" />,
  gift: <Gift className="w-6 h-6" />,
  skull: <Skull className="w-6 h-6" />,
  'shield-alert': <ShieldAlert className="w-6 h-6" />,
  coin: <Coins className="w-6 h-6" />,
  store: <Store className="w-6 h-6" />,
};

export function FeatureCard({ feature, index = 0 }: FeatureCardProps) {
  const IconNode = iconMap[feature.icon] || iconMap.heart;

  return (
    <motion.div
      className="card card-hover group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
    >
      <div className="w-12 h-12 rounded-xl bg-primary/15 text-primary flex items-center justify-center mb-4 group-hover:bg-primary/25 group-hover:text-white transition-all duration-300">
        {IconNode}
      </div>
      <h3 className="font-display font-semibold text-xl text-white mb-2">
        {feature.title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-3">
        {feature.description}
      </p>
      {feature.highlight && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/15 text-primary border border-primary/20">
          {feature.highlight}
        </span>
      )}
    </motion.div>
  );
}
