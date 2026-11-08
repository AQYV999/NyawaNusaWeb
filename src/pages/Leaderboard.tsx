'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Crown, Heart, Target, Skull, ArrowRight, Trophy, TrendingUp, Award, User, Hash } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { SITE } from '@/config/site';

// Mock leaderboard data - in production this would come from API
const HEARTS_LEADERBOARD = [
  { rank: 1, username: 'ReaperKing', hearts: 40, kills: 247, deaths: 3, rankTitle: 'LEGEND' },
  { rank: 2, username: 'SoulCollector', hearts: 38, kills: 198, deaths: 7, rankTitle: 'REAPER' },
  { rank: 3, username: 'HeartlessHunter', hearts: 35, kills: 189, deaths: 12, rankTitle: 'HUNTER' },
  { rank: 4, username: 'VoidWalker', hearts: 33, kills: 156, deaths: 8, rankTitle: 'REAPER' },
  { rank: 5, username: 'GrimReaperX', hearts: 32, kills: 143, deaths: 15, rankTitle: 'HUNTER' },
  { rank: 6, username: 'NightStalker', hearts: 30, kills: 134, deaths: 18, rankTitle: 'SURVIVOR' },
  { rank: 7, username: 'BloodMoon', hearts: 28, kills: 127, deaths: 22, rankTitle: 'HUNTER' },
  { rank: 8, username: 'ShadowAssassin', hearts: 27, kills: 119, deaths: 25, rankTitle: 'SURVIVOR' },
  { rank: 9, username: 'DarkSoul', hearts: 25, kills: 108, deaths: 19, rankTitle: 'SURVIVOR' },
  { rank: 10, username: 'PhantomBlade', hearts: 24, kills: 96, deaths: 31, rankTitle: 'SURVIVOR' },
];

const KILLS_LEADERBOARD = [
  { rank: 1, username: 'ReaperKing', kills: 247, kd: '82.3', hearts: 40, rankTitle: 'LEGEND' },
  { rank: 2, username: 'SoulCollector', kills: 198, kd: '28.3', hearts: 38, rankTitle: 'REAPER' },
  { rank: 3, username: 'HeartlessHunter', kills: 189, kd: '15.8', hearts: 35, rankTitle: 'HUNTER' },
  { rank: 4, username: 'VoidWalker', kills: 156, kd: '19.5', hearts: 33, rankTitle: 'REAPER' },
  { rank: 5, username: 'GrimReaperX', kills: 143, kd: '9.5', hearts: 32, rankTitle: 'HUNTER' },
  { rank: 6, username: 'NightStalker', kills: 134, kd: '7.4', hearts: 30, rankTitle: 'SURVIVOR' },
  { rank: 7, username: 'BloodMoon', kills: 127, kd: '5.8', hearts: 28, rankTitle: 'HUNTER' },
  { rank: 8, username: 'ShadowAssassin', kills: 119, kd: '4.8', hearts: 27, rankTitle: 'SURVIVOR' },
  { rank: 9, username: 'DarkSoul', kills: 108, kd: '5.7', hearts: 25, rankTitle: 'SURVIVOR' },
  { rank: 10, username: 'PhantomBlade', kills: 96, kd: '3.1', hearts: 24, rankTitle: 'SURVIVOR' },
];

const VOTES_LEADERBOARD = [
  { rank: 1, username: 'LoyalVoter', votes: 1247, streak: 89, reward: 'Rank HUNTER + Title [VOTE KING]' },
  { rank: 2, username: 'DailyGrinder', votes: 1156, streak: 67, reward: 'Legendary Key x5 + 50k Coins' },
  { rank: 3, username: 'VoteMaster', votes: 987, streak: 45, reward: 'Mystery Key x10 + Custom Tag' },
  { rank: 4, username: 'SupporterOne', votes: 892, streak: 38, reward: 'Vote Key x20 + 20k Coins' },
  { rank: 5, username: 'ConsistentKing', votes: 756, streak: 31, reward: 'Vote Key x15 + 15k Coins' },
];

const BOUNTY_LEADERBOARD = [
  { rank: 1, username: 'BountyHunterPro', collected: 47, totalValue: '2.4M Coins', biggest: '500k Coins' },
  { rank: 2, username: 'HeadCollector', collected: 38, totalValue: '1.8M Coins', biggest: '350k Coins' },
  { rank: 3, username: 'ContractKiller', collected: 32, totalValue: '1.5M Coins', biggest: '400k Coins' },
  { rank: 4, username: 'PriceOnHead', collected: 28, totalValue: '1.2M Coins', biggest: '300k Coins' },
  { rank: 5, username: 'WantedDead', collected: 24, totalValue: '980k Coins', biggest: '250k Coins' },
];

const AUCTION_LEADERBOARD = [
  { rank: 1, username: 'MarketMogul', sales: 156, volume: '5.2M Coins', biggest: '800k Coins' },
  { rank: 2, username: 'TradePrince', sales: 134, volume: '4.1M Coins', biggest: '650k Coins' },
  { rank: 3, username: 'AuctionKing', sales: 112, volume: '3.7M Coins', biggest: '500k Coins' },
  { rank: 4, username: 'FlipMaster', sales: 98, volume: '2.9M Coins', biggest: '420k Coins' },
  { rank: 5, username: 'CoinCollector', sales: 87, volume: '2.3M Coins', biggest: '380k Coins' },
];

type LeaderboardType = 'hearts' | 'kills' | 'votes' | 'bounty' | 'auction';

const LEADERBOARDS: Record<LeaderboardType, { title: string; icon: React.ReactNode; description: string; data: any[]; columns: { key: string; label: string; render: (row: any) => React.ReactNode }[] }> = {
  hearts: {
    title: 'Most Hearts',
    icon: <Heart className="w-5 h-5" />,
    description: 'Pemain dengan jantung terbanyak. Max 40♥ — hanya LEGEND yang bisa capai.',
    data: HEARTS_LEADERBOARD,
    columns: [
      { key: 'rank', label: '#', render: (row) => <span className="font-display font-bold text-lg">{row.rank}</span> },
      { key: 'username', label: 'Pemain', render: (row) => <span className="font-medium">{row.username}</span> },
      { key: 'hearts', label: 'Jantung', render: (row) => <span className="flex items-center gap-1 text-red-400 font-bold"><Heart className="w-4 h-4" /> {row.hearts}♥</span> },
      { key: 'kills', label: 'Kill', render: (row) => <span className="text-slate-400">{row.kills}</span> },
      { key: 'deaths', label: 'Death', render: (row) => <span className="text-red-400">{row.deaths}</span> },
      { key: 'rankTitle', label: 'Rank', render: (row) => <span className="px-2 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary">{row.rankTitle}</span> },
    ],
  },
  kills: {
    title: 'Most Kills',
    icon: <Target className="w-5 h-5" />,
    description: 'Pembunuh paling mematikan. K/D ratio dihitung otomatis.',
    data: KILLS_LEADERBOARD,
    columns: [
      { key: 'rank', label: '#', render: (row) => <span className="font-display font-bold text-lg">{row.rank}</span> },
      { key: 'username', label: 'Pemain', render: (row) => <span className="font-medium">{row.username}</span> },
      { key: 'kills', label: 'Kill', render: (row) => <span className="font-bold text-red-400">{row.kills}</span> },
      { key: 'kd', label: 'K/D', render: (row) => <span className="font-mono text-special">{row.kd}</span> },
      { key: 'hearts', label: 'Jantung', render: (row) => <span className="flex items-center gap-1 text-red-400"><Heart className="w-4 h-4" /> {row.hearts}♥</span> },
      { key: 'rankTitle', label: 'Rank', render: (row) => <span className="px-2 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary">{row.rankTitle}</span> },
    ],
  },
  votes: {
    title: 'Top Voters',
    icon: <Award className="w-5 h-5" />,
    description: 'Pemain paling setia vote server. Reward bulanan untuk Top 3.',
    data: VOTES_LEADERBOARD,
    columns: [
      { key: 'rank', label: '#', render: (row) => <span className="font-display font-bold text-lg">{row.rank}</span> },
      { key: 'username', label: 'Pemain', render: (row) => <span className="font-medium">{row.username}</span> },
      { key: 'votes', label: 'Total Vote', render: (row) => <span className="font-bold text-special">{row.votes}</span> },
      { key: 'streak', label: 'Streak', render: (row) => <span className="flex items-center gap-1 text-green-400"><TrendingUp className="w-4 h-4" /> {row.streak} hari</span> },
      { key: 'reward', label: 'Reward Bulan Ini', render: (row) => <span className="text-slate-400 text-sm max-w-[200px] truncate block">{row.reward}</span> },
    ],
  },
  bounty: {
    title: 'Top Bounty Hunters',
    icon: <Skull className="w-5 h-5" />,
    description: 'Pemburu bounty terbaik. Mengumpulkan kepala target berbayar tinggi.',
    data: BOUNTY_LEADERBOARD,
    columns: [
      { key: 'rank', label: '#', render: (row) => <span className="font-display font-bold text-lg">{row.rank}</span> },
      { key: 'username', label: 'Pemain', render: (row) => <span className="font-medium">{row.username}</span> },
      { key: 'collected', label: 'Bounty Dikumpulkan', render: (row) => <span className="font-bold text-red-400">{row.collected}</span> },
      { key: 'totalValue', label: 'Total Nilai', render: (row) => <span className="text-special font-medium">{row.totalValue}</span> },
      { key: 'biggest', label: 'Terbesar', render: (row) => <span className="text-slate-400">{row.biggest}</span> },
    ],
  },
  auction: {
    title: 'Top Traders',
    icon: <Trophy className="w-5 h-5" />,
    description: 'Pedagang terbaik di Auction House. Volume penjualan tertinggi.',
    data: AUCTION_LEADERBOARD,
    columns: [
      { key: 'rank', label: '#', render: (row) => <span className="font-display font-bold text-lg">{row.rank}</span> },
      { key: 'username', label: 'Pemain', render: (row) => <span className="font-medium">{row.username}</span> },
      { key: 'sales', label: 'Penjualan', render: (row) => <span className="font-bold text-green-400">{row.sales}</span> },
      { key: 'volume', label: 'Total Volume', render: (row) => <span className="text-special font-medium">{row.volume}</span> },
      { key: 'biggest', label: 'Penjualan Terbesar', render: (row) => <span className="text-slate-400">{row.biggest}</span> },
    ],
  },
};

export function Leaderboard() {
  const [activeTab, setActiveTab] = useState<LeaderboardType>('hearts');

  const currentBoard = LEADERBOARDS[activeTab];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden" aria-labelledby="lb-hero-title">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(251,191,36,0.15),transparent_70%)]" aria-hidden="true" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(251,191,36,0.03)_1px,_transparent_1px),_linear-gradient(90deg,_rgba(251,191,36,0.03)_1px,_transparent_1px)] bg-[size:60px_60px]" aria-hidden="true" />
        <div className="container-main relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-special/15 text-special border border-special/30 mb-6 text-sm font-semibold uppercase tracking-wider"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 300 }}
            >
              <Trophy className="w-4 h-4" aria-hidden="true" />
              LEADERBOARD
            </motion.span>
            <h1 id="lb-hero-title" className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white mb-4">
              Papan <span className="text-special shimmer-text">Peringkat</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Siapa yang berani taruh nyawa & menang? Lihat ranking jantung, kill, vote, bounty, & trading.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="relative py-8" aria-label="Leaderboard categories">
        <div className="container-main">
          <div className="flex flex-wrap items-center justify-center gap-2" role="tablist">
            {Object.entries(LEADERBOARDS).map(([key, board], i) => (
              <button
                key={key}
                role="tab"
                aria-selected={activeTab === key}
                aria-controls={`${key}-panel`}
                id={`${key}-tab`}
                onClick={() => setActiveTab(key as LeaderboardType)}
                className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center gap-2 ${
                  activeTab === key
                    ? 'bg-gradient-to-r from-primary to-red-700 text-white shadow-glow-red'
                    : 'bg-dark-800 text-slate-300 hover:text-white hover:bg-dark-700 border border-dark-700'
                }`}
              >
                {board.icon}
                {board.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Leaderboard Table */}
      <section className="section relative" aria-labelledby={`${activeTab}-title`}>
        <div className={`absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(220,38,38,0.06),transparent_60%)] ${activeTab === 'votes' ? 'bg-[radial-gradient(ellipse_at_center,_rgba(251,191,36,0.08),transparent_60%)]' : ''} ${activeTab === 'bounty' ? 'bg-[radial-gradient(ellipse_at_center,_rgba(220,38,38,0.1),transparent_60%)]' : ''} ${activeTab === 'auction' ? 'bg-[radial-gradient(ellipse_at_center,_rgba(34,197,94,0.08),transparent_60%)]' : ''}`} aria-hidden="true" />
        <div className="container-main relative">
          <div id={`${activeTab}-panel`} role="tabpanel" aria-labelledby={`${activeTab}-tab`}>
            <div className="mb-8">
              <h2 id={`${activeTab}-title`} className="font-display font-bold text-2xl sm:text-3xl text-white mb-2 flex items-center gap-3">
                {currentBoard.icon}
                {currentBoard.title}
              </h2>
              <p className="text-slate-400">{currentBoard.description}</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left" role="table">
                <thead>
                  <tr className="border-b border-dark-700 bg-dark-900/50">
                    {currentBoard.columns.map((col, i) => (
                      <th key={col.key} className={`p-4 font-semibold text-white ${i === 0 ? 'w-12' : ''} ${i === 1 ? 'w-48' : ''}`}>{col.label}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {currentBoard.data.map((row, i) => (
                    <motion.tr
                      key={row.rank}
                      className={`border-b border-dark-800/50 ${i % 2 === 0 ? 'bg-dark-900/50' : ''} ${row.rank <= 3 ? 'bg-gradient-to-r from-special/10 via-transparent to-transparent' : ''}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                    >
                      {currentBoard.columns.map((col, ci) => (
                        <td key={col.key} className={`p-4 ${ci === 0 ? 'font-display text-2xl' : ''} ${row.rank <= 3 && ci === 0 ? 'text-special' : ''} ${row.rank === 1 ? 'text-special' : ''} ${row.rank === 2 ? 'text-slate-300' : ''} ${row.rank === 3 ? 'text-amber-600' : ''}`}>
                          {col.render(row)}
                          {ci === 0 && row.rank <= 3 && (
                            <span className="ml-2" aria-hidden="true">
                              {row.rank === 1 && <Crown className="w-5 h-5 inline-block text-special" />}
                              {row.rank === 2 && <Trophy className="w-5 h-5 inline-block text-slate-300" />}
                              {row.rank === 3 && <Award className="w-5 h-5 inline-block text-amber-600" />}
                            </span>
                          )}
                        </td>
                      ))}
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Empty state for when no data */}
            {currentBoard.data.length === 0 && (
              <div className="card text-center py-12">
                <User className="w-16 h-16 mx-auto mb-4 text-slate-600" aria-hidden="true" />
                <h3 className="font-display font-semibold text-xl text-white mb-2">Belum Ada Data</h3>
                <p className="text-slate-400">Leaderboard akan terisi setelah server online & pemain mulai bermain.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Seasonal / Monthly Reset Info */}
      <section className="section relative bg-dark-900/50" aria-labelledby="season-title">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(249,115,22,0.06),transparent_60%)]" aria-hidden="true" />
        <div className="container-main relative max-w-3xl">
          <SectionHeading
            eyebrow="SISTEM SEASON"
            title="Reset Bulanan & Musiman"
            desc="Leaderboard tidak statis. Kompetisi segar setiap bulan dengan reward eksklusif."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'Reset Bulanan', desc: 'Kill, Hearts, Bounty, Auction reset tiap 1 tanggal. Top 3 dapat title permanen + crate.', icon: TrendingUp, color: 'text-primary' },
              { title: 'Seasonal (3 Bulan)', desc: 'Season panjang dengan reward besar: Rank LEGEND sementara, custom particle, cape.', icon: Award, color: 'text-special' },
              { title: 'All-Time Hall of Fame', desc: 'Pencatat rekor sepanjang masa. Nama terukir di spawn & website forever.', icon: Crown, color: 'text-yellow-400' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="card p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20 ${item.color}`}>
                  <item.icon className="w-7 h-7" aria-hidden="true" />
                </div>
                <h4 className="font-display font-semibold text-xl text-white mb-2">{item.title}</h4>
                <p className="text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section relative" aria-labelledby="lb-cta-title">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-special/10" aria-hidden="true" />
        <div className="container-main relative">
          <motion.div
            className="max-w-2xl mx-auto text-center p-8 md:p-12 rounded-3xl bg-dark-900/80 backdrop-blur-md border border-primary/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
              Ingin namamu di sini?
            </h2>
            <p className="text-slate-300 mb-8">
              Main sekarang, kumpulkan jantung, bunuh musuh, vote setiap hari. Leaderboard menunggu.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/store" className="btn-primary text-lg px-8 py-4 group">
                <Heart className="w-5 h-5" aria-hidden="true" />
                Beli Rank & Mulai
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <Link to="/vote" className="btn-outline text-lg px-6 py-3">
                <Award className="w-5 h-5" aria-hidden="true" />
                Vote Harian
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

// Need to import useState
import { useState } from 'react';