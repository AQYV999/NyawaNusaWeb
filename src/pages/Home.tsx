import type { CSSProperties } from 'react';
import { SITE } from '../config/site';
import { CopyIpButton } from '../components/CopyIpButton';

const DISCORD_URL = 'https://discord.gg/nyawanusa';
const SUPPORT_EMAIL = 'support@nyawanusa.id';

const PLUGIN_DIAGRAM = JSON.stringify({
  layout: 'hub',
  ground: 'glow rings',
  center: { icon: 'ui:server', label: 'Paper 1.21.4' },
  spokes: [
    { icon: 'ui:heart-pulse', label: 'LifeStealZ' },
    { icon: 'ui:shield-alert', label: 'CombatLogX' },
    { icon: 'ui:target', label: 'BetterBounty' },
    { icon: 'ui:store', label: 'zAuctionHouse' },
    { icon: 'ui:wallet', label: 'EssentialsX' },
    { icon: 'ui:layers', label: 'ViaVersion' },
  ],
});

interface RankTier {
  id: string;
  label: string;
  price: string;
  summary: string;
  note: string;
  icon: 'shield' | 'crosshair' | 'skull' | 'crown';
}

const RANKS: RankTier[] = [
  {
    id: 'survivor',
    label: 'SURVIVOR',
    price: 'Rp 15.000',
    summary: 'Identitas obrolan pendukung di lobi tanpa tambahan hati atau item tempur.',
    note: 'Start tetap 10 hati',
    icon: 'shield',
  },
  {
    id: 'hunter',
    label: 'HUNTER',
    price: 'Rp 35.000',
    summary: 'Penanda petualang aktif saat berburu buronan di luar batas spawn.',
    note: 'Start tetap 10 hati',
    icon: 'crosshair',
  },
  {
    id: 'reaper',
    label: 'REAPER',
    price: 'Rp 65.000',
    summary: 'Dukungan tambahan slot penanda markas tim dan daftar lelang pasar.',
    note: 'Start tetap 10 hati',
    icon: 'skull',
  },
  {
    id: 'legend',
    label: 'LEGEND',
    price: 'Rp 125.000',
    summary: 'Dukungan penuh pemeliharaan server tanpa mengubah batas maksimal 40 hati.',
    note: 'Start tetap 10 hati',
    icon: 'crown',
  },
];

function RankIcon({ name }: { name: RankTier['icon'] }) {
  if (name === 'shield') {
    return (
      <svg className="ic ic-svg ic-24" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      </svg>
    );
  }
  if (name === 'crosshair') {
    return (
      <svg className="ic ic-svg ic-24" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M22 12h-4M6 12H2m10-6V2m0 20v-4" />
      </svg>
    );
  }
  if (name === 'skull') {
    return (
      <svg className="ic ic-svg ic-24" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m12.5 17-.5-1-.5 1z" />
        <path d="M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z" />
        <circle cx="15" cy="12" r="1" />
        <circle cx="9" cy="12" r="1" />
      </svg>
    );
  }
  return (
    <svg className="ic ic-svg ic-24" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294zM5 21h14" />
    </svg>
  );
}

const FAQS = [
  {
    q: 'Apakah rank NyawaNusa memberi tambahan jantung di awal?',
    a: 'Tidak. Seluruh pemain memulai dari 10 hati dan tunduk pada batas maksimal 40 hati yang sama.',
  },
  {
    q: 'Mengapa akun gugur ketika keluar di tengah duel LifeSteal?',
    a: 'CombatLogX menerapkan kunci tempur 10 detik. Keluar sebelum timer selesai otomatis dianggap kalah.',
  },
  {
    q: 'Versi Minecraft apa saja yang didukung server NyawaNusa?',
    a: 'Server berjalan di Paper 1.21.4 Java 21, mendukung client Java 1.8 hingga 1.21.4 dan Bedrock port 19132.',
  },
  {
    q: 'Bagaimana memulihkan akun LifeSteal setelah menyentuh nol hati?',
    a: 'Akun yang tereliminasi menunggu pergantian musim baru atau menggunakan item kebangkitan di dalam permainan.',
  },
];

export function Home() {
  return (
    <>
      <header className="nav">
        <div className="wrap nav__bar">
          <a className="skip-link" href="#top">
            Lewati ke konten utama
          </a>

          <a className="nav__logo" href="#top">
            <span className="mark" data-mark="dots" aria-hidden="true" />
            <span>NyawaNusa</span>
          </a>

          <nav className="nav__links" aria-label="Navigasi utama">
            <div className="nav__item">
              <a className="nav__link" href="#mekanik">
                <span>Arena</span>
                <svg className="chev" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <path d="M3 4.5 6 7.5 9 4.5" />
                </svg>
              </a>
              <button
                type="button"
                className="nav__expand"
                aria-expanded="false"
                aria-controls="menu-arena"
                aria-label="Buka submenu Arena"
              >
                <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <path d="M3 4.5 6 7.5 9 4.5" />
                </svg>
              </button>
              <div className="nav__menu" id="menu-arena">
                <div className="wrap grid">
                  <div className="menu-col span-4">
                    <div className="t-label">Aturan Inti</div>
                    <a href="#mekanik">
                      Mekanik LifeSteal
                      <span>Rebut 2 hati setiap mengalahkan lawan hingga batas 40 hati</span>
                    </a>
                    <a href="#taruhan">
                      Risiko Eliminasi 0 Hati
                      <span>Ban otomatis saat seluruh jantung habis hingga musim berganti</span>
                    </a>
                    <a href="#world">
                      Server Lintas Versi
                      <span>Dukungan Paper 1.21.4 untuk Java 1.8–1.21.4 serta Bedrock 19132</span>
                    </a>
                  </div>
                  <div className="menu-col span-4">
                    <div className="t-label">Sistem &amp; Dukungan</div>
                    <a href="#plugin">
                      Plugin Arena Server
                      <span>LifeStealZ, CombatLogX, BetterBounty, dan zAuctionHouse</span>
                    </a>
                    <a href="#plans">
                      Rank Operasional
                      <span>Pilihan SURVIVOR hingga LEGEND tanpa keunggulan bertarung</span>
                    </a>
                    <a href="#faq">
                      Aturan &amp; FAQ
                      <span>Kebijakan fair play dan jadwal peluncuran musim 2026</span>
                    </a>
                  </div>
                  <div className="menu-card span-4">
                    <div className="frame panel">
                      <img
                        src="/assets/img/photo-f35965461-500.jpg"
                        alt="Aliran lava merah menyala di malam hari."
                        width={500}
                        height={333}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="nav__item">
              <a className="nav__link" href="#plugin">Plugin</a>
            </div>
            <div className="nav__item">
              <a className="nav__link" href="#plans">Rank</a>
            </div>
            <div className="nav__item">
              <a className="nav__link" href="#faq">Aturan</a>
            </div>
          </nav>

          <div className="nav__actions">
            <a className="btn btn--primary" href="#world">
              Masuk Server
            </a>
          </div>

          <button type="button" className="nav__toggle" aria-label="Menu" aria-expanded="false">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M4 8h16M4 16h16" />
            </svg>
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero hero--photo" data-enter data-calm="left" aria-labelledby="hero-h">
          <picture className="hero__bg">
            <source
              type="image/jpeg"
              srcSet="/assets/img/photo-f114329277-960.jpg 960w, /assets/img/photo-f114329277-1280.jpg 1280w, /assets/img/photo-f114329277.jpg 1920w"
              sizes="100vw"
            />
            <img
              src="/assets/img/photo-f114329277-1280.jpg"
              alt="Kawah lava menyala merah di tengah gelapnya batu vulkanik."
              width={1920}
              height={1272}
              fetchPriority="high"
              decoding="async"
              data-source="stand-in"
              data-subject="stand-in"
            />
          </picture>

          <div className="wrap">
            <div className="hero-text">
              <div className="hero__text" data-enter="on">
                <h1 id="hero-h">Server survival LifeSteal.</h1>
                <p>
                  Paper 1.21.4 Java 21 dengan 10 hati awal, maksimal 40 hati, CombatLogX 10 detik, serta ban otomatis pada 0 hati.
                </p>
                <div className="btn-row">
                  <CopyIpButton label="Salin IP Server" className="btn btn--primary" />
                  <a className="btn btn--secondary" href="#mekanik">
                    Lihat Mekanik Server
                  </a>
                </div>
                <p className="hero__copy-note">
                  IP Java: {SITE.ip} · Bedrock Port {SITE.bedrockPort}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section mekanik-sec" id="mekanik" style={{ '--hm': 2 } as CSSProperties}>
          <div className="wrap">
            <div className="section-head">
              <h2 id="mekanik-h">Mekanik duel LifeSteal.</h2>
              <p>
                Setiap pertemuan di luar area spawn langsung mempertaruhkan barang bawaan dan jumlah nyawa pemain.
              </p>
            </div>

            <div className="grid">
              <article className="card card--open span-4">
                <div className="verb-thumb">
                  <img
                    src="/assets/img/photo-f35965461-960.jpg"
                    srcSet="/assets/img/photo-f35965461-500.jpg 500w, /assets/img/photo-f35965461-960.jpg 960w, /assets/img/photo-f35965461.jpg 1280w"
                    sizes="(max-width: 1023px) 100vw, 33vw"
                    alt="Aliran lava malam menuruni lereng gelap gunung berapi."
                    width={1280}
                    height={853}
                    loading="lazy"
                    data-source="stand-in"
                    data-subject="stand-in"
                  />
                </div>
                <h3>Curi 2 hati lawan</h3>
                <p>
                  Pemain mulai dari 10 hati hingga batas 40 hati. Ketika lawan tumbang, item hati jatuh ke tanah untuk diambil.
                </p>
              </article>

              <article className="card card--open span-4">
                <div className="verb-thumb">
                  <img
                    src="/assets/img/photo-f142453548-960.jpg"
                    srcSet="/assets/img/photo-f142453548-500.jpg 500w, /assets/img/photo-f142453548-960.jpg 960w, /assets/img/photo-f142453548.jpg 1280w"
                    sizes="(max-width: 1023px) 100vw, 33vw"
                    alt="Retakan lava menyala membelah daratan vulkanik di malam hari."
                    width={1280}
                    height={719}
                    loading="lazy"
                    data-source="stand-in"
                    data-subject="stand-in"
                  />
                </div>
                <h3>Kunci tempur 10 detik</h3>
                <p>
                  CombatLogX mengunci pemain selama 10 detik seusai serangan terakhir. Putus koneksi di tengah duel dihitung mati di tempat.
                </p>
              </article>

              <article className="card card--open span-4">
                <div className="verb-thumb">
                  <img
                    src="/assets/img/photo-f1295588-960.jpg"
                    srcSet="/assets/img/photo-f1295588-500.jpg 500w, /assets/img/photo-f1295588-960.jpg 960w, /assets/img/photo-f1295588.jpg 1280w"
                    sizes="(max-width: 1023px) 100vw, 33vw"
                    alt="Pijar bara merah mengalir menuruni puncak gunung malam."
                    width={1280}
                    height={853}
                    loading="lazy"
                    data-source="stand-in"
                    data-subject="stand-in"
                  />
                </div>
                <h3>Bounty &amp; pasar 7 hari</h3>
                <p>
                  Pasang buronan lewat BetterBounty minimal Rp 1.000 atau perdagangkan item hati di zAuctionHouse hingga tujuh hari.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section
          className="section"
          id="taruhan"
          data-moment="word-highlight"
          data-moment-opts='{"from":0.95,"to":0.6}'
          style={{ '--h': 1, '--hm': 1 } as CSSProperties}
        >
          <div className="wrap taruhan-wrap">
            <div>
              <h2 className="mo-wh__text" id="taruhan-h">
                0 hati berarti tamat.
              </h2>
              <p className="mo-wh__sub">
                Begitu nyawa menyentuh nol, ban eliminasi langsung menutup akses dunia utama hingga musim baru dimulai atau pemain mendapatkan item kebangkitan.
              </p>
            </div>

            <dl className="taruhan-rules">
              <div>
                <dt>Nyawa Awal</dt>
                <dd>10 hati penuh</dd>
              </div>
              <div>
                <dt>Batas Atas</dt>
                <dd>40 hati maksimal</dd>
              </div>
              <div>
                <dt>Hadiah Duel</dt>
                <dd>Rebut 2 hati</dd>
              </div>
              <div>
                <dt>Eliminasi</dt>
                <dd>Ban pada 0 hati</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="section" id="world" style={{ '--h': 1, '--hm': 1 } as CSSProperties}>
          <div className="wrap">
            <div className="section-head">
              <h2 id="world-h">Server Paper lintas versi.</h2>
              <p>
                Satu dunia NyawaNusa di alamat {SITE.ip} menerima pemain Java 1.8 hingga 1.21.4 serta Bedrock port {SITE.bedrockPort}.
              </p>
            </div>

            <div className="frame frame--photo world-frame">
              <picture>
                <source
                  type="image/jpeg"
                  srcSet="/assets/img/photo-f141881863-960.jpg 960w, /assets/img/photo-f141881863.jpg 1280w"
                  sizes="(max-width: 1023px) 100vw, 1280px"
                />
                <img
                  className="frame__img"
                  src="/assets/img/photo-f141881863.jpg"
                  alt="Sungai magma pijar membentang di dataran gelap pada malam hari."
                  width={1280}
                  height={749}
                  loading="lazy"
                  data-source="stand-in"
                  data-subject="stand-in"
                />
              </picture>
            </div>
          </div>
        </section>

        <section className="section ground-surface" id="plugin" style={{ '--h': 1, '--hm': 1 } as CSSProperties}>
          <div className="wrap grid plugin-grid">
            <div className="span-5">
              <div className="section-head">
                <h2 id="plugin-h">Plugin server LifeSteal.</h2>
                <p>
                  Enam modul berjalan di Paper 1.21.4 tanpa mewajibkan modpack tambahan pada client pemain.
                </p>
              </div>

              <ol className="rows">
                <li>
                  <div className="rows__head">
                    <strong>LifeStealZ</strong>
                    <span>10 ke 40 hati</span>
                  </div>
                  <p>Mengatur pencurian 2 hati, drop hati fisik, dan ban eliminasi saat nyawa mencapai nol.</p>
                </li>
                <li>
                  <div className="rows__head">
                    <strong>CombatLogX</strong>
                    <span>Timer 10 detik</span>
                  </div>
                  <p>Menahan pemain selama 10 detik setelah serangan terakhir agar duel selalu tuntas.</p>
                </li>
                <li>
                  <div className="rows__head">
                    <strong>BetterBounty &amp; zAuctionHouse</strong>
                    <span>Min. Rp 1.000</span>
                  </div>
                  <p>Taruhan buronan lawan dan lelang item maupun hati selama hingga tujuh hari.</p>
                </li>
                <li>
                  <div className="rows__head">
                    <strong>ViaVersion &amp; EssentialsX</strong>
                    <span>Java + Bedrock</span>
                  </div>
                  <p>Ekonomi Vault lintas client Java 1.8–1.21.4 serta Bedrock port 19132.</p>
                </li>
              </ol>
            </div>

            <div className="span-7 start-6">
              <div className="frame dg-panel" data-ui-loop="1">
                <div className="dg" data-ui-loop="1" data-diagram={PLUGIN_DIAGRAM} />
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="plans" style={{ '--h': 1, '--hm': 2 } as CSSProperties}>
          <div className="wrap">
            <div className="section-head section-head--split">
              <div>
                <h2 id="plans-h">Rank dukungan server.</h2>
                <p>
                  Bantuan operasional NyawaNusa tanpa bonus nyawa awal maupun keunggulan bertarung.
                </p>
              </div>
              <a className="link" href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
                Discord Server
              </a>
            </div>

            <div className="grid">
              {RANKS.map((rank) => (
                <article className="card span-3 rank-tier" key={rank.id}>
                  <div className="rank-tier__icon" aria-hidden="true">
                    <RankIcon name={rank.icon} />
                  </div>
                  <h3>Rank {rank.label}</h3>
                  <div className="rank-tier__price">{rank.price}</div>
                  <p>{rank.summary}</p>
                  <p className="rank-tier__note">{rank.note}</p>
                  <a
                    className="link rank-tier__cta"
                    href={DISCORD_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Dukung di Discord
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section g2m" id="faq" style={{ '--h': 1 } as CSSProperties}>
          <div className="wrap grid">
            <div className="span-5">
              <div className="section-head">
                <h2 id="faq-h">Aturan server &amp; FAQ.</h2>
                <p>Ketentuan permainan adil dan jadwal peluncuran musim perdana NyawaNusa.</p>
              </div>

              <ol className="rows faq-rules">
                <li className="faq-rules__row">
                  <div className="faq-rules__body">
                    <div className="rows__head">
                      <strong>Fair play bersih</strong>
                      <span>Tanpa cheat</span>
                    </div>
                    <p>Dilarang memakai hack client, auto-clicker, atau eksploitasi duplikasi.</p>
                  </div>
                  <span className="faq-rules__icon" aria-hidden="true">
                    <svg className="ic ic-svg ic-24" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                    </svg>
                  </span>
                </li>
                <li className="faq-rules__row">
                  <div className="faq-rules__body">
                    <div className="rows__head">
                      <strong>Anti kill farming</strong>
                      <span>Dilarang keras</span>
                    </div>
                    <p>Bersekongkol membunuh akun cadangan berujung penghapusan nyawa.</p>
                  </div>
                  <span className="faq-rules__icon" aria-hidden="true">
                    <svg className="ic ic-svg ic-24" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m11 19-6-6m0 8-2-2m5-3-4 4m5.5-2.5L21 6V3h-3L6.5 14.5" />
                    </svg>
                  </span>
                </li>
                <li className="faq-rules__row">
                  <div className="faq-rules__body">
                    <div className="rows__head">
                      <strong>Jadwal musim 2026</strong>
                      <span>1–15 Nov</span>
                    </div>
                    <p>Pretest 1–7 Nov, Beta 8–14 Nov, dan Grand Launch 15 Nov 2026.</p>
                  </div>
                  <span className="faq-rules__icon" aria-hidden="true">
                    <svg className="ic ic-svg ic-24" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4" />
                    </svg>
                  </span>
                </li>
                <li className="faq-rules__row">
                  <div className="faq-rules__body">
                    <div className="rows__head">
                      <strong>Bantuan &amp; pelaporan</strong>
                      <span>{SUPPORT_EMAIL}</span>
                    </div>
                    <p>Sampaikan laporan pelanggaran melalui Discord atau email resmi server.</p>
                  </div>
                  <span className="faq-rules__icon" aria-hidden="true">
                    <svg className="ic ic-svg ic-24" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M22 12h-4M6 12H2m10-6V2m0 20v-4" />
                    </svg>
                  </span>
                </li>
              </ol>
            </div>

            <div className="span-7 start-6 faq">
              {FAQS.map((item) => (
                <div className="faq__item" key={item.q}>
                  <h3>{item.q}</h3>
                  <p>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer closing footer--statement" id="gabung">
        <div className="wrap">
          <div className="closing__cta close--type">
            <div className="section-head">
              <h2 id="gabung-h">Masuk server LifeSteal.</h2>
              <p className="close__sub">
                Gunakan alamat {SITE.ip} untuk masuk lewat Minecraft Java 1.8–1.21.4 maupun Bedrock port {SITE.bedrockPort}.
              </p>
            </div>
            <CopyIpButton label="Salin IP Server" className="btn btn--primary" />
            <p className="close-facts">
              Paper 1.21.4 · {SITE.ip} · Bedrock {SITE.bedrockPort}
            </p>
          </div>

          <div className="closing__links">
            <div className="grid">
              <div className="span-4">
                <a className="footer__mark" href="#top">
                  <span className="mark" data-mark="dots" aria-hidden="true" />
                  <span>NyawaNusa</span>
                </a>
                <p className="footer__lede">
                  Server Survival LifeSteal di Paper 1.21.4.
                </p>
              </div>

              <div className="footer__col span-2">
                <h3>Arena</h3>
                <ul>
                  <li><a href="#mekanik">Mekanik LifeSteal</a></li>
                  <li><a href="#taruhan">Eliminasi 0 Hati</a></li>
                  <li><a href="#world">Lintas Versi</a></li>
                </ul>
              </div>

              <div className="footer__col span-2">
                <h3>Server</h3>
                <ul>
                  <li><a href="#plugin">Sistem Plugin</a></li>
                  <li><a href="#plans">Rank Dukungan</a></li>
                  <li><a href="#faq">Aturan &amp; FAQ</a></li>
                </ul>
              </div>

              <div className="footer__col span-2">
                <h3>Komunitas</h3>
                <ul>
                  <li><a href={DISCORD_URL} target="_blank" rel="noopener noreferrer">Discord Resmi</a></li>
                  <li><a href={`mailto:${SUPPORT_EMAIL}`}>Email Dukungan</a></li>
                  <li><a href="#world">IP &amp; Port</a></li>
                </ul>
              </div>

              <div className="footer__col span-2">
                <h3>Informasi</h3>
                <ul>
                  <li><a href="#world">Server &amp; IP</a></li>
                  <li><a href="/privacy.html">Privasi</a></li>
                  <li><a href="/terms.html">Ketentuan</a></li>
                </ul>
              </div>
            </div>

            <div className="footer__legal">
              <span>{SITE.footerCopyright}</span>
              <a className="credits" href="/credits.html">Photographs via Wikimedia Commons</a>
              <span>Paper 1.21.4 · Java 21 · Jakarta</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
