/** KONFIGURASI PUSAT NYAWA NUSA — satu-satunya tempat mengubah identitas server.
 * Semua halaman membaca nilai dari file ini; jangan hardcode di komponen. */

export const SITE = {
  name: 'NyawaNusa',
  tagline: 'High-Stakes LifeSteal Server',
  description:
    'Nyawa di taruh, harta di taruh, hanya yang berani yang menang. Server Minecraft LifeSteal dengan ekonomi high-stakes, di mana setiap pertarungan berarti nyawa atau mati.',
  // PLACEHOLDER — ganti dengan alamat server yang sebenarnya (Aternos IP)
  ip: 'nyawanusa.aternos.me',
  edition: 'Java 1.21.4',
  // PLACEHOLDER — ganti dengan port Bedrock jika support crossplay
  bedrockPort: 19132,
  // PLACEHOLDER — ganti dengan undangan Discord yang sebenarnya
  discordInvite: 'https://discord.gg/nyawanusa',
  // PLACEHOLDER — ganti dengan grup WhatsApp komunitas
  whatsappUrl: 'https://chat.whatsapp.com/xxxxxxxxxxxxxxxx',
  // PLACEHOLDER — ganti dengan nomor admin, format 62xxx tanpa '+' atau spasi
  whatsappNumber: '628xxxxxxxxxx',
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