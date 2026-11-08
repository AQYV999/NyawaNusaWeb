export type RuleCategory = {
  id: string;
  name: string;
  icon: string;
  color: 'primary' | 'secondary' | 'special';
  rules: Rule[];
};

export type Rule = {
  id: string;
  text: string;
  severity: 'critical' | 'major' | 'minor';
};

export const RULE_CATEGORIES: RuleCategory[] = [
  {
    id: 'general',
    name: 'Umum & Perilaku',
    icon: 'gavel',
    color: 'primary',
    rules: [
      { id: 'g1', text: 'Dilarang keras toxic, harassment, hate speech, atau diskriminasi किसी भी bentuk.', severity: 'critical' },
      { id: 'g2', text: 'Dilarang spam, flood, caps lock berlebihan, atau promosi server lain.', severity: 'major' },
      { id: 'g3', text: 'Nama pengguna/IGN tidak boleh mengandung kata kasar, NSFW, atau meniru staff.', severity: 'major' },
      { id: 'g4', text: 'Respektasi semua pemain. LifeSteal kompetitif, tapi sportmanship wajib.', severity: 'minor' },
      { id: 'g5', text: 'Bahasa utama: Indonesia. English diperbolehkan di channel internasional.', severity: 'minor' },
    ],
  },
  {
    id: 'gameplay',
    name: 'Gameplay & LifeSteal',
    icon: 'heart-crack',
    color: 'primary',
    rules: [
      { id: 'gp1', text: 'DILARANG KERAS combat log (keluar saat combat). CombatLogX akan KILL instan + drop semua item & jantung.', severity: 'critical' },
      { id: 'gp2', text: 'Dilarang exploit bug LifeStealZ (dupe heart, glitch ban, dll). Pelaku: PERMANENT BAN + wipe data.', severity: 'critical' },
      { id: 'gp3', text: 'Dilarang teaming/teaming di event solo atau arena 1v1 yang resmi.', severity: 'major' },
      { id: 'gp4', text: 'Dilarang scam di trade/jual beli jantung & item. Gunakan zAuctionHouse untuk transaksi aman.', severity: 'major' },
      { id: 'gp5', text: 'Dilarang griefing claim pemain lain (bypass claim, TNT, lava cast, dll).', severity: 'major' },
      { id: 'gp6', text: 'AFK farming/jantung farming via alt account = BAN semua akun terlibat.', severity: 'critical' },
      { id: 'gp7', text: 'Bounty hunting diperbolehkan & dianjurkan. Gunakan /bounty dengan bijak.', severity: 'minor' },
    ],
  },
  {
    id: 'technical',
    name: 'Teknis & Client',
    icon: 'monitor',
    color: 'secondary',
    rules: [
      { id: 't1', text: 'Client modifikasi: Hanya OptiFine, Sodium, Iris, & shader yang diperbolehkan.', severity: 'critical' },
      { id: 't2', text: 'DILARANG KERAS: Hack client, cheat, xray, auto-clicker, macro, baritone, impact, meteor, wurst, dll.', severity: 'critical' },
      { id: 't3', text: 'Texture pack xray / resource pack yang menembus blok = BAN PERMANEN.', severity: 'critical' },
      { id: 't4', text: 'VPN/Proxy diperbolehkan untuk koneksi, tapi tidak untuk ban evasion.', severity: 'major' },
      { id: 't5', text: 'Versi client: Java 1.8 - 1.21.4 (ViaVersion/ViaBackwards). Bedrock via Geyser (jika aktif).', severity: 'minor' },
    ],
  },
  {
    id: 'economy',
    name: 'Ekonomi & Transaksi',
    icon: 'coins',
    color: 'special',
    rules: [
      { id: 'e1', text: 'Jual beli jantung/item/hanya via zAuctionHouse atau trade aman (shift+klik).', severity: 'major' },
      { id: 'e2', text: 'Dilarang RMT (Real Money Trading): jual beli jantung, rank, item dengan uang asli.', severity: 'critical' },
      { id: 'e3', text: 'Dilarang chargeback donasi/rank. Akun akan di-ban permanen.', severity: 'critical' },
      { id: 'e4', text: 'Scam trade (swap item palsu, cancel trade terakhir) = BAN + rollback.', severity: 'major' },
      { id: 'e5', text: 'Bounty minimum Rp 1.000. Bounty palsu/troll = warn → mute → ban.', severity: 'minor' },
    ],
  },
  {
    id: 'discord',
    name: 'Discord & Komunitas',
    icon: 'message-circle',
    color: 'secondary',
    rules: [
      { id: 'd1', text: 'Ikuti Discord TOS & Community Guidelines.', severity: 'critical' },
      { id: 'd2', text: 'Channel #general: chat santai. #lifesteal-chat: diskusi gameplay. #support: bantuan teknis.', severity: 'minor' },
      { id: 'd3', text: 'Dilarang ping @everyone/@here tanpa izin staff.', severity: 'major' },
      { id: 'd4', text: 'Voice channel: push-to-talk wajib. No earrape, no mic spam.', severity: 'major' },
      { id: 'd5', text: 'Lapor pemain/bug via #reports atau DM staff. Jangan vigilante.', severity: 'minor' },
    ],
  },
];

export const RULE_SUMMARY = [
  '🔴 **NO COMBAT LOG** — Disconnect saat combat = KILL INSTAN + DROP SEMUA',
  '🔴 **NO CHEAT/HACK** — Xray, auto-click, hack client = BAN PERMANEN',
  '🔴 **NO EXPLOIT** — Dupe heart, glitch ban = BAN + WIPE DATA',
  '🔴 **NO RMT** — Jual beli uang asli = BAN PERMANEN',
  '🟠 **NO SCAM** — Trade aman via zAuctionHouse saja',
  '🟠 **NO GRIEFING** — Claim pemain lain jangan disentuh',
  '🟡 **SPORTMANSHIP** — LifeSteal kompetitif, tapi hormati lawan',
  '🟡 **LAPOR BUG** — Temukan bug? Laporkan ke staff, jangan dieksploit',
];