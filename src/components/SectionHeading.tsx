'use client';

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  desc?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  desc,
  className = '',
  centered = true,
}: SectionHeadingProps) {
  const alignment = centered ? 'text-center' : 'text-left';
  const marginAuto = centered ? 'mx-auto' : '';

  return (
    <motion.div
      className={`mb-8 ${alignment} ${marginAuto} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {eyebrow && (
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/15 text-primary border border-primary/20 mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white mb-3">
        {title}
      </h2>
      {desc && (
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          {desc}
        </p>
      )}
      <div className={`mt-4 w-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent ${centered ? 'mx-auto' : ''}`} aria-hidden="true" />
    </motion.div>
  );
}