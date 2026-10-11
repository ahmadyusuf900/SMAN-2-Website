import Image from "next/image";
import Link from "next/link";
import HeroSlider from "../components/HeroSlider";
import Counter from "../components/Counter";
import Reveal from "../components/Reveal";
import Sambutan from "../components/Sambutan";
import NewsCard from "../components/NewsCard";
import { getBeritaTerurut } from "../lib/Helperberita";

/* ---------- Ikon (jalur SVG sederhana) ---------- */
const ikon = {
  sekolah: "M3 21h18M5 21V10l7-5 7 5v11M9 21v-5h6v5",
  fasilitas: "M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z",
  berita: "M5 4h12a2 2 0 0 1 2 2v14H7a2 2 0 0 1-2-2V4zM9 8h6M9 12h6M9 16h4",
  surat: "M4 6h16v12H4zM4 7l8 6 8-6",
  buku: "M4 5.5A2.5 2.5 0 0 1 6.5 3H20v14H6.5A2.5 2.5 0 0 0 4 19.5v-14zM4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5",
  hati: "M12 21s-7-4.6-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.4-7 10-7 10z",
  piala: "M8 4h8v5a4 4 0 0 1-8 0V4zM8 6H5v1a3 3 0 0 0 3 3M16 6h3v1a3 3 0 0 1-3 3M12 13v4M9 21h6M10 17h4",
  lapangan: "M3 6h18v12H3zM12 6v12M3 10h3v4H3zM18 10h3v4h-3z",
  daun: "M5 19c0-8 5-13 14-14 0 9-5 14-14 14zM5 19l7-7",
  air: "M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z",
  topi: "M2 9l10-5 10 5-10 5-10-5zM6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5",
  komputer: "M3 5h18v11H3zM8 21h8M12 16v5",
  aula: "M4 20h16M6 20V9l6-4 6 4v11M10 20v-5h4v5",
  rumahTanaman: "M3 21h18M5 21V11l7-6 7 6v10M12 17c0-2.5 1.5-4 4-4-.2 2.6-1.6 4-4 4zM12 17c0-2-1.2-3.2-3.2-3.2.2 2 1.3 3.2 3.2 3.2z",
};

function Icon({ d, className = "h-6 w-6" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}

/* ---------- Data ---------- */
const aksesCepat = [
  { judul: "Profil Sekolah", desk: "Kenali identitas dan lingkungan sekolah.", href: "/about", icon: ikon.sekolah },
  { judul: "Fasilitas", desk: "Lihat sarana pendukung belajar.", href: "#fasilitas", icon: ikon.fasilitas },
  { judul: "Berita dan Kegiatan", desk: "Ikuti kabar terbaru sekolah.", href: "/berita", icon: ikon.berita },
  { judul: "Hubungi Kami", desk: "Informasi kontak dan lokasi.", href: "/about#kontak", icon: ikon.surat },
];

// ISI DENGAN DATA RESMI SEKOLAH. Angka di bawah hanya contoh.
const statistik = [
  { nilai: 1280, suffix: "", label: "Peserta didik" },
  { nilai: 80, suffix: "+", label: "Guru dan staf" },
  { nilai: 10, suffix: "+", label: "Ekstrakurikuler" },
  { nilai: 100, suffix: "+", label: "Prestasi" },
];

const keunggulan = [
  {
    judul: "Lingkungan Belajar",
    deskripsi:
      "Lingkungan sekolah yang mendukung proses belajar, eksplorasi, dan pengembangan potensi siswa.",
    icon: ikon.buku,
  },
  {
    judul: "Pengembangan Karakter",
    deskripsi:
      "Mendorong sikap disiplin, tanggung jawab, kolaborasi, dan kepedulian terhadap sesama.",
    icon: ikon.hati,
  },
  {
    judul: "Prestasi dan Kreativitas",
    deskripsi:
      "Memberikan ruang bagi siswa untuk mengembangkan minat, bakat, dan karya positif.",
    icon: ikon.piala,
  },
];

// Ubah / tambah fasilitas di sini. Tiap item: nama, desk, img, icon.
// Nama file yang memakai spasi harus ditulis %20 (atau ganti nama file tanpa spasi).
const fasilitas = [
  { nama: "Lapangan", desk: "Area olahraga dan kegiatan di luar kelas.", img: "/images/facilities/lapangan.png", icon: ikon.lapangan },
  { nama: "Perpustakaan", desk: "Ruang membaca dan belajar yang tenang.", img: "/images/facilities/perpustakaan%20smanda.jpg", icon: ikon.buku },
  { nama: "Taman", desk: "Sudut hijau untuk berkumpul dan beristirahat.", img: "/images/facilities/taman%20smanda.png", icon: ikon.daun },
  { nama: "Toilet", desk: "Fasilitas sanitasi yang bersih dan terawat.", img: "/images/facilities/toilet%20samnda.jpg", icon: ikon.air },
  { nama: "Green House", desk: "Rumah bagi tanaman hijau.", img: "/images/facilities/isigreenhouse.png", icon: ikon.rumahTanaman },
  { nama: "Laboratorium Komputer", desk: "Mengenal pendidikan melalui teknologi.", img: "/images/facilities/lab%20komputer%20smanda.jpg", icon: ikon.komputer },
  { nama: "Aula", desk: "Tempat pusat kegiatan sekolah.", img: "/images/facilities/aula%20smanda.jpg", icon: ikon.aula },
];

/* Galeri kegiatan: tambahkan foto ke public/images/activities lalu daftarkan di sini.
   Bagian ini baru tampil kalau berisi 3 foto atau lebih. Contoh:
   { nama: "Seni Tari", img: "/images/activities/tari.png" },
   { nama: "Upacara Bendera", img: "/images/activities/upacara.jpg" }, */
const galeriKegiatan = [
  { nama: "Seni Tari", img: "/images/activities/tari.png" },
];

// SAMBUTAN KEPALA SEKOLAH. Teks di bawah hanya contoh, ganti dengan sambutan resmi.
const sambutanKepsek = {
  nama: "Dian Milasari, S.Pd., M.Pd", 
  jabatan: "Kepala SMA Negeri 2 Semarang",
  foto: "/images/school/kepsek.png",
  paragraf: [
    "Selamat datang di wadah kreativitas, riset, dan prestasi siswa SMA Negeri 2 Semarang. Melalui semangat Kurikulum Merdeka, kami berdedikasi membangun ruang belajar yang inklusif untuk menghasilkan insan cerdas berkarakter, berbudaya, dan peduli terhadap kelestarian lingkungan.",
    "Kami percaya pendidikan bukan hanya tentang nilai, tetapi juga tentang membentuk karakter, kreativitas, dan kepedulian. Bersama guru, tenaga kependidikan, dan orang tua, kami berkomitmen menyiapkan peserta didik yang unggul, berkarakter, dan berprestasi.",
    "Temukan seluruh informasi akademik, berita terkini, dan ragam potret kegiatan sekolah kami di sini",
  ],
};

export const metadata = {
  title: "Home",
  description:
    "Kenali profil, lingkungan, dan informasi kegiatan SMAN 2 Semarang.",
};

export default function HomePage() {
  const beritaTerbaru = getBeritaTerurut().slice(0, 3);

  return (
    <>
      <HeroSlider />

      {/* ========== STRIP AKSES CEPAT ========== */}
      <section className="relative z-20 -mt-12 sm:-mt-14">
        <div className="container-page">
          <Reveal>
            <div className="grid grid-cols-2 gap-x-4 gap-y-7 rounded-xl border border-navy/10 bg-white p-5 shadow-2xl shadow-navy/15 sm:p-8 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-navy/10">
              {aksesCepat.map((item) => (
                <Link
                  key={item.judul}
                  href={item.href}
                  className="group flex items-start gap-3 sm:gap-4 lg:px-6 lg:first:pl-0 lg:last:pr-0"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-cream text-royal transition duration-300 group-hover:bg-navy group-hover:text-gold sm:h-12 sm:w-12">
                    <Icon d={item.icon} />
                  </span>
                  <span>
                    <span className="block font-display text-base font-semibold leading-snug text-navy transition group-hover:text-royal sm:text-lg">
                      {item.judul}
                    </span>
                    <span className="mt-1 hidden text-xs leading-5 text-slate-500 sm:block">
                      {item.desk}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========== TENTANG SEKOLAH ========== */}
      <section className="bg-cream bg-dots-soft py-20 sm:py-24 lg:py-28">
        <div className="container-page grid items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal className="relative mx-auto w-full max-w-xl pb-12 pr-8 sm:pr-12">
            <div className="absolute -left-3 -top-3 h-full w-full border-2 border-gold/70" />

            <div className="relative aspect-[4/4.2] overflow-hidden bg-sand shadow-xl shadow-navy/15">
              <Image
                src="/images/school/halaman%20depan%20smanda.png"
                alt="Halaman depan SMAN 2 Semarang"
                fill
                quality={90}
                sizes="(max-width: 1024px) 90vw, 520px"
                className="object-cover"
              />
            </div>

            <div className="absolute bottom-0 right-0 h-36 w-36 overflow-hidden border-8 border-cream bg-sand shadow-xl sm:h-48 sm:w-48">
              <Image
                src="/images/school/gedung%20smanda.png"
                alt="Gedung SMAN 2 Semarang"
                fill
                quality={90}
                sizes="200px"
                className="object-cover"
              />
            </div>

            <div className="absolute -left-3 bottom-16 flex h-1.5 w-28">
              <span className="flex-[3] bg-royal" />
              <span className="flex-1 bg-brand-red" />
              <span className="flex-1 bg-gold" />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="section-label">Selamat Datang</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-navy sm:text-4xl lg:text-5xl">
              SMA Negeri 2 Semarang,{" "}
              <span className="italic text-royal">tempat meraih potensi terbaik</span>
            </h2>

            <p className="mt-6 text-sm leading-8 text-slate-600 sm:text-base">
              SMAN 2 Semarang merupakan sekolah menengah atas yang menjadi
              tempat bagi siswa untuk mengembangkan pengetahuan, karakter,
              keterampilan, dan potensi diri. Melalui kegiatan pembelajaran
              serta aktivitas sekolah, siswa diharapkan dapat tumbuh menjadi
              pribadi yang mandiri dan bertanggung jawab.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 border-y border-navy/15 py-6 sm:grid-cols-4">
              {statistik.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-3xl font-semibold text-royal sm:text-4xl">
                    <Counter to={s.nilai} suffix={s.suffix} />
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="group mt-8 inline-flex items-center gap-3 rounded-lg bg-navy px-6 py-3.5 text-sm font-bold text-white transition hover:bg-royal"
            >
              Selengkapnya tentang sekolah
              <span aria-hidden="true" className="transition group-hover:translate-x-1">
                →
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ========== SAMBUTAN KEPALA SEKOLAH ========== */}
      <Sambutan {...sambutanKepsek} />

      {/* ========== PILAR PENDIDIKAN ========== */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="container-page grid items-center gap-16 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          <div>
            <Reveal>
              <p className="section-label">Akademik dan Karakter</p>
              <h2 className="mt-4 text-3xl font-semibold text-navy sm:text-4xl lg:text-5xl">
                Jelajahi. Belajar.{" "}
                <span className="italic text-royal">Unggul.</span>
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                Pendidikan bukan hanya tentang pengetahuan, tetapi juga
                pembentukan karakter dan kesempatan untuk berkembang.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {keunggulan.map((item, i) => (
                <Reveal key={item.judul} delay={i * 100}>
                  <article className="group relative h-full overflow-hidden rounded-xl border border-navy/10 bg-cream p-6 transition duration-300 hover:-translate-y-1.5 hover:bg-white hover:shadow-xl hover:shadow-navy/10">
                    <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy text-gold transition group-hover:bg-royal group-hover:text-white">
                      <Icon d={item.icon} />
                    </span>
                    <h3 className="mt-5 text-xl font-semibold leading-snug text-navy">
                      {item.judul}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {item.deskripsi}
                    </p>
                    <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" />
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={150}>
            <div className="relative mx-auto w-full max-w-sm pb-8">
              <div className="absolute -inset-3 bottom-5 animate-[spin_50s_linear_infinite] rounded-full border-2 border-dashed border-gold/70" />

              <div className="relative aspect-square overflow-hidden rounded-full border-8 border-white bg-sand shadow-2xl shadow-navy/20">
                <Image
                  src="/images/activities/tari.png"
                  alt="Siswa SMAN 2 Semarang berlatih seni tari"
                  fill
                  quality={90}
                  sizes="(max-width: 1024px) 80vw, 380px"
                  className="object-cover"
                />
              </div>

              <div className="absolute bottom-0 left-1/2 w-[88%] -translate-x-1/2 bg-navy px-5 py-4 text-center text-white shadow-xl">
                <p className="font-display text-2xl font-medium italic">
                  Tumbuh Seutuhnya
                </p>
                <p className="mt-1 text-[11px] font-bold tracking-[0.16em] text-gold">
                  KARAKTER • PRESTASI • KOLABORASI
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========== FASILITAS ========== */}
      <section id="fasilitas" className="scroll-mt-24 bg-sand py-20 sm:py-24">
        <div className="container-page">
          <Reveal className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="section-label">Fasilitas</p>
              <h2 className="mt-4 text-3xl font-semibold text-navy sm:text-4xl lg:text-5xl">
                Sarana yang <span className="italic text-royal">mendukung</span>{" "}
                kegiatan belajar
              </h2>
            </div>
            <Link
              href="/about#lingkungan"
              className="group inline-flex w-fit items-center gap-2 rounded-lg border border-navy px-5 py-3 text-sm font-bold text-navy transition hover:bg-navy hover:text-white"
            >
              Lihat lingkungan sekolah
              <span aria-hidden="true" className="transition group-hover:translate-x-1">
                →
              </span>
            </Link>
          </Reveal>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {fasilitas.map((f, i) => (
              <Reveal
                key={f.nama}
                delay={(i % 4) * 90}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
              >
                <article className="group h-full overflow-hidden rounded-xl bg-white shadow-lg shadow-navy/10 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-navy/15">
                  <div className="relative aspect-[4/3] overflow-hidden bg-cream">
                    <Image
                      src={f.img}
                      alt={f.nama}
                      fill
                      quality={85}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                      className="object-cover transition duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="relative px-5 pb-6 pt-9">
                    <span className="absolute -top-6 left-5 flex h-12 w-12 items-center justify-center rounded-full bg-navy text-gold shadow-lg ring-4 ring-white transition group-hover:bg-royal group-hover:text-white">
                      <Icon d={f.icon} className="h-5 w-5" />
                    </span>
                    <h3 className="text-xl font-semibold text-navy">{f.nama}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {f.desk}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== GALERI KEGIATAN (tampil jika foto >= 3) ========== */}
      {galeriKegiatan.length >= 3 && (
        <section className="bg-cream py-20 sm:py-24">
          <div className="container-page">
            <Reveal>
              <p className="section-label">Kehidupan Siswa</p>
              <h2 className="mt-4 text-3xl font-semibold text-navy sm:text-4xl lg:text-5xl">
                Belajar <span className="italic text-royal">di luar kelas</span>
              </h2>
            </Reveal>

            <div className="no-scrollbar -mx-4 mt-10 flex snap-x snap-mandatory items-start gap-3 overflow-x-auto px-4 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 lg:grid-cols-5 lg:gap-4">
              {galeriKegiatan.map((g) => (
                <figure
                  key={g.nama}
                  className="group relative aspect-[3/4] w-[64%] shrink-0 snap-start overflow-hidden bg-sand sm:w-auto lg:even:mt-8"
                >
                  <Image
                    src={g.img}
                    alt={g.nama}
                    fill
                    quality={85}
                    sizes="(max-width: 640px) 64vw, 25vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                  <figcaption className="absolute bottom-3 left-4 font-display text-lg font-semibold text-white">
                    {g.nama}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========== BERITA ========== */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-page">
          <Reveal className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="section-label">Kabar Sekolah</p>
              <h2 className="mt-4 text-3xl font-semibold text-navy sm:text-4xl lg:text-5xl">
                Berita dan <span className="italic text-royal">kegiatan</span>{" "}
                terbaru
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                Ikuti informasi, kegiatan, dan cerita dari lingkungan sekolah.
              </p>
            </div>

            <Link
              href="/berita"
              className="group inline-flex w-fit items-center gap-2 rounded-lg border border-navy px-5 py-3 text-sm font-bold text-navy transition hover:bg-navy hover:text-white"
            >
              Semua berita
              <span aria-hidden="true" className="transition group-hover:translate-x-1">
                →
              </span>
            </Link>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {beritaTerbaru.map((item, i) => (
              <Reveal key={item.slug} delay={i * 100}>
                <NewsCard berita={item} />
              </Reveal>
            ))}
          </div>

          <p className="mt-6 text-xs leading-6 text-slate-500">
            Catatan: berita yang ditampilkan saat ini merupakan konten
            simulasi dan perlu diganti dengan informasi resmi sekolah.
          </p>
        </div>
      </section>

      {/* ========== AJAKAN (BAR) ========== */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="container-page">
          <Reveal>
            <div
              className="bg-modern-navy rounded-xl px-6 py-9 text-white shadow-2xl shadow-navy/25 sm:px-10 lg:flex lg:items-center lg:gap-10 lg:py-10"
            >
              <div className="absolute inset-x-0 top-0 flex h-1.5">
                <span className="flex-[5] bg-royal" />
                <span className="flex-[2] bg-sky" />
                <span className="flex-1 bg-brand-red" />
                <span className="flex-1 bg-gold" />
              </div>

              <span className="mb-5 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-gold/60 text-gold lg:mb-0">
                <Icon d={ikon.topi} className="h-8 w-8" />
              </span>

              <div className="lg:flex-1 lg:border-l lg:border-white/20 lg:pl-10">
                <h2 className="text-2xl font-semibold leading-tight sm:text-3xl">
                  Kenali lebih dekat{" "}
                  <span className="italic text-gold">SMAN 2 Semarang</span>
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-7 text-blue-100">
                  Jelajahi profil sekolah dan temukan informasi kegiatan
                  melalui halaman yang tersedia.
                </p>
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:shrink-0">
                <Link
                  href="/about"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-bold text-navy transition hover:-translate-y-0.5 hover:bg-gold-dark"
                >
                  Lihat Profil Sekolah
                  <span aria-hidden="true">→</span>
                </Link>
                <Link
                  href="/about#kontak"
                  className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/50 px-6 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-navy"
                >
                  Hubungi Kami
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}