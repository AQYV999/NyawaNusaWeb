export type Feature = {
  id: string;
  icon: string;
  title: string;
  description: string;
  highlight?: string;
};

export const LIFESTEAL_FEATURES: Feature[] = [
  {
    id: 'start-hearts',
    icon: 'heart',
    title: 'Start Hearts: 10',
    description: 'Spawn dengan setengah nyawa normal. Setiap detik berharga — tidak ada ruang untuk kesalahan.',
    highlight: 'High-Stakes dari Detik Pertama',
  },
  {
    id: 'max-hearts',
    icon: 'heart-pulse',
    title: 'Max Hearts: 40',
    description: 'Cap nyawa 40 (20 bar HP). Yang bertahan lama & berbisa jadi tank tak terkalahkan.',
    highlight: 'Skalasi Tak Terbatas',
  },
  {
    id: 'hearts-per-kill',
    icon: 'target',
    title: 'Hearts Per Kill: 2',
    description: 'Setiap kill = +2 jantung. Bunuh 5 musuh = +10 jantung. Matematika sederhana, eksekusi sulit.',
    highlight: 'Reward Proporsional',
  },
  {
    id: 'drop-heart',
    icon: 'gift',
    title: 'Drop Heart on Kill: ON',
    description: 'Jantung musuh drop sebagai item fisik di tanah. Siapa cepat dia dapat — bisa dicuri player lain!',
    highlight: 'Risiko Tambahan',
  },
  {
    id: 'ban-on-elimination',
    icon: 'skull',
    title: 'Ban on Elimination: ON',
    description: 'Kehabisan jantung = **PERMANENT BAN**. Tidak ada appeal, tidak ada second chance. Game Over sungguhan.',
    highlight: 'Konsekuensi Nyata',
  },
  {
    id: 'combat-log',
    icon: 'shield-alert',
    title: 'CombatLogX: 10s Timer + KILL',
    description: 'Combat log 10 detik. Disconnect saat combat = INSTANT KILL + drop semua item & jantung. No escape.',
    highlight: 'Fair Play Dijamin',
  },
  {
    id: 'bounty-system',
    icon: 'coin',
    title: 'BetterBounty System',
    description: 'Pasang hadiah di kepala target. Pembunuh klaim hadiah + jantung target. Ekonomi buruan aktif.',
    highlight: 'Ekonomi Buruan',
  },
  {
    id: 'auction-house',
    icon: 'store',
    title: 'zAuctionHouse: Pasar Jantung',
    description: 'Jual beli jantung, gear, item di pasar pemain. Harga fluktuatif — supply/demand murni.',
    highlight: 'Ekonomi Pemain',
  },
];

export const GAMEPLAY_SYSTEMS = [
  {
    id: 'lifestealz',
    name: 'LifeStealZ',
    tagline: 'Core LifeSteal Engine',
    description: 'Mengelola seluruh sistem jantung: spawn, kill reward, drop, ban elimination, dan heart item fisik.',
    icon: 'heart-crack',
    color: 'primary',
    config: [
      { key: 'startHearts', value: '10' },
      { key: 'maxHearts', value: '40' },
      { key: 'heartsPerKill', value: '2' },
      { key: 'dropHeartsPlayer', value: 'true' },
      { key: 'disablePlayerBanOnElimination', value: 'false' },
    ],
  },
  {
    id: 'combatlogx',
    name: 'CombatLogX',
    tagline: 'Anti-Combat Log Protection',
    description: 'Mencegah pemain lari dari pertarungan. 10 detik combat timer, disconnect/quit = KILL instan.',
    icon: 'shield-ban',
    color: 'secondary',
    config: [
      { key: 'default-timer', value: '10 detik' },
      { key: 'disconnect action', value: 'KILL' },
      { key: 'quit action', value: 'KILL' },
      { key: 'reconnect grace', value: '30 detik' },
    ],
  },
  {
    id: 'betterbounty',
    name: 'BetterBounty',
    tagline: 'Player Bounty System',
    description: 'Sistem bounty lengkap: anonymous/public, minimum reward, claim otomatis, bounty board UI.',
    icon: 'crosshair',
    color: 'special',
    config: [
      { key: 'min bounty', value: 'Rp 1.000' },
      { key: 'anonymous', value: 'supported' },
      { key: 'auto claim', value: 'on kill' },
      { key: 'bounty board', value: '/bounty list' },
    ],
  },
  {
    id: 'zauctionhouse',
    name: 'zAuctionHouse',
    tagline: 'Player-Driven Market',
    description: 'Pasar terdesentralisasi: jual beli jantung, gear, item. GUI intuitif, history transaksi, fee configurable.',
    icon: 'shopping-cart',
    color: 'primary',
    config: [
      { key: 'listing fee', value: 'configurable' },
      { key: 'sales tax', value: 'configurable' },
      { key: 'max duration', value: '7 hari' },
      { key: 'heart items', value: 'tradable' },
    ],
  },
  {
    id: 'essentialsx',
    name: 'EssentialsX',
    tagline: 'Quality of Life Commands',
    description: 'Command dasar: /home, /tpa, /balance, /pay, /shop, /kit, /warp, /spawn, /back, /nick, /repair.',
    icon: 'wrench',
    color: 'secondary',
    config: [
      { key: 'max homes', value: 'per rank' },
      { key: 'economy', value: 'Vault hooked' },
      { key: 'kits', value: 'per rank' },
      { key: 'warps', value: 'public + rank' },
    ],
  },
  {
    id: 'viaversion',
    name: 'ViaVersion + ViaBackwards',
    tagline: 'Cross-Version Support',
    description: 'Support client 1.8 - 1.21.4 join ke server 1.21.4. Protocol translation seamless, no protocol hack.',
    icon: 'link',
    color: 'special',
    config: [
      { key: 'min client', value: '1.8' },
      { key: 'max client', value: '1.21.4' },
      { key: 'bedrock', value: 'via Geyser (optional)' },
    ],
  },
];