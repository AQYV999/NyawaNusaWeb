'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Vote as VoteIcon, Gift, Heart, Crown, Zap, ArrowRight, ExternalLink, CheckCircle, Clock, AlertTriangle } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { ServerStatus } from '@/components/ServerStatus';
import { SITE } from '@/config/site';

const VOTE_SITES = [
  {
    id: 'minecraft-server-list',
    name: 'Minecraft Server List',
    url: `https://minecraft-server-list.com/server/${SITE.ip}/vote`,
    reward: '1 Vote Key + 500 Coins + 1 Heart',
    cooldown: '24 jam',
    icon: '🗳️',
    color: 'from-blue-600 to-blue-800',
  },
  {
    id: 'topg',
    name: 'TopG',
    url: `https://topg.org/Minecraft/in-${SITE.ip}`,
    reward: '1 Vote Key + 300 Coins',
    cooldown: '24 jam',
    icon: '🏆',
    color: 'from-purple-600 to-purple-800',
  },
  {
    id: 'minecraft-mp',
    name: 'Minecraft-MP',
    url: `https://minecraft-mp.com/server/${SITE.ip}/vote`,
    reward: '1 Vote Key + 400 Coins',
    cooldown: '24 jam',
    icon: '⭐',
    color: 'from-yellow-600 to-orange-700',
  },
  {
    id: 'planetminecraft',
    name: 'Planet Minecraft',
    url: `https://planetminecraft.com/server/${SITE.ip}/vote`,
    reward: '1 Vote Key + 600 Coins + Diamond',
    cooldown: '24 jam',
    icon: '🌍',
    color: 'from-green-600 to-green-800',
  },
];

const VOTE_REWARDS = [
  { votes: 1, reward: '1x Vote Key', desc: 'Buka crate vote untuk reward random' },
  { votes: 7, reward: '7x Vote Key + 1x Mystery Key', desc: 'Mingguan: mystery key berisi item langka' },
  { votes: 30, reward: '30x Vote Key + 1x Legendary Key + Tag [VOTER]', desc: 'Bulanan: tag eksklusif + legendary crate' },
  { votes: 100, reward: '100x Vote Key + Custom Nickname (30 hari)', desc: 'Milestone: nickname custom 1 bulan' },
  { votes: 365, reward: 'Tahun: Rank HUNTER GRATIS 1 Tahun + Title [LOYAL]', desc: 'Setahun vote: rank Hunter + title permanen' },
];

export function Vote() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden" aria-labelledby="vote-hero-title">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(249,115,22,0.15),transparent_70%)]" aria-hidden="true" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.03)_1px,_transparent_1px),_linear-gradient(90deg,_rgba(249,115,22,0.03)_1px,_transparent_1px)] bg-[size:60px_60px]" aria-hidden="true" />
        <div className="container-main relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/15 text-secondary border border-secondary/30 mb-6 text-sm font-semibold uppercase tracking-wider"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 300 }}
            >
              <VoteIcon className="w-4 h-4" aria-hidden="true" />
              VOTE & DAPAT REWARD
            </motion.span>
            <h1 id="vote-hero-title" className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white mb-4">
              Vote Server, <span className="text-secondary shimmer-text">Dapatkan Jantung & Key</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Setiap vote membantu server naik ranking & menarik pemain baru. Kamu dapat reward harian, mingguan, & bulanan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vote Sites */}
      <section className="section relative" aria-labelledby="sites-title">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,_rgba(220,38,38,0.08),transparent_60%)]" aria-hidden="true" />
        <div className="container-main relative">
          <SectionHeading
            eyebrow="SITUS VOTE"
            title="4 Situs Resmi"
            desc="Vote di semua situs setiap 24 jam untuk memaksimalkan reward. Total: 4 Vote Key + 1.800 Coins + 1 Heart per hari."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {VOTE_SITES.map((site, i) => (
              <motion.div
                key={site.id}
                className="card card-hover relative overflow-hidden group p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
                <div className="relative flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br ${site.color} flex-shrink-0`}>
                    {site.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-semibold text-xl text-white mb-1">{site.name}</h3>
                    <p className="text-slate-400 text-sm mb-3">{site.reward}</p>
                    <div className="flex flex-wrap items-center gap-3 text-sm">
                      <span className="flex items-center gap-1 text-slate-500 bg-dark-800 px-3 py-1 rounded-full">
                        <Clock className="w-3 h-3" aria-hidden="true" />
                        {site.cooldown}
                      </span>
                    </div>
                  </div>
                </div>
                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-primary to-red-700 hover:from-red-700 hover:to-red-800 active:scale-[0.98] transition-all duration-200 shadow-glow-red group w-full justify-center"
                >
                  Vote Sekarang
                  <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cumulative Rewards */}
      <section className="section relative bg-dark-900/50" aria-labelledby="rewards-title">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(251,191,36,0.08),transparent_60%)]" aria-hidden="true" />
        <div className="container-main relative">
          <SectionHeading
            eyebrow="REWARD KUMULATIF"
            title="Milestone Vote"
            desc="Reward menumpuk — semakin rajin vote, semakin besar hadiahnya. Otomatis diklaim via /vote claim di game."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
            {VOTE_REWARDS.map((reward, i) => (
              <motion.div
                key={reward.votes}
                className={`card relative p-6 text-center ${reward.votes >= 100 ? 'border-special/50 bg-special/5' : ''}`}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                {reward.votes >= 100 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-special/20 text-special text-xs font-semibold uppercase tracking-wider">
                    EKSKLUSIF
                  </div>
                )}
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20 text-3xl">
                  {reward.votes === 1 && <VoteIcon className="w-8 h-8 text-primary" />}
                  {reward.votes === 7 && <Gift className="w-8 h-8 text-purple-400" />}
                  {reward.votes === 30 && <Crown className="w-8 h-8 text-special" />}
                  {reward.votes === 100 && <Heart className="w-8 h-8 text-red-400" />}
                  {reward.votes === 365 && <Zap className="w-8 h-8 text-yellow-400" />}
                </div>
                <div className="mb-2">
                  <span className="font-display font-bold text-3xl text-white">{reward.votes}</span>
                  <span className="text-slate-500 ml-1">Vote</span>
                </div>
                <h4 className="font-semibold text-white mb-1">{reward.reward}</h4>
                <p className="text-slate-400 text-sm">{reward.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Vote */}
      <section className="section relative" aria-labelledby="howto-title">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(220,38,38,0.06),transparent_60%)]" aria-hidden="true" />
        <div className="container-main relative max-w-3xl">
          <SectionHeading
            eyebrow="CARA VOTE"
            title="3 Langkah Mudah"
            centered
          />
          <div className="space-y-4">
            {[
              { step: '01', title: 'Buka Situs Vote', desc: 'Klik tombol "Vote Sekarang" di atas atau ketik /vote di game untuk mendapat link langsung.', icon: VoteIcon },
              { step: '02', title: 'Masukkan Username', desc: 'Isi username Minecraft Java kamu (bukan nickname). Pastikan benar agar reward masuk.', icon: CheckCircle },
              { step: '03', title: 'Klaim Reward', desc: 'Masuk server & ketik /vote claim. Reward (Key, Coins, Heart) langsung ke inventory.', icon: Gift },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                className="card flex items-start gap-4 p-5 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-primary/20 to-secondary/20 text-primary group-hover:from-primary/40 group-hover:to-secondary/40 transition-all`}>
                  <item.icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-display font-bold text-2xl text-special">{item.step}</span>
                    <h4 className="font-semibold text-white text-lg">{item.title}</h4>
                  </div>
                  <p className="text-slate-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vote Party / Events */}
      <section className="section relative bg-dark-900/50" aria-labelledby="party-title">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(249,115,22,0.06),transparent_60%)]" aria-hidden="true" />
        <div className="container-main relative max-w-3xl">
          <SectionHeading
            eyebrow="EVENT KHUSUS"
            title="Vote Party & Bonus"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div
              className="card p-5 border-primary/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-xl bg-primary/15 text-primary">
                  <Heart className="w-5 h-5" aria-hidden="true" />
                </div>
                <h4 className="font-display font-semibold text-xl text-white">Vote Party</h4>
              </div>
              <p className="text-slate-400 mb-3">Saat server mencapai 500 vote harian, semua pemain online dapat: <strong className="text-white">2x Vote Key + 1.000 Coins + 2 Heart</strong>.</p>
              <p className="text-sm text-slate-500">Diumumkan di Discord #announcements & broadcast in-game.</p>
            </motion.div>
            <motion.div
              className="card p-5 border-special/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-xl bg-special/15 text-special">
                  <Crown className="w-5 h-5" aria-hidden="true" />
                </div>
                <h4 className="font-display font-semibold text-xl text-white">Top Voter Bulanan</h4>
              </div>
              <p className="text-slate-400 mb-3">Peringkat 1-3 voter terbanyak tiap bulan dapat: <strong className="text-special">Rank Up Sementara + Exclusive Tag + Mystery Crate</strong>.</p>
              <p className="text-sm text-slate-500">Leaderboard reset tiap 1 tanggal. Cek via /vote top.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Server Status */}
      <section className="section relative" aria-labelledby="status-title">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(220,38,38,0.06),transparent_60%)]" aria-hidden="true" />
        <div className="container-main relative max-w-xl">
          <SectionHeading
            eyebrow="STATUS SERVER"
            title="Pastikan Server Online Sebelum Vote"
            centered
          />
          <ServerStatus />
        </div>
      </section>

      {/* Final CTA */}
      <section className="section relative" aria-labelledby="vote-cta-title">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/10" aria-hidden="true" />
        <div className="container-main relative">
          <motion.div
            className="max-w-2xl mx-auto text-center p-8 md:p-12 rounded-3xl bg-dark-900/80 backdrop-blur-md border border-secondary/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
              Siap vote hari ini?
            </h2>
            <p className="text-slate-300 mb-8">
              4 situs, 4 key, 1.800 coins, 1 heart — setiap hari. Butuh <strong className="text-secondary">2 menit</strong> saja.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={VOTE_SITES[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-4 group"
              >
                <VoteIcon className="w-5 h-5" aria-hidden="true" />
                Vote Sekarang (Site 1)
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
              <Link to="/leaderboard" className="btn-outline text-lg px-6 py-3">
                <Crown className="w-5 h-5" aria-hidden="true" />
                Lihat Top Voter
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}