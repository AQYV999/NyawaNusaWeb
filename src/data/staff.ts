export type StaffMember = {
  id: string;
  name: string;
  role: string;
  description: string;
  avatar: string;
  social?: {
    discord?: string;
    github?: string;
    twitter?: string;
  };
};

export const STAFF: StaffMember[] = [
  {
    id: 'owner',
    name: 'NyawaNusa',
    role: 'Owner & Founder',
    description: 'Arsitek high-stakes, desain mekanik LifeSteal, pengembang server.',
    avatar: '/avatars/owner.png',
    social: {
      discord: 'https://discord.gg/nyawanusa',
      github: 'https://github.com/nyawanusa',
    },
  },
  {
    id: 'admin1',
    name: 'Reaper',
    role: 'Head Admin',
    description: 'Operasional server, manajemen plugin, anti-cheat, & komunitas.',
    avatar: '/avatars/reaper.png',
  },
  {
    id: 'mod1',
    name: 'Hunter',
    role: 'Moderator',
    description: 'Moderasi chat, handle report, event & giveaway.',
    avatar: '/avatars/hunter.png',
  },
  {
    id: 'dev1',
    name: 'TechSupport',
    role: 'Developer',
    description: 'Plugin custom, config tuning, deployment Aternos, troubleshooting.',
    avatar: '/avatars/dev.png',
    social: {
      github: 'https://github.com/nyawanusa-dev',
    },
  },
];

export const STAFF_ROLES = [
  { id: 'owner', name: 'Owner', color: 'special', priority: 1 },
  { id: 'admin', name: 'Admin', color: 'primary', priority: 2 },
  { id: 'mod', name: 'Moderator', color: 'secondary', priority: 3 },
  { id: 'dev', name: 'Developer', color: 'special', priority: 4 },
  { id: 'helper', name: 'Helper', color: 'primary', priority: 5 },
] as const;