export type NewsItem = {
  id: string;
  title: string;
  date: string;
  category: string;
  description: string;
  content?: string;
};

// Berita terbaru di urutan paling atas
export const NEWS: NewsItem[] = [
  {
    id: 'high-stakes-launch',
    title: '🔴 HIGH-STAKES LIFESTEAL LAUNCHING SOON!',
    date: '6 November 2026',
    category: 'Peluncuran',
    description: 'NyawaNusa siap meluncurkan server LifeSteal paling ekstrem: StartHearts 10, MaxHearts 40, DropHeartOnKill ON, BanOnElimination ON.',
    content: `**NyawaNusa HIGH-STAKES LIFESTEAL** resmi launching bulan ini! 🎉

Kami menghadirkan pengalaman LifeSteal yang benar-benar **high-stakes**:

⚔️ **Mekanik Nyawa Ekstrem**
- **Start Hearts: 10** (bukan 20) — mulai dengan setengah nyawa normal
- **Max Hearts: 40** — cap nyawa jauh lebih tinggi untuk yang bertahan
- **Hearts Per Kill: 2** — bunuh musuh, ambil 2 jantung
- **Drop Heart on Kill: ON** — jantung musuh drop sebagai item, bisa diambil siapa aja
- **Ban on Elimination: ON** — kehabisan jantung = **PERMANENT BAN** dari server

💰 **Ekonomi High-Stakes**
- zAuctionHouse: Jual beli jantung, item, dan gear di pasar pemain
- BetterBounty: Pasang hadiah di kepala target, ambil jantung mereka
- Vault + EssentialsX: Ekonomi stabil, /balance, /pay, shop

🛡️ **Proteksi & Fair Play**
- CombatLogX: 10 detik combat timer, disconnect saat combat = **INSTANT KILL**
- ViaVersion + ViaBackwards: Support Java 1.21.4 + versi lama
- Anti-cheat built-in Paper 1.21.4

🎁 **Rank System Berbasis Jantung**
- SURVIVOR → HUNTER → REAPER → LEGEND
- Setiap rank naik = lebih banyak Max Home, Claim Block, Kit, dan **Heart Bonus**
- Rank LEGEND: Unlimited Claim, Combat Log Immunity, Custom Death Message

📅 **Timeline**
- **Pretest & Config**: 1-7 Nov 2026
- **Closed Beta (Undangan)**: 8-14 Nov 2026
- **GRAND LAUNCH**: 15 Nov 2026

🔔 **Cara Join**
1. Join Discord untuk whitelist beta: \`/discord\`
2. Follow update di channel #announcements
3. Siapkan mental — di sini **nyawa di taruh, hanya yang berani yang menang**

**Apakah kamu cukup berani?**`,
  },
  {
    id: 'lifesteal-mechanics-deep-dive',
    title: 'Deep Dive: Mekanik LifeSteal NyawaNusa',
    date: '4 November 2026',
    category: 'Gameplay',
    description: 'Penjelasan detail sistem jantung, drop heart, bounty, dan ekonomi high-stakes yang membedakan NyawaNusa dari server LifeSteal lain.',
    content: `## Mekanik Inti: Jantung = Nyawa

Di NyawaNusa, **jantung (heart) adalah segalanya**. Bukan metafora — literal.

### 📊 Spesifikasi Teknis (LifeStealZ Config)
| Parameter | Nilai | Artinya |
|-----------|-------|---------|
| \`startHearts\` | **10** | Spawn dengan 10 jantung (5 bar HP) |
| \`maxHearts\` | **40** | Bisa naik sampai 40 jantung (20 bar HP) |
| \`heartsPerKill\` | **2** | Kill pemain = +2 jantung |
| \`dropHeartsPlayer\` | **true** | Jantung musuh drop sebagai item fisik |
| \`disablePlayerBanOnElimination\` | **false** | **Habis jantung = BAN PERMANEN** |

### ⚔️ Alur Pertarungan
1. **Temukan target** — gunakan /bounty atau cari manual
2. **Mulai combat** — timer CombatLogX 10 detik aktif
3. **Bunuh musuh** — dapat +2 jantung, jantung musuh drop di tanah
4. **Ambil jantung drop** — siapa cepat dia dapat (bisa dicuri player lain!)
5. **Jika kalah** — -2 jantung, dan jantungmu drop untuk musuh

### 💀 Eliminasi & Ban
- Jantung mencapai **0** → **Kick + Ban Permanen** dari server
- Tidak ada appeal, tidak ada second chance
- Data pemain dihapus dari database LifeStealZ

### 🎯 Sistem Bounty (BetterBounty)
- \`/bounty set <player> <amount>\` — pasang hadiah di kepala target
- Pembunuh klaim hadiah + jantung target
- Bisa anonym atau public
- Minimum bounty: Rp 1.000 (economy)

### 🏪 Pasar Jantung (zAuctionHouse)
- Jual jantung surplus ke pemain lain
- Beli jantung kalau butuh buffer sebelum war
- Harga fluktuatif — supply/demand murni pemain

### ⚡ CombatLogX: No Escape
- **Combat Timer: 10 detik** setelah menyerang/diserang
- **Disconnect/Quit saat combat** → **INSTANT KILL** (drop semua item + jantung)
- **Reconnect dalam 30 detik** → tetap mati, item drop di tempat logout
- **No /spawn, /home, /tpa** saat combat

### 📈 Strategi Bertahan
1. **Early game**: Jangan terlalu agresif, kumpulkan gear dulu
2. **Mid game**: Target player dengan jantung banyak, pasang bounty
3. **Late game**: Allianz, kontrol area, monopol pasar jantung
4. **Selalu**: Bawa Golden Apple / God Apple, jangan pernah combat log

---

**Ingat: Di NyawaNusa, setiap detik menentukan nasibmu. Siap taruh nyawa?**`,
  },
  {
    id: 'server-specs-plugins',
    title: 'Spesifikasi Server & Plugin Stack',
    date: '2 November 2026',
    category: 'Teknis',
    description: 'Paper 1.21.4, 8 plugin inti, konfigurasi high-stakes, dan arsitektur yang dioptimalkan untuk Aternos.',
    content: `## ⚙️ Stack Teknis NyawaNusa

### 🖥️ Server Core
- **Software**: **Paper 1.21.4** (build terbaru stable)
- **Java**: **Java 21 (JDK 21)** — wajib untuk Paper 1.21.4
- **Hosting Target**: **Aternos** (free, reliable untuk komunitas Indonesia)

### 🔌 Plugin Inti (8 Plugin)

| Plugin | Fungsi | Versi Target |
|--------|--------|--------------|
| **Vault** | API ekonomi & permission universal | Latest 1.21.4 |
| **EssentialsX** | Command dasar (/home, /tpa, /balance, dll) | Latest 1.21.4 |
| **LifeStealZ** | **CORE** — Sistem jantung, kill/ban, drop heart | Latest 1.21.4 |
| **CombatLogX** | **CORE** — Anti-combat log, kill on disconnect | Latest 1.21.4 |
| **ViaVersion** | Support client 1.21.4 ke server | Latest |
| **ViaBackwards** | Support client versi lama ke server | Latest |
| **BetterBounty** | Sistem bounty pemain, hadiah di kepala | Latest 1.21.4 |
| **zAuctionHouse** | Pasar pemain, jual beli jantung & item | Latest 1.21.4 |

### ⚙️ Konfigurasi High-Stakes (Sudah Di-set)

**LifeStealZ/config.yml**
\`\`\`yaml
startHearts: 10
maxHearts: 40
heartsPerKill: 2
dropHeartsPlayer: true
disablePlayerBanOnElimination: false
\`\`\`

**CombatLogX/config.yml**
\`\`\`yaml
default-timer: 10
\`\`\`

**CombatLogX/punishments.yml**
\`\`\`yaml
disconnect:
  action: KILL
  message: "&cCombat Log detected! You have been killed."
quit:
  action: KILL
  message: "&cCombat Log detected! You have been killed."
\`\`\`

### 📦 Deployment ke Aternos
1. Zip folder \`plugins/\` + \`paper.jar\`
2. Upload ke panel Files Aternos
3. Hapus plugin lama, replace dengan yang baru
4. Start server, verify config generated
5. Test join, test kill, test combat log

### 🔧 Optimasi Aternos
- Paper config: \`view-distance: 6\`, \`simulation-distance: 4\`
- \`spigot.yml\`: \`entity-activation-range\` reduced
- \`bukkit.yml\`: \`spawn-limits\` tuned untuk LifeSteal
- Plugin jar diletakkan di \`plugins/\` root (tidak di subfolder)

---

**Semua siap. Tinggal upload & main.**`,
  },
];

export const NEWS_CATEGORIES = [
  'Semua',
  'Peluncuran',
  'Gameplay',
  'Teknis',
  'Event',
  'Maintenance',
] as const;