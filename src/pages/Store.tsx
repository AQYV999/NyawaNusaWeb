'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Crown, Award, Shield, Zap, Gift, Coins, UserCheck, Tag, ArrowRight, Check, X } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { RankCard } from '@/components/RankCard';
import { RANKS } from '@/data/ranks';
import { SITE } from '@/config/site';

const rankComparison = [
  { feature: 'Start Hearts', survivor: '10♥', hunter: '10♥', reaper: '12♥', legend: '15♥', immortal: '20♥' },
  { feature: 'Max Hearts', survivor: '30♥', hunter: '35♥', reaper: '40♥', legend: '40♥', immortal: '40♥' },
  { feature: 'Hearts Per Kill', survivor: '+2♥', hunter: '+2♥', reaper: '+3♥', legend: '+3♥', immortal: '+4♥' },
  { feature: 'Drop Heart on Kill', survivor: '✓', hunter: '✓', reaper: '✓', legend: '✓', immortal: '✓' },
  { feature: 'Claim Blocks', survivor: '100', hunter: '500', reaper: '1.500', legend: '3.000', immortal: 'Unlimited' },
  { feature: 'Homes', survivor: '2', hunter: '4', reaper: '6', legend: '10', immortal: 'Unlimited' },
  { feature: 'Kit Cooldown', survivor: '24h', hunter: '12h', reaper: '6h', legend: '1h', immortal: 'No Cooldown' },
  { feature: 'Nickname', survivor: '✗', hunter: '✗', reaper: '✓', legend: '✓', immortal: '✓' },
  { feature: 'Chat Color', survivor: '✗', hunter: '✓', reaper: '✓', legend: '✓', immortal: '✓' },
  { feature: 'Pet Slot', survivor: '0', hunter: '1', reaper: '2', legend: '3', immortal: '5' },
  { feature: 'Auction Slots', survivor: '1', hunter: '2', reaper: '4', legend: '8', immortal: 'Unlimited' },
  { feature: 'Priority Queue', survivor: '✗', hunter: '✗', reaper: '✓', legend: '✓', immortal: '✓' },
  { feature: 'Death Protection', survivor: '0%', hunter: '10%', reaper: '25%', legend: '50%', immortal: '75%' },
  { feature: 'Custom Tag', survivor: '✗', hunter: '✗', reaper: '✗', legend: '✓', immortal: '✓' },
  { feature: 'Join Message', survivor: '✗', hunter: '✗', reaper: '✗', legend: '✓', immortal: '✓' },
];

export function Store() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden" aria-labelledby="store-hero-title">
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
              <Award className="w-4 h-4" aria-hidden="true" />
              TOKEN STORE
            </motion.span>
            <h1 id="store-hero-title" className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white mb-4">
              Toko <span className="text-special shimmer-text">Rank & Perk</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Pembelian rank mendukung server & membuka kekuatan eksklusif. Tanpa P2W — hanya kenyamanan & progresi.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Rank Cards */}
      <section className="section relative" aria-labelledby="ranks-title">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,_rgba(220,38,38,0.08),transparent_60%)]" aria-hidden="true" />
        <div className="container-main relative">
          <SectionHeading
            eyebrow="PILIH RANKMU"
            title="5 Tingkat Kekuasaan"
            desc="Setiap rank naik = lebih banyak jantung, claim, kit, dan kekebalan. Rank LEGEND = kebebasan total."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {RANKS.map((rank, i) => (
              <RankCard key={rank.id} rank={rank} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section relative bg-dark-900/50" aria-labelledby="comparison-title">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(249,115,22,0.06),transparent_60%)]" aria-hidden="true" />
        <div className="container-main relative">
          <SectionHeading
            eyebrow="PERBANDINGAN LENGKAP"
            title="Detail Setiap Rank"
            desc="Lihat perbedaan spesifik tiap tier. Harga sekali beli, permanen, tidak ada langganan bulanan."
            centered
          />
          <div className="overflow-x-auto">
            <table className="w-full text-left" role="table">
              <thead>
                <tr className="border-b border-dark-700">
                  <th className="p-4 font-semibold text-white sticky left-0 bg-dark-950 z-10">Fitur</th>
                  {RANKS.map(rank => (
                    <th key={rank.id} className="p-4 font-semibold text-center whitespace-nowrap">
                      <div className="flex flex-col items-center gap-1">
                        <span className={`font-display text-lg ${rank.theme.text}`}>{rank.name}</span>
                        {rank.price !== null ? (
                          <span className="text-sm font-medium text-special">{rank.price}</span>
                        ) : (
                          <span className="text-xs font-medium text-green-400">By Invite</span>
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rankComparison.map((row, i) => (
                  <tr key={row.feature} className={`border-b border-dark-800/50 ${i % 2 === 0 ? 'bg-dark-900/50' : ''}`}>
                    <td className="p-4 font-medium text-slate-300 sticky left-0 bg-dark-950 z-10">{row.feature}</td>
                    <td className="p-4 text-center text-slate-400">{row.survivor}</td>
                    <td className="p-4 text-center text-slate-300">{row.hunter}</td>
                    <td className="p-4 text-center text-white">{row.reaper}</td>
                    <td className="p-4 text-center text-special font-semibold">{row.legend}</td>
                    <td className="p-4 text-center text-green-400 font-semibold">{row.immortal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Payment Info */}
      <section className="section relative" aria-labelledby="payment-title">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(220,38,38,0.06),transparent_60%)]" aria-hidden="true" />
        <div className="container-main relative">
          <SectionHeading
            eyebrow="PEMBAYARAN"
            title="Cara Beli & Aktivasi"
            desc="Proses otomatis via Tebex. Rank aktif instan setelah pembayaran sukses."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            <motion.div
              className="card text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/15 text-primary flex items-center justify-center">
                <Heart className="w-7 h-7" aria-hidden="true" />
              </div>
              <h3 className="font-display font-semibold text-xl text-white mb-2">1. Pilih Rank</h3>
              <p className="text-slate-400">Klik rank di atas atau gunakan command <code className="bg-dark-800 px-2 py-1 rounded font-mono text-xs">/store</code> di Discord.</p>
            </motion.div>
            <motion.div
              className="card text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-special/15 text-special flex items-center justify-center">
                <Coins className="w-7 h-7" aria-hidden="true" />
              </div>
              <h3 className="font-display font-semibold text-xl text-white mb-2">2. Bayar via Tebex</h3>
              <p className="text-slate-400">Dukungan: DANA, GoPay, OVO, ShopeePay, Bank Transfer, Virtual Account, QRIS.</p>
            </motion.div>
            <motion.div
              className="card text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-green-500/15 text-green-400 flex items-center justify-center">
                <UserCheck className="w-7 h-7" aria-hidden="true" />
              </div>
              <h3 className="font-display font-semibold text-xl text-white mb-2">3. Aktif Otomatis</h3>
              <p className="text-slate-400">Rank & perk langsung tersedia. Relog jika belum muncul. Kontak staff jika lebih dari 5 menit.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section relative bg-dark-900/50" aria-labelledby="faq-title">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(251,191,36,0.06),transparent_60%)]" aria-hidden="true" />
        <div className="container-main relative max-w-3xl">
          <SectionHeading
            eyebrow="PERTANYAAN UMUM"
            title="FAQ Store"
            centered
          />
          <div className="space-y-3">
            {[
              { q: 'Apakah rank ini P2W (Pay to Win)?', a: 'Tidak. Rank hanya memberi kenyamanan (claim blocks, homes, kit cooldown) dan kosmetik. Semua mekanik LifeSteal (jantung, kill, ban) berlaku sama untuk semua pemain.' },
              { q: 'Bisa upgrade rank nanti?', a: 'Bisa. Hubungi staff di Discord untuk upgrade — hanya bayar selisih harga.' },
              { q: 'Rank berlaku di server mana saja?', a: 'Rank berlaku di seluruh network NyawaNusa (LifeSteal, SMP, dll) selama server masih aktif.' },
              { q: 'Refund bisa?', a: 'Tidak. Semua pembelian final (no refund) sebagaimana Syarat & Ketentuan Tebex & Minecraft EULA.' },
              { q: 'Belum dapat rank setelah bayar?', a: 'Coba relog. Jika >5 menit belum muncul, buat ticket di Discord #support dengan bukti pembayaran.' },
            ].map((faq, i) => (
              <details key={i} className="card group">
                <summary className="flex items-center justify-between p-4 cursor-pointer list-none text-white">
                  <span className="font-medium">{faq.q}</span>
                  <Zap className="w-5 h-5 text-primary transition-transform group-open:rotate-180" aria-hidden="true" />
                </summary>
                <div className="px-4 pb-4 text-slate-400 border-t border-dark-800 animate-in">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section relative" aria-labelledby="store-cta-title">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-special/10" aria-hidden="true" />
        <div className="container-main relative">
          <motion.div
            className="max-w-2xl mx-auto text-center p-8 md:p-12 rounded-3xl bg-dark-900/80 backdrop-blur-md border border-special/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
              Siap naik level?
            </h2>
            <p className="text-slate-300 mb-8">
              Pilih rankmu, bayar aman via Tebex, dan dominasi NyawaNusa hari ini.
            </p>
            <Link to="/store#ranks" className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-3">
              <Award className="w-5 h-5" aria-hidden="true" />
              Lihat Semua Rank
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}