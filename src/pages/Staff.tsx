'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Crown, Shield, Code, Heart, Mail, MessageSquare, MessageCircle, User, CheckCircle, Clock } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { STAFF } from '@/data/staff';
import { SITE } from '@/config/site';

const roleColors: Record<string, string> = {
  Owner: 'bg-gradient-to-r from-special to-yellow-600 text-white',
  'Head Admin': 'bg-gradient-to-r from-primary to-red-700 text-white',
  Moderator: 'bg-gradient-to-r from-secondary to-orange-600 text-white',
  Developer: 'bg-gradient-to-r from-purple-600 to-blue-600 text-white',
};

const roleIcons: Record<string, React.ReactNode> = {
  Owner: <Crown className="w-4 h-4" />,
  'Head Admin': <Shield className="w-4 h-4" />,
  Moderator: <Heart className="w-4 h-4" />,
  Developer: <Code className="w-4 h-4" />,
};

export function Staff() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden" aria-labelledby="staff-hero-title">
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
              <Crown className="w-4 h-4" aria-hidden="true" />
              TIM NYAWANUSA
            </motion.span>
            <h1 id="staff-hero-title" className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white mb-4">
              Tim <span className="text-special shimmer-text">Pengelola</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Orang-orang di balik server. Owner, Admin, Mod, & Dev yang menjaga NyawaNusa tetap adil, stabil, & adiktif.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Staff Grid */}
      <section className="section relative" aria-labelledby="staff-grid-title">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,_rgba(220,38,38,0.08),transparent_60%)]" aria-hidden="true" />
        <div className="container-main relative">
          <SectionHeading
            eyebrow="KEPALA TIM"
            title="Staff Inti"
            desc="Mereka yang punya akses penuh & tanggung jawab terbesar. Bisa dihubungi via Discord untuk urusan kritis."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {STAFF.map((member, i) => (
              <motion.div
                key={member.id}
                className="card card-hover relative overflow-hidden group p-6 text-center"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
                <div className="relative">
                  {/* Avatar */}
                  <div className="w-28 h-28 mx-auto mb-4 relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-dark-700 group-hover:border-primary/50 transition-colors">
                      {member.avatar ? (
                        <img src={member.avatar} alt="" className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-dark-800 to-dark-900 flex items-center justify-center">
                          <User className="w-12 h-12 text-slate-600" aria-hidden="true" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Name & Role */}
                  <h3 className="font-display font-bold text-xl text-white mb-1">{member.name}</h3>
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${roleColors[member.role] || 'bg-gradient-to-r from-slate-600 to-slate-700 text-white'}`}>
                    {roleIcons[member.role] || <User className="w-3 h-3" />}
                    {member.role}
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 text-sm mt-3 mb-4 line-clamp-2">{member.description}</p>

                  {/* Social Links */}
                  <div className="flex items-center justify-center gap-3 pt-4 border-t border-dark-800">
                    {member.social?.discord && (
                      <a href={member.social.discord} target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-dark-800 border border-dark-700 text-slate-400 hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all" aria-label={`${member.name} Discord`}>
                        <MessageSquare className="w-4 h-4" aria-hidden="true" />
                      </a>
                    )}
                    {member.social?.twitter && (
                      <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-dark-800 border border-dark-700 text-slate-400 hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all" aria-label={`${member.name} Twitter`}>
                        <MessageCircle className="w-4 h-4" aria-hidden="true" />
                      </a>
                    )}
                    {member.social?.github && (
                      <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-dark-800 border border-dark-700 text-slate-400 hover:text-white hover:border-white/50 hover:bg-white/10 transition-all" aria-label={`${member.name} GitHub`}>
                        <MessageCircle className="w-4 h-4" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff Responsibilities */}
      <section className="section relative bg-dark-900/50" aria-labelledby="responsibilities-title">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(249,115,22,0.06),transparent_60%)]" aria-hidden="true" />
        <div className="container-main relative">
          <SectionHeading
            eyebrow="TANGGUNG JAWAB"
            title="Apa yang Dilakukan Staff"
            desc="Setiap role punya fokus khusus. Semua staff bersifat sukarela & dipilih berdasarkan dedikasi & track record."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: Crown, title: 'Owner', desc: 'Keputusan final, keuangan, visi server, partnership, recruitment Head Admin.', color: 'text-special', bg: 'bg-special/15', items: ['Visi & strategi', 'Keuangan & legal', 'Partnership', 'Final appeal'] },
              { icon: Shield, title: 'Head Admin', desc: 'Operasional harian, manajemen moderator, aturan, event, ban appeal review.', color: 'text-primary', bg: 'bg-primary/15', items: ['Manajemen staff', 'Rule enforcement', 'Event planning', 'Ban appeal review'] },
              { icon: Heart, title: 'Moderator', desc: 'In-game moderation, ticket support, chat monitoring, cheat detection, player help.', color: 'text-secondary', bg: 'bg-secondary/15', items: ['In-game mod', 'Ticket support', 'Chat monitor', 'Anti-cheat assist'] },
              { icon: Code, title: 'Developer', desc: 'Plugin custom, website, database, anti-cheat config, performance optimization.', color: 'text-purple-400', bg: 'bg-purple-500/15', items: ['Plugin dev', 'Web dev', 'Database', 'Performance'] },
            ].map((role, i) => (
              <motion.div
                key={role.title}
                className="card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${role.bg} ${role.color}`}>
                  <role.icon className="w-7 h-7" aria-hidden="true" />
                </div>
                <h3 className="font-display font-semibold text-xl text-white mb-2">{role.title}</h3>
                <p className="text-slate-400 mb-4">{role.desc}</p>
                <ul className="space-y-2">
                  {role.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-slate-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment */}
      <section className="section relative" aria-labelledby="recruit-title">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(220,38,38,0.06),transparent_60%)]" aria-hidden="true" />
        <div className="container-main relative max-w-3xl">
          <SectionHeading
            eyebrow="REKRUTMEN"
            title="Mau Jadi Staff?"
            desc="Kami buka rekrutmen berkala. Cek Discord #📋・recruitment untuk info terbuka. Syarat: aktif, jujur, paham rules, & punya track record baik."
            centered
          />
          <div className="card p-6 md:p-8 text-center">
            <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
              <span className="px-3 py-1.5 rounded-full text-sm font-medium bg-primary/20 text-primary border border-primary/30">Syarat Minimum</span>
              <span className="px-3 py-1.5 rounded-full text-sm font-medium bg-special/20 text-special border border-special/30">Buka Periodik</span>
            </div>
            <ul className="space-y-3 text-left max-w-md mx-auto text-slate-300">
              {[
                'Minimal 2 minggu aktif di server & Discord',
                'Paham semua rules & mekanik LifeSteal',
                'Track record bersih (no ban/mute/warn)',
                'Bisa berkomunikasi bahasa Indonesia & Inggris dasar',
                'Memiliki microphone untuk koordinasi voice (Mod+)',
                'Portfolio/bukti kontribusi (untuk Developer)',
              ].map((req, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  {req}
                </li>
              ))}
            </ul>
            <a
              href={SITE.discordInvite}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8 inline-flex items-center gap-3 px-8 py-4"
            >
              <MessageSquare className="w-5 h-5" aria-hidden="true" />
              Cek Rekrutmen di Discord
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section relative bg-dark-900/50" aria-labelledby="contact-title">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(251,191,36,0.08),transparent_60%)]" aria-hidden="true" />
        <div className="container-main relative max-w-3xl">
          <SectionHeading
            eyebrow="HUBUNGI KAMI"
            title="Butuh Bantuan Langsung?"
            desc="Untuk urusan pribadi/urgent (ban appeal, donasi, partnership), hubungi Owner via Discord. Untuk support umum: buat ticket di Discord."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: MessageSquare, title: 'Discord Ticket', desc: 'Cara paling cepat untuk support, report, & appeal. Staff online 24/7 bergiliran.', action: 'Buka Ticket', href: SITE.discordInvite, color: 'text-primary' },
              { icon: Mail, title: 'Email Resmi', desc: 'Untuk partnership bisnis, legal, & urusan formal. Balasan 1-2 hari kerja.', action: 'Kirim Email', href: `mailto:${SITE.supportEmail}`, color: 'text-special' },
              { icon: Clock, title: 'Response Time', desc: 'Ticket kritis (ban appeal, hacker): <1 jam. Ticket umum: <6 jam. Email: 24-48 jam.', action: 'Lihat SLA', href: '/support', color: 'text-green-400' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="card p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center bg-primary/15 ${item.color}`}>
                  <item.icon className="w-7 h-7" aria-hidden="true" />
                </div>
                <h4 className="font-display font-semibold text-xl text-white mb-2">{item.title}</h4>
                <p className="text-slate-400 mb-4">{item.desc}</p>
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="btn-outline">
                  {item.action}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}