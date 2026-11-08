'use client';

import { motion } from 'framer-motion';
import {
  Heart,
  Shield,
  Zap,
  Users,
  Crown,
  Target,
  Gem,
  Skull,
  Sword,
  Coins,
  BookOpen,
  Settings,
  Hash,
  Key,
} from 'lucide-react';
import { GAMEPLAY_SYSTEMS } from '@/data/features';

interface GameplaySystemCardProps {
  system: typeof GAMEPLAY_SYSTEMS[0];
  index?: number;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'heart-crack': Heart,
  'shield-ban': Shield,
  crosshair: Target,
  'shopping-cart': Coins,
  wrench: Settings,
  link: Hash,
  'heart-pulse': Heart,
  target: Target,
  gift: Gem,
  skull: Skull,
  'shield-alert': Shield,
  coin: Coins,
  store: BookOpen,
  Users,
  Crown,
  Zap,
  Sword,
  Key,
};

const colorStyles: Record<string, { bg: string; border: string; text: string; iconBg: string }> = {
  primary: {
    bg: 'bg-primary/10',
    border: 'border-primary/20',
    text: 'text-primary',
    iconBg: 'bg-primary/15',
  },
  secondary: {
    bg: 'bg-secondary/10',
    border: 'border-secondary/20',
    text: 'text-secondary',
    iconBg: 'bg-secondary/15',
  },
  special: {
    bg: 'bg-special/10',
    border: 'border-special/20',
    text: 'text-special',
    iconBg: 'bg-special/15',
  },
};

export function GameplaySystemCard({ system, index = 0 }: GameplaySystemCardProps) {
  const colors = colorStyles[system.color] || colorStyles.primary;
  const IconComponent = iconMap[system.icon] || Shield;

  return (
    <motion.div
      className={`card card-hover relative overflow-hidden group p-6 ${colors.bg} ${colors.border}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
      {/* Icon */}
      <div className={`w-14 h-14 rounded-2xl ${colors.iconBg} ${colors.text} flex items-center justify-center mb-4`}>
        <IconComponent className="w-7 h-7" aria-hidden="true" />
      </div>

      {/* Tagline */}
      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${colors.bg} ${colors.text} border ${colors.border} mb-3`}>
        {system.tagline}
      </span>

      {/* Name */}
      <h3 className="font-display font-bold text-xl text-white mb-2">
        {system.name}
      </h3>

      {/* Description */}
      <p className="text-slate-400 text-sm mb-5 line-clamp-2">
        {system.description}
      </p>

      {/* Config */}
      <ul className="space-y-2 mb-5" role="list">
        {system.config.map((item, i) => (
          <li key={i} className="flex items-center gap-2 text-slate-300 text-sm">
            <span className={`w-4 h-4 flex-shrink-0 ${colors.text}`}>✓</span>
            <span className="font-mono text-xs text-slate-500">{item.key}</span>
            <span className="text-slate-400">{item.value}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
