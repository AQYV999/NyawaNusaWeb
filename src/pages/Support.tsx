'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageSquare, Mail, Clock, Shield, Heart, Coins, Bug, BookOpen, ArrowRight, CheckCircle, XCircle, Loader2, ExternalLink, Hash, User, Key, Search } from 'lucide-react';
import { useState } from 'react';
import { SectionHeading } from '@/components/SectionHeading';
import { SITE } from '@/config/site';

const FAQ_DATA = [
  {
    category: 'Umum',
    items: [
      { q: 'IP server apa?', a: `Java: <code className="bg-dark-800 px-2 py-1 rounded font-mono text-special">{SITE.ip}</code> | Bedrock: IP sama, port 19132` },
      { q: 'Versi Minecraft yang didukung?', a: '1.8.x hingga 1.21.4 (ViaVersion + ViaBackwards). Recommended: 1.21.4 untuk fitur terbaru.' },
      { q: 'Server crack/offline mode?', a: 'TIDAK. Hanya premium/online mode (Microsoft/Mojang account). Crack = tidak bisa join.' },
      { q: 'Bisa main dari HP (Bedrock/PE)?', a: 'BISA. Gunakan IP Java & port 19132. Crossplay ViaVersion aktif.' },
      { q: 'Server di hosting apa?', a: 'Aternos (gratis) untuk sekarang. Rencana migrasi ke VPS dedicated jika donasi cukup.' },
    ],
  },
  {
    category: 'LifeSteal & Gameplay',
    items: [
      { q: 'Berapa jantung awal?', a: '10♥ (bukan 20♥ vanilla). Max 40♥.' },
      { q: 'Berapa jantung dapat per kill?', a: '+2♥ per kill resmi (validasi CombatLogX & LifeStealZ).' },
      { q: 'Drop heart item itu apa?', a: 'Item "Heart" drop saat kill pemain. Bisa dikonsumsi (+1♥) atau dijual/transfer ke pemain lain.' },
      { q: 'Jantung habis = apa?', a: 'BAN PERMANEN dari server. Tidak bisa join lagi kecuali appeal diterima (sangat jarang).' },
      { q: 'Combat log konsekuensinya?', a: 'Keluar saat in-combat (10 detik) = insta-kill oleh plugin. Jantung drop ke pembunuh/void.' },
      { q: 'Bisa beli jantung?', a: 'TIDAK. Jantung hanya dari kill, drop heart item, atau event. Rank TIDAK memberi jantung gratis.' },
      { q: 'Claim system pakai plugin apa?', a: 'EssentialsX (basic) + GriefPrevention (jika dipasang). Claim blocks根据 rank.' },
    ],
  },
  {
    category: 'Economy & Rank',
    items: [
      { q: 'Mata uang server apa?', a: 'Coins (EssentialsX economy). Dapat dari kill, vote, auction, bounty, event.' },
      { q: 'Rank P2W tidak?', a: 'TIDAK. Rank hanya kosmetik & kenyamanan (claim, homes, kit cooldown, nickname, chat color, pet, auction slot, priority queue, death protection %). Tidak ada rank yang memberi jantung, item OP, atau kekebalan ban.' },
      { q: 'Cara beli rank?', a: 'Klik "Store" di navbar -> pilih rank -> bayar via Tebex (DANA, GoPay, OVO, ShopeePay, Bank, QRIS). Aktif instan.' },
      { q: 'Bisa upgrade rank?', a: 'BISA. Hubungi staff Discord, bayar selisih harga saja.' },
      { q: 'Refund bisa?', a: 'TIDAK. Semua pembelian final (Tebex ToS & Minecraft EULA).' },
      { q: 'Auction House fee berapa?', a: '5% dari harga jual (zAuctionHouse default). Bisa diubah via config.' },
    ],
  },
  {
    category: 'Technical & Support',
    items: [
      { q: 'Lag/connection timeout?', a: 'Cek status server di homepage. Jika online tapi lag: restart router, pakai kabel LAN, cek ping ke IP server.' },
      { q: 'Tidak bisa join "Failed to connect"?', a: 'Pastikan versi 1.21.4 (atau kompatibel). Cek firewall/antivirus. Coba restart game & launcher.' },
      { q: 'Item hilang / rollback?', a: 'Lapor ke Discord #reports dengan bukti (screenshot log, koordinat, waktu). Staff cek CoreProtect/log.' },
      { q: 'Banned tanpa alasan?', a: 'Semua ban punya alasan (cheat, exploit, toxicity, heart depletion). Appeal via ticket Discord dengan format yang benar.' },
      { q: 'Bug/glitch ditemukan?', a: 'JANGAN eksploitasi. Lapor langsung ke Owner/Head Admin via DM Discord atau ticket prioritas tinggi. Reward untuk bug report valid.' },
      { q: 'Resource pack wajib?', a: 'TIDAK wajib tapi DIREKOMENDASIKAN untuk UI custom (heart display, custom items). Download di Discord #resources.' },
    ],
  },
];

const TICKET_CATEGORIES = [
  { icon: Shield, title: 'Ban Appeal', desc: 'Apelasi ban (cheat, exploit, toxicity, heart depletion). Format wajib di #appeals.', color: 'text-red-400', bg: 'bg-red-500/15' },
  { icon: Bug, title: 'Report Hacker/Cheater', desc: 'Lapor pemain curang (fly, killaura, xray, dll). Sertakan bukti video/log. Prioritas tinggi.', color: 'text-primary', bg: 'bg-primary/15' },
  { icon: Coins, title: 'Donasi / Rank Issue', desc: 'Rank tidak aktif >5 menit, double charge, wrong rank. Sertakan bukti pembayaran (invoice ID).', color: 'text-special', bg: 'bg-special/15' },
  { icon: Heart, title: 'Item Hilang / Rollback', desc: 'Item hilang karena bug, crash, atau grief. Butuh bukti: koordinat, waktu, screenshot inventory.', color: 'text-green-400', bg: 'bg-green-500/15' },
  { icon: BookOpen, title: 'Bug Report / Exploit', desc: 'Lapor bug/glitch/dupe. JANGAN eksploitasi. Reward untuk report valid. Kirim ke Owner DM.', color: 'text-purple-400', bg: 'bg-purple-500/15' },
  { icon: User, title: 'Staff Abuse / Komplain', desc: 'Keluhan soal staff (biasa, tidak netral, abuse command). Anonim, direview Owner.', color: 'text-orange-400', bg: 'bg-orange-500/15' },
];

const TICKET_TEMPLATE = `# TICKET NYAWANUSA

## Kategori
[ ] Ban Appeal
[ ] Report Hacker/Cheater
[ ] Donasi / Rank Issue
[ ] Item Hilang / Rollback
[ ] Bug Report / Exploit
[ ] Staff Abuse / Komplain

## Informasi Pemain
**Username Minecraft:** 
**Discord Username:** 
**Rank (jika ada):** 

## Waktu Kejadian
**Tanggal & Waktu (WIB/UTC):** 
**Timezone:** 

## Deskripsi Masalah
[Jelaskan detail apa yang terjadi, kronologis, apa yang sudah dicoba]

## Bukti (WAJIB untuk report/appeal/item hilang)
- Screenshot: [link imgur/discord attachment]
- Video: [link streamable/youtube/medal]
- Log/Chat: [pastebin/disini]
- Koordinat (jika item hilang): X: Y: Z:

## Checklist Sebelum Submit
- [ ] Sudah baca Rules & FAQ
- [ ] Bukti tidak diedit/crop bagian penting
- [ ] Username & waktu akurat (case-sensitive)
- [ ] Bukan report palsu / spam
- [ ] Siap menunggu sesuai SLA prioritas

---
*Ticket ini akan ditangani sesuai prioritas. Staff akan mention kamu saat ada update.*`;

export function Support() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const filteredFAQ = FAQ_DATA.map(cat => ({
    ...cat,
    items: cat.items.filter(item =>
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter(cat => cat.items.length > 0);

  const toggleExpand = (question: string) => {
    setExpandedItems(prev => {
      const next = new Set(prev);
      if (next.has(question)) next.delete(question);
      else next.add(question);
      return next;
    });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden" aria-labelledby="support-hero-title">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(34,197,94,0.15),transparent_70%)]" aria-hidden="true" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,_transparent_1px),_linear-gradient(90deg,_rgba(34,197,94,0.03)_1px,_transparent_1px)] bg-[size:60px_60px]" aria-hidden="true" />
        <div className="container-main relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/15 text-green-400 border border-green-500/30 mb-6 text-sm font-semibold uppercase tracking-wider"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 300 }}
            >
              <MessageSquare className="w-4 h-4" aria-hidden="true" />
              SUPPORT & BANTUAN
            </motion.span>
            <h1 id="support-hero-title" className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white mb-4">
              Butuh <span className="text-green-400 shimmer-text">Bantuan?</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              FAQ lengkap, cara buat ticket, response time, & kontak darurat. Kami di sini bantuin.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="section relative" aria-labelledby="quick-title">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,_rgba(34,197,94,0.08),transparent_60%)]" aria-hidden="true" />
        <div className="container-main relative">
          <SectionHeading
            eyebrow="AKSI CEPAT"
            title="Pilih Masalahmu"
            desc="Kategori ticket paling umum. Klik untuk buka Discord & buat ticket otomatis dengan template."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {TICKET_CATEGORIES.map((cat, i) => (
              <motion.a
                key={cat.title}
                href={SITE.discordInvite}
                target="_blank"
                rel="noopener noreferrer"
                className="card card-hover p-6 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${cat.bg} ${cat.color} group-hover:scale-110 transition-transform`}>
                    <cat.icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-lg text-white mb-1">{cat.title}</h3>
                    <p className="text-slate-400 text-sm mb-3">{cat.desc}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-green-400 group-hover:gap-3 transition-all">
                      Buka Ticket
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Search */}
      <section className="section relative bg-dark-900/50" aria-labelledby="faq-search-title">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(220,38,38,0.06),transparent_60%)]" aria-hidden="true" />
        <div className="container-main relative max-w-3xl">
          <SectionHeading
            eyebrow="FAQ TERLENGKAP"
            title="Cari Jawaban Cepat"
            desc={`Ketik kata kunci di bawah untuk filter pertanyaan. ${filteredFAQ.reduce((a, c) => a + c.items.length, 0)} pertanyaan tersedia.`}
            centered
          />
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" aria-hidden="true" />
              <input
                type="search"
                placeholder="Cari pertanyaan... (contoh: rank, heart, ban, vote, lag)"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full px-12 py-4 pl-4 pr-4 rounded-xl bg-dark-800 border border-dark-700 text-white placeholder-slate-500 focus:border-primary/50 focus:bg-dark-900 focus:outline-none transition-all"
                aria-label="Cari FAQ"
              />
            </div>
          </motion.div>

          {/* FAQ Accordions */}
          <div className="space-y-3">
            {filteredFAQ.map((cat, catIndex) => (
              <motion.div
                key={cat.category}
                className="card overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: catIndex * 0.05 }}
              >
                <div className="px-5 py-4 bg-dark-900/50 border-b border-dark-700">
                  <h3 className="font-display font-semibold text-lg text-white flex items-center gap-2">
                    <Hash className="w-5 h-5 text-primary" aria-hidden="true" />
                    {cat.category} ({cat.items.length})
                  </h3>
                </div>
                <div className="divide-y divide-dark-800">
                  {cat.items.map((item, itemIndex) => {
                    const isOpen = expandedItems.has(item.q);
                    return (
                      <details key={item.q} className="group" open={isOpen}>
                        <summary className="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-dark-900/50 transition-colors">
                          <div className="flex items-center gap-3 flex-1 pr-4">
                            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${isOpen ? 'bg-green-500/20 text-green-400' : 'bg-dark-800 text-slate-500'}`}>
                              {isOpen ? <CheckCircle className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                            </span>
                            <span className="font-medium text-white">{item.q}</span>
                          </div>
                          <span className={`transition-transform ${isOpen ? 'rotate-180' : ''} text-slate-500`}>
                            <Key className="w-5 h-5" aria-hidden="true" />
                          </span>
                        </summary>
                        <div className="px-5 pb-5 text-slate-300 animate-in">
                          <div dangerouslySetInnerHTML={{ __html: item.a }} />
                        </div>
                      </details>
                    );
                  })}
                </div>
              </motion.div>
            ))}
            {filteredFAQ.length === 0 && (
              <motion.div className="card text-center py-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <Search className="w-16 h-16 mx-auto mb-4 text-slate-600" aria-hidden="true" />
                <h3 className="font-display font-semibold text-xl text-white mb-2">Tidak Ditemukan</h3>
                <p className="text-slate-400">Coba kata kunci lain atau buat ticket di Discord.</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Response Time / SLA */}
      <section className="section relative" aria-labelledby="sla-title">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(249,115,22,0.06),transparent_60%)]" aria-hidden="true" />
        <div className="container-main relative max-w-3xl">
          <SectionHeading
            eyebrow="SLA & WAKTU RESPON"
            title="Kapan Kamu Dijawab?"
            desc="Tim support sukarela tapi komitmen. Waktu di bawah adalah estimasi maksimal (biasanya lebih cepat)."
            centered
          />
          <div className="space-y-3">
            {[
              { priority: 'KRITIS', desc: 'Ban appeal, hacker aktif, exploit berjalan, donasi error', time: '< 1 jam', icon: Shield, color: 'text-red-400', bg: 'bg-red-500/15 border-red-500/30' },
              { priority: 'TINGGI', desc: 'Item hilang (bukti lengkap), rank tidak aktif, bug gameplay', time: '< 6 jam', icon: Bug, color: 'text-primary', bg: 'bg-primary/15 border-primary/30' },
              { priority: 'SEDANG', desc: 'Report player (non-cheat), pertanyaan gameplay, saran fitur', time: '< 24 jam', icon: MessageSquare, color: 'text-special', bg: 'bg-special/15 border-special/30' },
              { priority: 'RENDAH', desc: 'Feedback website, partnership, rekrutmen staff, keluhan non-urgent', time: '< 48 jam', icon: Mail, color: 'text-slate-400', bg: 'bg-slate-700/15 border-slate-700/30' },
            ].map((sla, i) => (
              <motion.div
                key={sla.priority}
                className={`card p-5 border-l-4 ${sla.bg}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${sla.bg.replace('border-', 'border-')} ${sla.color}`}>
                      <sla.icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`font-display font-bold text-lg ${sla.color}`}>{sla.priority}</span>
                        <span className="px-2 py-0.5 rounded-full text-xs font-mono bg-dark-800 border border-dark-700 text-green-400">{sla.time}</span>
                      </div>
                      <p className="text-slate-400 text-sm">{sla.desc}</p>
                    </div>
                  </div>
                  <Clock className="w-6 h-6 text-slate-500" aria-hidden="true" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ticket Template */}
      <section className="section relative bg-dark-900/50" aria-labelledby="template-title">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(251,191,36,0.08),transparent_60%)]" aria-hidden="true" />
        <div className="container-main relative max-w-3xl">
          <SectionHeading
            eyebrow="TEMPLATE TICKET"
            title="Format Wajib Buat Ticket"
            desc="Copy template di bawah, isi lengkap, paste di Discord #reports. Ticket tanpa template = ditutup tanpa jawaban."
            centered
          />
          <div className="card p-6 bg-dark-950 border-dark-700">
            <div className="flex items-center justify-between mb-4">
              <span className="font-medium text-slate-300">Format Markdown (copy raw)</span>
              <button className="btn-outline text-sm px-4 py-2" onClick={() => navigator.clipboard.writeText(TICKET_TEMPLATE)}>
                <Key className="w-4 h-4" aria-hidden="true" />
                Salin
              </button>
            </div>
            <pre className="bg-dark-900 p-4 rounded-xl overflow-x-auto text-sm text-slate-300 font-mono whitespace-pre-wrap"><code>{TICKET_TEMPLATE}</code></pre>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section relative" aria-labelledby="contact-title">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-primary/10" aria-hidden="true" />
        <div className="container-main relative">
          <motion.div
            className="max-w-2xl mx-auto text-center p-8 md:p-12 rounded-3xl bg-dark-900/80 backdrop-blur-md border border-green-500/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
              Masih butuh bantuan?
            </h2>
            <p className="text-slate-300 mb-8">
              Buka ticket di Discord untuk response tercepat. Email hanya untuk urusan formal/legal.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={SITE.discordInvite}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-3 px-8 py-4"
              >
                <MessageSquare className="w-5 h-5" aria-hidden="true" />
                Buka Discord & Buat Ticket
              </a>
              <a
                href={`mailto:${SITE.supportEmail}`}
                className="btn-outline inline-flex items-center gap-3 px-8 py-4"
              >
                <Mail className="w-5 h-5" aria-hidden="true" />
                Email: {SITE.supportEmail}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
