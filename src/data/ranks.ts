export type RankTheme = {
  accent: string;
  glow: string;
  solid: string;
  hover: string;
  onSolid: string;
  text: string;
  iconBox: string;
  check: string;
};

export type Rank = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: string | null;
  inherits?: string;
  benefits: string[];
  popular?: boolean;
  solidCta?: boolean;
  image: string;
  theme: RankTheme;
};

export const RANKS: Rank[] = [
  {
    id: 'survivor',
    name: 'SURVIVOR',
    tagline: 'Pemula yang Berani',
    image: '/icons/survivor.svg',
    price: 'Rp 15.000',
    description: 'Mulai perjalanan high-stakes dengan perlengkapan dasar untuk bertahan hidup.',
    benefits: [
      '3 Max Home',
      'Akses /enderchest',
      'Akses /craft',
      '500 Claim Block',
      'Kit [Survivor] — Starter Sword + Food',
      '1 Heart Bonus saat Join',
    ],
    theme: {
      accent: 'rgba(220, 38, 38, 0.55)',   // Red
      glow: 'rgba(220, 38, 38, 0.14)',
      solid: '#dc2626',
      hover: '#b91c1c',
      onSolid: '#450a0a',
      text: 'text-red-300',
      iconBox: 'bg-red-500/15 text-red-300',
      check: 'text-red-400',
    },
  },
  {
    id: 'hunter',
    name: 'HUNTER',
    tagline: 'Pemburu Kepala',
    image: '/icons/hunter.svg',
    price: 'Rp 35.000',
    inherits: 'SURVIVOR',
    solidCta: true,
    popular: true,
    description: 'Tingkatkan kemampuan berburu dengan kit Hunter dan akses utilitas vital.',
    benefits: [
      '5 Max Home',
      'Akses /nick',
      'Akses /repair',
      'Akses /hat',
      'Akses /back',
      '1500 Claim Block',
      'Kit [Hunter] — Sharp III Sword + Bow',
      '2 Hearts Bonus',
      'Drop Heart Chance +10%',
    ],
    theme: {
      accent: 'rgba(249, 115, 22, 0.65)',   // Orange
      glow: 'rgba(249, 115, 22, 0.2)',
      solid: '#f97316',
      hover: '#ea580c',
      onSolid: '#431407',
      text: 'text-orange-300',
      iconBox: 'bg-orange-500/15 text-orange-300',
      check: 'text-orange-400',
    },
  },
  {
    id: 'reaper',
    name: 'REAPER',
    tagline: 'Sang Penebus Nyawa',
    image: '/icons/reaper.svg',
    price: 'Rp 65.000',
    inherits: 'HUNTER',
    description: 'Kuasai medan perang dengan kemampuan terbang dan penyembuhan instan.',
    benefits: [
      '8 Max Home',
      'Akses /fly (Survival)',
      'Akses /heal',
      'Akses /feed',
      'Akses /repair all',
      '3000 Claim Block',
      'Kit [Reaper] — Sharp IV Netherite Sword + Elytra',
      '4 Hearts Bonus',
      'Drop Heart Chance +20%',
      'Combat Log Immunity (1x/hari)',
    ],
    theme: {
      accent: 'rgba(251, 191, 36, 0.65)',   // Amber/Gold
      glow: 'rgba(251, 191, 36, 0.2)',
      solid: '#fbbf24',
      hover: '#f59e0b',
      onSolid: '#451a03',
      text: 'text-amber-300',
      iconBox: 'bg-amber-500/15 text-amber-300',
      check: 'text-amber-400',
    },
  },
  {
    id: 'legend',
    name: 'LEGEND',
    tagline: 'Legenda Abadi',
    image: '/icons/legend.svg',
    price: 'Rp 125.000',
    inherits: 'REAPER',
    solidCta: true,
    description: 'Rank tertinggi — kekebalan penuh, prioritas absolute, dan kemampuan menakutkan.',
    benefits: [
      '12 Max Home',
      'Akses /anvil',
      'Akses /grindstone',
      'Akses /enchant',
      'Unlimited Claim Block',
      'Kit [Legend] — Sharp V Netherite Set + God Apple x5',
      '6 Hearts Bonus',
      'Drop Heart Chance +30%',
      'Combat Log Immunity (Unlimited)',
      'Priority Queue & Anti-AFK Kick',
      'Custom Death Message',
      'Akses /bounty set (Free)',
    ],
    theme: {
      accent: 'rgba(232, 121, 249, 0.7)',   // Fuchsia/Pink
      glow: 'rgba(232, 121, 249, 0.24)',
      solid: '#e879f9',
      hover: '#d946ef',
      onSolid: '#4a044e',
      text: 'text-fuchsia-300',
      iconBox: 'bg-fuchsia-500/15 text-fuchsia-300',
      check: 'text-fuchsia-400',
    },
  },
];