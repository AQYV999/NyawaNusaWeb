'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, AlertTriangle, Gavel, Heart, Coins, MessageSquare, Hash, CheckCircle, XCircle, Info, ExternalLink, HeartCrack, Monitor, MessageCircle } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { RULE_CATEGORIES, RULE_SUMMARY } from '@/data/rules';
import { SITE } from '@/config/site';

const severityColors: Record<string, string> = {
  critical: 'bg-red-500/20 text-red-400 border-red-500/30',
  major: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  minor: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  info: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
};

const severityLabels: Record<string, string> = {
  critical: 'Critical',
  major: 'Major',
  minor: 'Minor',
  info: 'Info',
};

const severityIcons = {
  critical: <XCircle className="w-4 h-4" />,
  major: <AlertTriangle className="w-4 h-4" />,
  minor: <Info className="w-4 h-4" />,
  info: <Info className="w-4 h-4" />,
};

const iconMap: Record<string, React.ReactNode> = {
  'gavel': <Gavel className="w-6 h-6" />,
  'heart-crack': <HeartCrack className="w-6 h-6" />,
  'monitor': <Monitor className="w-6 h-6" />,
  'coins': <Coins className="w-6 h-6" />,
  'message-circle': <MessageCircle className="w-6 h-6" />,
};

const lifestealIcons = {
  Heart: <HeartCrack className="w-5 h-5" />,
  Shield: <Shield className="w-5 h-5" />,
  Coins: <Coins className="w-5 h-5" />,
  Hash: <Hash className="w-5 h-5" />,
};

export function Rules() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden" aria-labelledby="rules-hero-title">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(220,38,38,0.15),transparent_70%)]" aria-hidden="true" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(220,38,38,0.03)_1px,_transparent_1px),_linear-gradient(90deg,_rgba(220,38,38,0.03)_1px,_transparent_1px)] bg-[size:60px_60px]" aria-hidden="true" />
        <div className="container-main relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 text-primary border border-primary/30 mb-6 text-sm font-semibold uppercase tracking-wider"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 300 }}
            >
              <Gavel className="w-4 h-4" aria-hidden="true" />
              ATURAN SERVER
            </motion.span>
            <h1 id="rules-hero-title" className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white mb-4">
              Aturan <span className="text-primary shimmer-text">NyawaNusa</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Pelanggaran = konsekuensi nyata. Ban, wipe jantung, hingga blacklist permanen. Baca sebelum main.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="section relative" aria-labelledby="summary-title">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,_rgba(220,38,38,0.08),transparent_60%)]" aria-hidden="true" />
        <div className="container-main relative">
          <SectionHeading
            eyebrow="RINGKASAN CEPAT"
            title="Aturan Inti NyawaNusa"
            desc="7 hal yang wajib kamu hafal sebelum join. Pelanggaran = konsekuensi berat."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {RULE_SUMMARY.map((rule, i) => (
              <motion.div
                key={i}
                className="card p-4 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <p className="text-slate-300 text-sm leading-relaxed">{rule}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rule Categories */}
      <section className="section relative bg-dark-900/50" aria-labelledby="categories-title">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(249,115,22,0.06),transparent_60%)]" aria-hidden="true" />
        <div className="container-main relative">
          <SectionHeading
            eyebrow="DAFTAR LENGKAP"
            title="Kategori Aturan"
            desc="Setiap aturan memiliki tingkat keparahan. Critical = ban permanen. Major = ban sementara + wipe. Minor = warning/mute."
            centered
          />
          <div className="space-y-8">
            {RULE_CATEGORIES.map((category, catIndex) => (
              <motion.div
                key={category.id}
                className="card overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              >
                {/* Category Header */}
                <div className="p-6 border-b border-dark-700 bg-dark-900/50">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20 text-primary">
                        {iconMap[category.icon] || <Gavel className="w-6 h-6" />}
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-2xl text-white">{category.name}</h3>
                      </div>
                    </div>
                    <span className="px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-dark-800 border border-dark-700 text-slate-400">
                      {category.rules.length} Aturan
                    </span>
                  </div>
                </div>

                {/* Rules List */}
                <div className="divide-y divide-dark-800">
                  {category.rules.map((rule, ruleIndex) => (
                    <motion.div
                      key={rule.id}
                      className="p-5 hover:bg-dark-900/50 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.3, delay: ruleIndex * 0.02 }}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="flex items-start gap-4 flex-1">
                          <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${severityColors[rule.severity]} border`}>
                            {severityIcons[rule.severity as keyof typeof severityIcons]}
                          </div>
                          <div>
                            <p className="text-slate-300">{rule.text}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 flex-shrink-0">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${severityColors[rule.severity]} border`}>
                            {severityLabels[rule.severity]}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LifeSteal Specific Rules */}
      <section className="section relative" aria-labelledby="lifesteal-rules-title">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(220,38,38,0.1),transparent_60%)]" aria-hidden="true" />
        <div className="container-main relative">
          <SectionHeading
            eyebrow="LIFESTEAL SPECIFIC"
            title="Aturan Khusus LifeSteal"
            desc="Mekanik jantung menciptakan aturan unik. Pelanggaran di sini = konsekuensi paling berat."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { title: 'Heart Farming Dilarang', desc: 'Bunuh alt/team untuk farm jantung = wipe semua jantung + ban 30 hari. Deteksi otomatis via log kill.', icon: 'Heart', severity: 'critical' },
              { title: 'Combat Log = Mati', desc: 'Keluar saat in-combat (10 detik) = insta-kill oleh CombatLogX. Jantung drop ke pembunuh. No exception.', icon: 'Shield', severity: 'critical' },
              { title: 'Bounty Abuse', desc: 'Pasang bounty pada alt/teman untuk claim sendiri = wipe coins + ban bounty system. BetterBounty melacak pattern.', icon: 'Coins', severity: 'major' },
              { title: 'Claim Griefing', desc: 'Claim dekat base orang untuk blokir ekspansi / trap = warning -> unclaim -> ban. Respect jarak 100 blok.', icon: 'Hash', severity: 'minor' },
              { title: 'TP Trap / Kill', desc: 'TPA ke base lalu kill tanpa persetujuan = allowed (ini LifeSteal). Tapi TP ke spawn lalu kill = gray area, jangan abuse.', icon: 'Heart', severity: 'info' },
              { title: 'Heart Drop Scam', desc: 'Drop heart palsu / rename item untuk tipu beli = ban scam. Verifikasi via /heart check sebelum trade.', icon: 'Heart', severity: 'major' },
            ].map((rule, i) => (
              <motion.div
                key={rule.title}
                className={`card p-5 border-l-4 ${rule.severity === 'critical' ? 'border-red-500 bg-red-500/5' : rule.severity === 'major' ? 'border-orange-500 bg-orange-500/5' : rule.severity === 'minor' ? 'border-yellow-500 bg-yellow-500/5' : 'border-blue-500 bg-blue-500/5'}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-primary/15 text-primary flex-shrink-0">
                    {lifestealIcons[rule.icon as keyof typeof lifestealIcons] || <Heart className="w-5 h-5" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="font-semibold text-white">{rule.title}</h4>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider ${severityColors[rule.severity]} border`}>
                        {severityLabels[rule.severity]}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm">{rule.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reporting */}
      <section className="section relative bg-dark-900/50" aria-labelledby="report-title">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(34,197,94,0.08),transparent_60%)]" aria-hidden="true" />
        <div className="container-main relative max-w-3xl">
          <SectionHeading
            eyebrow="LAPOR PELANGGARAN"
            title="Bantu Jaga Server Bersih"
            desc="Laporan dengan bukti (screenshot/video/log) diproses <24 jam. Reporter anonim, identity diamankan."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div
              className="card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="font-display font-semibold text-xl text-white mb-4 flex items-center gap-2">
                <Info className="w-6 h-6 text-primary" aria-hidden="true" />
                Cara Laporkan
              </h4>
              <ol className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3"><span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-sm font-bold flex items-center justify-center">1</span> Ambil bukti: screenshot (F2), recording (OBS/medal), atau log chat.</li>
                <li className="flex items-start gap-3"><span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-sm font-bold flex items-center justify-center">2</span> Buka ticket di Discord #reports dengan format: Username pelaku, waktu, bukti, deskripsi singkat.</li>
                <li className="flex items-start gap-3"><span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-sm font-bold flex items-center justify-center">3</span> Staff review &rarr; keputusan &rarr; notifikasi ke reporter & pelaku.</li>
                <li className="flex items-start gap-3"><span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-sm font-bold flex items-center justify-center">4</span> Apelasi: buka ticket baru dengan alasan & bukti kontra. Hanya 1x apelasi per kasus.</li>
              </ol>
            </motion.div>
            <motion.div
              className="card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="font-display font-semibold text-xl text-white mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6 text-green-400" aria-hidden="true" />
                Yang Dibutuhkan
              </h4>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" /> Username tepat (case-sensitive)</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" /> Timestamp (WIB / UTC)</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" /> Bukti visual tidak diedit/crop penting</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" /> Konteks: apa yang terjadi sebelum/sesudah</li>
                <li className="flex items-center gap-2"><XCircle className="w-5 h-5 text-red-400 flex-shrink-0" /> JANGAN kirim report palsu (ban reporter)</li>
                <li className="flex items-center gap-2"><XCircle className="w-5 h-5 text-red-400 flex-shrink-0" /> JANGAN doxx / share info pribadi</li>
              </ul>
            </motion.div>
          </div>
          <div className="text-center mt-8">
            <a
              href={SITE.discordInvite}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-3 px-8 py-4"
            >
              <ExternalLink className="w-5 h-5" aria-hidden="true" />
              Buka Discord & Buat Ticket Report
            </a>
          </div>
        </div>
      </section>

      {/* Final Warning */}
      <section className="section relative" aria-labelledby="warning-title">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-red-900/10" aria-hidden="true" />
        <div className="container-main relative">
          <motion.div
            className="max-w-3xl mx-auto text-center p-8 md:p-12 rounded-3xl bg-dark-900/80 backdrop-blur-md border border-red-500/30"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 mb-6 text-sm font-semibold uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4" aria-hidden="true" />
              PERINGATAN TERAKHIR
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
              "Tidak tahu" <span className="text-red-400">bukan alasan.</span>
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Aturan ini ada di website, Discord, & /rules in-game. Main di NyawaNusa = kamu sudah membaca & menyetujui semua risiko. Nyawa kamu, tanggung jawab kamu.
            </p>
            <Link to="/store" className="btn-primary inline-flex items-center gap-3 px-8 py-4">
              <Shield className="w-5 h-5" aria-hidden="true" />
              Saya Paham & Siap Main
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
