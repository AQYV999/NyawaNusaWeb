/** KONFIGURASI PUSAT NYAWA NUSA — satu-satunya tempat mengubah identitas server.
 * Semua halaman membaca nilai dari file ini; jangan hardcode di komponen. */

export const SITE = {
  name: 'NyawaNusa',
  tagline: 'High-Stakes LifeSteal Server',
  description:
    'Nyawa di taruh, harta di taruh, hanya yang berani yang menang. Server Minecraft LifeSteal dengan ekonomi high-stakes, di mana setiap pertarungan berarti nyawa atau mati.',
  // IP server Aternos — GANTI Dengan IP Aktif dari Aternos Panel
  ip: 'nyawanusa.aternos.me',
  port: 25565,
  edition: 'Java 1.21.4',
  // Bedrock port (jika support crossplay)
  bedrockPort: 19132,
  // Grup Discord resmi — GANTI dengan invite link yang valid
  discordInvite: 'https://discord.gg/nyawanusa',
  // Grup WhatsApp komunitas — GANTI dengan link grup yang valid
  whatsappUrl: 'https://chat.whatsapp.com/xxxxxxxxxxxxxxxx',
  // Nomor admin WhatsApp, format 62xxx tanpa '+' atau spasi
  whatsappNumber: '628123456789',
  supportEmail: 'support@nyawanusa.id',
  footerCopyright: '© 2026 NyawaNusa. Nyawa di taruh, hanya yang berani yang menang.',
} as const;

/** Banner pengumuman global. Set enabled: false untuk mematikan.
 *  Ganti `id` setiap pengumuman baru supaya banner muncul lagi untuk yang sudah menutupnya. */
export const ANNOUNCEMENT: {
  enabled: boolean;
  id: string;
  text: string;
  href?: string;
  label?: string;
} = {
  enabled: true,
  id: 'launch-high-stakes',
  text: '🔴 NyawaNusa HIGH-STAKES LIFESTEAL LAUNCHING SOON — StartHearts: 10 | MaxHearts: 40 | DropHeartOnKill: ON | BanOnElimination: ON',
  href: '/news',
  label: 'Baca Detail',
};

const PLACEHOLDER_WHATSAPP = '628123456789';
const PLACEHOLDER_WHATSAPP_URL = 'https://chat.whatsapp.com/xxxxxxxxxxxxxxxx';

/** False jika nomor WhatsApp masih placeholder/kosong — UI menampilkan state tidak tersedia. */
export const isWhatsAppConfigured = (): boolean => {
  const n = SITE.whatsappNumber.trim();
  return /^\d{9,15}$/.test(n) && n !== PLACEHOLDER_WHATSAPP;
};

/** False jika URL WhatsApp masih placeholder/kosong. */
export const isWhatsAppUrlConfigured = (): boolean => {
  const u = SITE.whatsappUrl.trim();
  return u.startsWith('https://') && u !== PLACEHOLDER_WHATSAPP_URL;
};

/** GANTI DENGAN NILAI ASLI SEBELUM PRODUKSI — WhatsApp Group URL (format: https://chat.whatsapp.com/XXXXXXXXXXXXXX) */
export const REAL_WHATSAPP_URL = 'https://chat.whatsapp.com/REPLACE_WITH_REAL_GROUP_INVITE';

/** GANTI DENGAN NILAI ASLI SEBELUM PRODUKSI — Nomor Admin WhatsApp (format 62xxx tanpa + atau spasi) */
export const REAL_WHATSAPP_NUMBER = '628XXXXXXXXXX';

/** Bangun link Click-to-Chat WhatsApp dengan pesan ter-encode. */
export const whatsappLink = (message: string): string =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;

export type NavItem = {
  readonly name: string;
  readonly href: string;
  readonly group?: string;
};

export const NAVIGATION: readonly NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Store', href: '/store' },
  { name: 'Vote', href: '/vote' },
  { name: 'Leaderboard', href: '/leaderboard' },
  { name: 'Rules', href: '/rules', group: 'more' },
  { name: 'News', href: '/news', group: 'more' },
  { name: 'Staff', href: '/staff', group: 'more' },
  { name: 'Support', href: '/support', group: 'more' },
  { name: 'Wiki', href: '/wiki', group: 'more' },
] as const;