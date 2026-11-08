'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Heart, Target, Shield, Coins, Skull, Crown, Zap, ArrowRight, ExternalLink, Search, ChevronDown, Hash, Key, Sword, Gem, Home, Users, Settings } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { SITE } from '@/config/site';

const WIKI_CATEGORIES = [
  {
    id: 'getting-started',
    title: 'Memulai',
    icon: Home,
    color: 'text-green-400',
    bg: 'bg-green-500/15',
    articles: [
      { id: 'how-to-join', title: 'Cara Join Server', desc: 'Step-by-step join Java & Bedrock, versi didukung, resource pack optional.' },
      { id: 'first-steps', title: 'Langkah Pertama', desc: 'Spawn, /kit starter, claim land pertama, dapatkan food & tools basic.' },
      { id: 'commands', title: 'Command Dasar', desc: '/home, /spawn, /tpa, /rtp, /kit, /vote, /shop, /ah, /bounty, /heart.' },
      { id: 'rules-summary', title: 'Ringkasan Rules', desc: 'Quick reference aturan kritis: no cheat, no heart farm, no combat log, no toxicity.' },
    ],
  },
  {
    id: 'lifesteal-mechanics',
    title: 'Mekanik LifeSteal',
    icon: Heart,
    color: 'text-red-400',
    bg: 'bg-red-500/15',
    articles: [
      { id: 'hearts-system', title: 'Sistem Jantung', desc: 'Start 10♥, max 40♥, +2♥/kill, drop heart item, ban at 0♥. Detail perhitungan.' },
      { id: 'heart-items', title: 'Heart Item & Konsumsi', desc: 'Cara dapat heart item (kill drop, event, vote), cara konsumsi (+1♥), transfer ke pemain lain.' },
      { id: 'combat-log', title: 'CombatLogX & Timer', desc: '10 detik in-combat, keluar = insta-kill, jantung drop ke killer/void. Cara avoid.' },
      { id: 'elimination', title: 'Eliminasi & Ban', desc: '0♥ = ban permanen. Appeal process, bukti yang dibutuhkan, peluang diterima.' },
    ],
  },
  {
    id: 'combat-pvp',
    title: 'Combat & PvP',
    icon: Sword,
    color: 'text-primary',
    bg: 'bg-primary/15',
    articles: [
      { id: 'pvp-tips', title: 'Tips PvP LifeSteal', desc: 'Strafing, block hitting, rod combo, bow usage, gapple management, heart management.' },
      { id: 'weapons-armor', title: 'Senjata & Armor Meta', desc: 'Netherite vs Diamond, enchant priority (Sharp V, Prot IV, Unbreaking III, Mending).' },
      { id: 'potions', title: 'Potion & Consumable', desc: 'Strength II, Speed II, Fire Res, Regen, Gapple, Crystal. Kapan pakai mana.' },
      { id: 'traps-ambush', title: 'Trap & Ambush', desc: 'Claim trap, lava trap, piston trap, ender crystal trap. Legal vs illegal.' },
    ],
  },
  {
    id: 'economy-trading',
    title: 'Economy & Trading',
    icon: Coins,
    color: 'text-special',
    bg: 'bg-special/15',
    articles: [
      { id: 'coins-guide', title: 'Panduan Coins', desc: 'Cara dapat coins (kill, vote, auction, bounty, event), cara simpan aman (/balance).' },
      { id: 'auction-house', title: 'Auction House (zAuctionHouse)', desc: 'GUI based, fee 5%, search filter, expired item claim, price check tips.' },
      { id: 'bounty-system', title: 'Bounty System (BetterBounty)', desc: 'Pasang bounty, claim bounty, anonymous vs public, fee, cooldown, strategy.' },
      { id: 'trading-safety', title: 'Trading Aman & Anti-Scam', desc: '/trade, drop trade risk, middleman service, verifikasi heart item, screenshot bukti.' },
    ],
  },
  {
    id: 'claims-protection',
    title: 'Claims & Proteksi',
    icon: Shield,
    color: 'text-blue-400',
    bg: 'bg-blue-500/15',
    articles: [
      { id: 'claim-basics', title: 'Claim Dasar (EssentialsX/GriefPrevention)', desc: 'Golden shovel claim, resize, trust/untrust, subdivide, claim blocks per rank.' },
      { id: 'base-design', title: 'Desain Base Anti-Raid', desc: 'Obfuscation, hidden entrance, water/lava moat, obsidian vault, redstone defense.' },
      { id: 'claim-rules', title: 'Aturan Claim', desc: 'Jarak minimal 100 blok, claim griefing dilarang, inactive claim removal (30 hari).' },
    ],
  },
  {
    id: 'ranks-progression',
    title: 'Rank & Progresi',
    icon: Crown,
    color: 'text-purple-400',
    bg: 'bg-purple-500/15',
    articles: [
      { id: 'rank-comparison', title: 'Perbandingan Rank Detail', desc: 'Table lengkap 5 tier: Survivor → Hunter → Reaper → Legend → Immortal.' },
      { id: 'rank-perks', title: 'Perk Per Rank', desc: 'Claim blocks, homes, kit cooldown, nickname, chat color, pet, auction slot, priority queue, death protection, custom tag, join message.' },
      { id: 'upgrade-guide', title: 'Cara Upgrade Rank', desc: 'Bayar selisih via Tebex, kontak staff, aktivasi instan, perk lama tetap atau diganti.' },
    ],
  },
  {
    id: 'events-seasons',
    title: 'Event & Season',
    icon: Zap,
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/15',
    articles: [
      { id: 'vote-party', title: 'Vote Party', desc: 'Trigger 500 vote/hari, reward: 2x Vote Key + 1k Coins + 2♥. Jadwal & notifikasi.' },
      { id: 'seasonal-events', title: 'Event Musiman', desc: 'Halloween, Christmas, Anniversary. Custom drop, boss fight, limited crate, leaderboard.' },
      { id: 'season-system', title: 'Sistem Season (3 Bulan)', desc: 'Leaderboard reset, reward Top 3 (rank sementara, title, particle, cape), Hall of Fame.' },
    ],
  },
  {
    id: 'technical',
    title: 'Teknis & Troubleshooting',
    icon: Settings,
    color: 'text-slate-400',
    bg: 'bg-slate-700/15',
    articles: [
      { id: 'lag-fixes', title: 'Mengatasi Lag & FPS Drop', desc: 'Optifine, Sodium, settings video, allocate RAM, JVM args, connection tips.' },
      { id: 'connection-issues', title: 'Gagal Connect / Timeout', desc: 'Versi mismatch, firewall, VPN, DNS, Aternos queue, restart launcher.' },
      { id: 'resource-pack', title: 'Resource Pack Custom', desc: 'Download, install, heart display UI, custom item texture, enable/disable.' },
      { id: 'bug-reporting', title: 'Cara Report Bug Benar', desc: 'Format, bukti, prioritas, reward untuk bug valid, jangan eksploitasi.' },
    ],
  },
];

const TICKET_TEMPLATE = `# TICKET NYAWANUSA
...
`;

export function Wiki() {
  const [openCategory, setOpenCategory] = useState<string | null>('getting-started');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = WIKI_CATEGORIES.map(cat => ({
    ...cat,
    articles: cat.articles.filter(a =>
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.desc.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter(cat => cat.articles.length > 0);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden" aria-labelledby="wiki-hero-title">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(139,92,246,0.15),transparent_70%)]" aria-hidden="true" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,_transparent_1px),_linear-gradient(90deg,_rgba(139,92,246,0.03)_1px,_transparent_1px)] bg-[size:60px_60px]" aria-hidden="true" />
        <div className="container-main relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/15 text-purple-400 border border-purple-500/30 mb-6 text-sm font-semibold uppercase tracking-wider"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 300 }}
            >
              <BookOpen className="w-4 h-4" aria-hidden="true" />
              WIKI & PANDUAN
            </motion.span>
            <h1 id="wiki-hero-title" className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white mb-4">
              Wiki <span className="text-purple-400 shimmer-text">NyawaNusa</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Semua yang perlu kamu tahu: mekanik LifeSteal, PvP, economy, claim, rank, event, & troubleshooting.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search */}
      <section className="relative py-8" aria-label="Wiki search">
        <div className="container-main max-w-3xl">
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" aria-hidden="true" />
            <input
              type="search"
              placeholder="Cari artikel... (contoh: heart, claim, bounty, rank, lag)"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full px-12 py-4 pl-4 pr-4 rounded-xl bg-dark-800 border border-dark-700 text-white placeholder-slate-500 focus:border-purple-500/50 focus:bg-dark-900 focus:outline-none transition-all"
              aria-label="Cari Wiki"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-lg text-slate-500 hover:text-white hover:bg-dark-700 transition-colors"
                aria-label="Hapus pencarian"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            )}
          </motion.div>
        </div>
      </section>

      {/* Wiki Categories */}
      <section className="section relative" aria-labelledby="wiki-cats-title">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,_rgba(139,92,246,0.08),transparent_60%)]" aria-hidden="true" />
        <div className="container-main relative">
          <div className="max-w-5xl mx-auto">
            {filteredCategories.map((cat, catIndex) => (
              <motion.div
                key={cat.id}
                className="card overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: catIndex * 0.05 }}
              >
                <button
                  onClick={() => setOpenCategory(openCategory === cat.id ? null : cat.id)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left bg-dark-900/50 border-b border-dark-700 hover:bg-dark-900 transition-colors"
                  aria-expanded={openCategory === cat.id}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${cat.bg} ${cat.color}`}>
                      <cat.icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-xl text-white">{cat.title}</h3>
                      <p className="text-slate-400 text-sm">{cat.articles.length} artikel</p>
                    </div>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${openCategory === cat.id ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>

                <AnimatePresence>
                  {openCategory === cat.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 divide-y divide-dark-800">
                        {cat.articles.map((article, artIndex) => (
                          <Link
                            key={article.id}
                            to={`/wiki/${article.id}`}
                            className="block py-4 hover:bg-dark-900/50 rounded-xl transition-colors group"
                          >
                            <div className="flex items-center justify-between gap-4">
                              <div className="flex items-center gap-3 flex-1">
                                <span className="w-8 h-8 rounded-lg bg-dark-800 border border-dark-700 flex items-center justify-center text-slate-500 group-hover:text-purple-400 group-hover:border-purple-500/50 transition-all">
                                  <BookOpen className="w-4 h-4" aria-hidden="true" />
                                </span>
                                <div>
                                  <h4 className="font-medium text-white group-hover:text-purple-400 transition-colors">{article.title}</h4>
                                  <p className="text-slate-500 text-sm">{article.desc}</p>
                                </div>
                              </div>
                              <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" aria-hidden="true" />
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}

            {filteredCategories.length === 0 && (
              <motion.div className="card text-center py-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <Search className="w-16 h-16 mx-auto mb-4 text-slate-600" aria-hidden="true" />
                <h3 className="font-display font-semibold text-xl text-white mb-2">Artikel Tidak Ditemukan</h3>
                <p className="text-slate-400">Coba kata kunci lain atau hubungi staff untuk request artikel baru.</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section relative bg-dark-900/50" aria-labelledby="quick-title">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(220,38,38,0.06),transparent_60%)]" aria-hidden="true" />
        <div className="container-main relative max-w-3xl">
          <SectionHeading
            eyebrow="LINK CEPAT"
            title="Halaman Paling Sering Dibuka"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { title: 'Sistem Jantung', href: '/wiki/hearts-system', icon: Heart, color: 'text-red-400' },
              { title: 'Claim & Base', href: '/wiki/claim-basics', icon: Shield, color: 'text-blue-400' },
              { title: 'Auction House', href: '/wiki/auction-house', icon: Coins, color: 'text-special' },
              { title: 'Bounty System', href: '/wiki/bounty-system', icon: Skull, color: 'text-purple-400' },
              { title: 'Rank Comparison', href: '/wiki/rank-comparison', icon: Crown, color: 'text-yellow-400' },
              { title: 'PvP Tips', href: '/wiki/pvp-tips', icon: Sword, color: 'text-primary' },
              { title: 'Vote & Reward', href: '/vote', icon: Gem, color: 'text-green-400' },
              { title: 'Rules Lengkap', href: '/rules', icon: Hash, color: 'text-slate-400' },
            ].map((link, i) => (
              <Link
                key={link.title}
                to={link.href}
                className="card p-4 text-center group"
              >
                <div className={`w-10 h-10 mx-auto mb-3 rounded-xl flex items-center justify-center bg-primary/15 ${link.color} group-hover:scale-110 transition-transform`}>
                  <link.icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <h4 className="font-medium text-white group-hover:text-primary transition-colors">{link.title}</h4>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contribute */}
      <section className="section relative" aria-labelledby="contribute-title">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-primary/10" aria-hidden="true" />
        <div className="container-main relative">
          <motion.div
            className="max-w-2xl mx-auto text-center p-8 md:p-12 rounded-3xl bg-dark-900/80 backdrop-blur-md border border-purple-500/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
              Mau kontribusi Wiki?
            </h2>
            <p className="text-slate-300 mb-8">
              Wiki ini community-driven. Kalau nemu info salah, kurang, atau mau nambah artikel baru — buat ticket di Discord #📋・wiki-contribute. Kontributor aktif dapat tag [WIKI EDITOR] di Discord.
            </p>
            <a
              href={SITE.discordInvite}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-3 px-8 py-4"
            >
              <Users className="w-5 h-5" aria-hidden="true" />
              Kontribusi di Discord
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';