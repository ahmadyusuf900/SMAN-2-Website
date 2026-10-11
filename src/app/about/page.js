import Image from "next/image";
import Link from "next/link";
import Reveal from "../../components/Reveal";
import AnchorNav from "../../components/AnchorNav";
import EkskulFilter from "../../components/EkskulFilter";

/* =====================================================================
   DATA HALAMAN. Ganti isi di bawah ini dengan data resmi sekolah.
   Teks bertanda [isi] / "Belum diisi" adalah tempat data yang perlu dilengkapi.
   ===================================================================== */

// Data identitas sekolah. Kosongkan nilai ("") jika belum ada datanya.
const dataSekolah = [
  { label: "Nama Sekolah", nilai: "SMA Negeri 2 Semarang" },
  { label: "Status", nilai: "Negeri" },
  { label: "Jenjang", nilai: "SMA" },
  { label: "NPSN", nilai: "20328896" },
  { label: "Akreditasi", nilai: "A" },
  { label: "Kurikulum", nilai: "Merdeka" },
  { label: "Tahun Berdiri", nilai: "1950" },
  { label: "Kota / Provinsi", nilai: "Semarang, Jawa Tengah" },
];

const visi =
  "Terwujudnya sekolah yang menghasilkan insan berbudi pekerti luhur, unggul dalam prestasi, berwawasan kebangsaan, dan lingkungan hidup.";

const misi = [
  "Menghasilkan insan atau lulusan yang memiliki budi pekerti luhur dan integritas moral yang kuat.",
  " Mendorong siswa untuk meraih prestasi maksimal di bidang sains, olahraga, seni, serta kompetensi global lainnya.",
  "Menanamkan jiwa nasionalisme, cinta tanah air, dan pemahaman nilai-nilai luhur budaya bangsa kepada seluruh warga sekolah.",
  " Menciptakan ekosistem belajar yang asri, bersih, dan menumbuhkan kesadaran kolektif untuk menjaga kelestarian lingkungan hidup.",
];

const nilaiSekolah = [
  {
    nomor: "01",
    judul: "Pelestarian Budaya",
    deskripsi:
      " Merawat tradisi lokal melalui seni, studi budaya, dan penggunaan identitas batik khas.",
  },
  {
    nomor: "02",
    judul: "Religius & Takwa",
    deskripsi:
      "Berdoa bersama sebelum dan sesudah belajar serta aktif dalam pembinaan rohani keagamaan.",
  },
  {
    nomor: "03",
    judul: "Nasionalisme",
    deskripsi:
      " Menanamkan cinta tanah air melalui upacara bendera dan menyanyikan lagu kebangsaan.",
  },
   {
    nomor: "04",
    judul: "Disiplin & Tertib",
    deskripsi:
      "Menjunjung tinggi ketepatan waktu, kerapian, dan kepatuhan terhadap aturan sekolah.",
  },
   {
    nomor: "05",
    judul: "Integritas & Prestasi",
    deskripsi:
      "Membentuk karakter jujur, bertanggung jawab, dan pekerja keras untuk meraih prestasi.",
  },
   {
    nomor: "06",
    judul: "Peduli Lingkungan",
    deskripsi:
      "Menciptakan lingkungan sekolah yang bersih, asri, dan sadar akan kelestarian alam.",
  },
];

// Sejarah. CONTOH susunan, ganti tahun dan isinya dengan sejarah resmi.
const sejarah = [
  {
    tahun: "1950",
    judul: "Awal berdirinya sekolah",
    teks: "Berdiri pada 1 Agustus 1950 sebagai sekolah negeri pertama di Semarang yang menempati bekas gedung sekolah Belanda (HBS) di Jalan Taman Menteri Soepeno, dengan fokus pada penjurusan Matematika dan Ilmu Alam (Bagian B).",
  },
  {
    tahun: "1955",
    judul: "Pemekaran Instansi",
    teks: "Akibat lonjakan jumlah siswa, sekolah Bagian B tersebut dipecah menjadi dua instansi mandiri, yaitu SMA Negeri 1 Bagian B dan SMA Negeri 2 Bagian B, yang saat itu masih berbagi satu kompleks gedung yang sama.",
  },
  {
    tahun: "1978",
    judul: "Pemindahan sekolah ke gedung baru",
    teks: "Demi efektivitas belajar, pemerintah membangun gedung baru di Semarang Timur. SMAN 2 resmi pindah ke Jalan Sendangguwo Baru pada tahun 1978, sedangkan SMAN 1 tetap bertahan di gedung lama.",
  },
  {
    tahun: "1982",
    judul: "Penyeragaman nama",
    teks: "Mengikuti kebijakan penulisan nasional pada tahun ajaran 1982/1983, penulisan nama sekolah resmi diubah dari menggunakan angka romawi (SMA Negeri II) menjadi angka arab (SMA Negeri 2 Semarang) hingga sekarang",
  },
  {
    tahun: "1982 - Kini",
    judul: "Berdirilah SMAN 2 Semarang",
    teks: "Menjadi sekolah yang unggul, berkarakter, dan berprestasi",
  },
];

const galeri = [
  {
    nama: "Gedung Sekolah",
    img: "/images/school/gedung%20smanda.png",
    kelas: "col-span-2 row-span-2",
  },
  {
    nama: "Lapangan",
    img: "/images/facilities/lapangan%20smanda.jpg",
    kelas: "",
  },
  {
    nama: "Perpustakaan",
    img: "/images/facilities/perpustakaan%20smanda.jpg",
    kelas: "",
  },
  {
    nama: "Taman",
    img: "/images/facilities/taman%20smanda.png",
    kelas: "col-span-2",
  },
   {
    nama: "Toilet",
    img: "/images/facilities/toilet%20samnda.jpg",
    kelas: "",
  },
  {
    nama: "Green House",
    img: "/images/facilities/isigreenhouse.png",
    kelas: "",
  },
  {
    nama: "Labolatorium Komputer",
    img: "/images/facilities/lab komputer smanda.jpg",
    kelas: "",
  },
  {
    nama: "Aula",
    img: "/images/facilities/aula smanda.jpg",
    kelas: "",
  },
];

const kontak = [
  {
    label: "Alamat",
    nilai: "Jl. Sendangguwo Baru I No.1, Gemah, Kecamatan Pedurungan, Kota Semarang, Jawa Tengah",
    icon: "M12 21s-6-5.2-6-10a6 6 0 1 1 12 0c0 4.8-6 10-6 10zM12 11.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
  },
  {
    label: "Telepon",
    nilai: "(024) 6715994",
    icon: "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z",
  },
  {
    label: "Email",
    nilai: " admin@sma2smg.sch.id",
    icon: "M4 6h16v12H4zM4 7l8 6 8-6",
  },
  {
    label: "Jam Layanan",
    nilai: "Senin – Jumat, 07.00 – 15.00 WIB",
    icon: "M12 7v5l3 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z",
  },
];

export const metadata = {
  title: "Tentang Sekolah",
  description:
    "Profil, visi, misi, sejarah, ekstrakurikuler, dan kontak SMAN 2 Semarang.",
};

export default function AboutPage() {
  return (
    <>
      {/* ============ HEADER HALAMAN ============ */}
      <section className="relative isolate overflow-hidden bg-navy text-white">
        <Image
          src="/images/school/gedung%20smanda.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover opacity-40"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/90 to-navy/40" />

        <div className="container-page py-20 md:py-28">
          <nav aria-label="Breadcrumb" className="text-sm text-blue-200">
            <Link href="/" className="transition hover:text-gold">
              Beranda
            </Link>
            <span className="mx-2 text-gold">›</span>
            <span className="text-white">Tentang Sekolah</span>
          </nav>

          <p className="section-label mt-8 !text-gold">Tentang Sekolah</p>

          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-6xl">
            Mengenal lebih dekat{" "}
            <span className="italic text-gold">SMAN 2 Semarang</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100 md:text-lg">
            Mengenal lingkungan pendidikan, nilai, serta komitmen sekolah dalam
            mendukung perkembangan peserta didik.
          </p>
        </div>

        <div className="flex h-1.5">
          <span className="flex-[5] bg-royal" />
          <span className="flex-[2] bg-sky" />
          <span className="flex-1 bg-brand-red" />
          <span className="flex-1 bg-gold" />
        </div>
      </section>

      <AnchorNav />

      {/* ============ PROFIL ============ */}
      <section id="profil" className="scroll-mt-32 bg-cream py-20 sm:py-24">
        <div className="container-page grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal>
            <p className="section-label">Profil Sekolah</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-navy sm:text-4xl lg:text-5xl">
              Tempat belajar, bertumbuh, dan{" "}
              <span className="italic text-royal">berprestasi</span>
            </h2>

            <div className="relative mt-8 aspect-[16/10] overflow-hidden bg-sand shadow-xl shadow-navy/15">
              <Image
                src="/images/school/halaman%20depan%20smanda.png"
                alt="Halaman depan SMAN 2 Semarang"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
              <span className="absolute left-0 top-0 h-1.5 w-24 bg-gold" />
              <span className="absolute left-24 top-0 h-1.5 w-10 bg-brand-red" />
            </div>

            <p className="mt-8 text-sm leading-8 text-slate-600 sm:text-base">
              SMA Negeri 2 Semarang adalah sekolah menengah atas negeri di Kota
              Semarang, Jawa Tengah. Sekolah ini menjadi tempat bagi peserta
              didik untuk mengembangkan pengetahuan, karakter, keterampilan, dan
              potensi diri melalui kegiatan belajar serta berbagai aktivitas
              sekolah.
            </p>

            {/* ISI: tambahkan profil resmi sekolah di sini */}
            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
              Halaman ini memuat informasi mengenai identitas, visi dan misi,
              sejarah, lingkungan, kegiatan ekstrakurikuler, serta kontak
              sekolah.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <aside className="overflow-hidden border border-navy/10 bg-white shadow-xl shadow-navy/10 lg:sticky lg:top-40">
              <div className="flex items-center justify-between bg-navy px-6 py-5 text-white">
                <h3 className="font-display text-xl font-semibold">
                  Data Sekolah
                </h3>
                <span className="h-1.5 w-12 bg-gold" />
              </div>

              <dl className="divide-y divide-navy/10 px-6">
                {dataSekolah.map((d) => (
                  <div
                    key={d.label}
                    className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                  >
                    <dt className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {d.label}
                    </dt>
                    <dd
                      className={`text-sm sm:text-right ${
                        d.nilai
                          ? "font-semibold text-navy"
                          : "italic text-slate-400"
                      }`}
                    >
                      {d.nilai || "Belum diisi"}
                    </dd>
                  </div>
                ))}
              </dl>
            </aside>
          </Reveal>
        </div>
      </section>

      {/* ============ VISI, MISI, NILAI ============ */}
      <section id="visi-misi" className="scroll-mt-32 bg-white py-20 sm:py-24">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <p className="section-label">Arah Pendidikan</p>
            <h2 className="mt-4 text-3xl font-semibold text-navy sm:text-4xl lg:text-5xl">
              Visi dan <span className="italic text-royal">Misi</span>
            </h2>
            {/* ISI: ganti dengan visi dan misi resmi sekolah */}
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-5">
            <Reveal className="lg:col-span-2">
              <article className="relative h-full overflow-hidden bg-navy p-8 text-white sm:p-10">
                <span
                  aria-hidden="true"
                  className="absolute -right-2 -top-6 font-display text-[10rem] leading-none text-gold/20"
                >
                  &rdquo;
                </span>
                <p className="relative text-xs font-bold tracking-[0.18em] text-gold">
                  VISI
                </p>
                <p className="relative mt-5 font-display text-2xl font-medium leading-snug sm:text-3xl">
                  {visi}
                </p>
                <div className="relative mt-8 flex h-1.5 w-28">
                  <span className="flex-[3] bg-royal" />
                  <span className="flex-1 bg-brand-red" />
                  <span className="flex-1 bg-gold" />
                </div>
              </article>
            </Reveal>

            <Reveal delay={120} className="lg:col-span-3">
              <article className="h-full border border-navy/10 bg-cream p-8 sm:p-10">
                <p className="text-xs font-bold tracking-[0.18em] text-royal">
                  MISI
                </p>
                <ol className="mt-4">
                  {misi.map((item, i) => (
                    <li
                      key={item}
                      className="group flex gap-5 border-b border-navy/10 py-4 last:border-0"
                    >
                      <span className="font-display text-2xl font-semibold text-gold transition group-hover:text-royal">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="pt-1 text-sm leading-7 text-slate-700 transition group-hover:translate-x-1 sm:text-base">
                        {item}
                      </span>
                    </li>
                  ))}
                </ol>
              </article>
            </Reveal>
          </div>

          {/* Nilai */}
          <Reveal className="mt-20 max-w-2xl">
            <p className="section-label">Nilai yang Dikembangkan</p>
            <h3 className="mt-4 text-2xl font-semibold text-navy sm:text-3xl lg:text-4xl">
              Prinsip dalam lingkungan belajar
            </h3>
          </Reveal>

          <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
            {nilaiSekolah.map((n, i) => (
              <Reveal key={n.nomor} delay={i * 120}>
                <article className="group relative h-full border-t-2 border-navy/15 pt-6">
                  <span className="absolute -top-[2px] left-0 h-[2px] w-0 bg-gold transition-all duration-500 group-hover:w-full" />
                  <p className="font-display text-7xl font-semibold leading-none text-transparent [-webkit-text-stroke:1.5px_var(--color-royal)] transition group-hover:text-royal/10">
                    {n.nomor}
                  </p>
                  <h4 className="mt-5 font-display text-2xl font-semibold text-navy">
                    {n.judul}
                  </h4>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {n.deskripsi}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SEJARAH ============ */}
      <section id="sejarah" className="scroll-mt-32 bg-sand py-20 sm:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <p className="section-label">Sejarah</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-navy sm:text-4xl lg:text-5xl">
              Perjalanan <span className="italic text-royal">sekolah</span> kami
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
              Jejak perjalanan SMAN 2 Semarang dari awal berdiri hingga saat
              ini.
            </p>
          </Reveal>

          <ol className="relative border-l-2 border-navy/20 pl-8 sm:pl-10">
            {sejarah.map((s, i) => (
              <Reveal key={s.judul} delay={i * 100}>
                <li className="relative pb-10 last:pb-0">
                  <span className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full bg-gold ring-4 ring-sand sm:-left-[49px]" />
                  <p className="font-display text-2xl font-semibold text-royal">
                    {s.tahun}
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-navy">
                    {s.judul}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {s.teks}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ LINGKUNGAN / GALERI ============ */}
      <section id="lingkungan" className="scroll-mt-32 bg-white py-20 sm:py-24">
        <div className="container-page">
          <Reveal className="mb-10 max-w-2xl">
            <p className="section-label">Lingkungan Sekolah</p>
            <h2 className="mt-4 text-3xl font-semibold text-navy sm:text-4xl lg:text-5xl">
              Sekilas <span className="italic text-royal">suasana</span> sekolah
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid auto-rows-[170px] grid-cols-2 gap-3 sm:auto-rows-[200px] md:grid-cols-4 md:gap-4">
              {galeri.map((g) => (
                <figure
                  key={g.nama}
                  className={`group relative overflow-hidden bg-sand ${g.kelas}`}
                >
                  <Image
                    src={g.img}
                    alt={g.nama}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-70 transition group-hover:opacity-100" />
                  <figcaption className="absolute bottom-3 left-4 font-display text-lg font-semibold text-white">
                    {g.nama}
                  </figcaption>
                </figure>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ EKSTRAKURIKULER ============ */}
      <section
        id="ekstrakurikuler"
        className="scroll-mt-32 bg-cream py-20 sm:py-24"
      >
        <div className="container-page">
          <Reveal className="mb-10 max-w-2xl">
            <p className="section-label">Pengembangan Diri</p>
            <h2 className="mt-4 text-3xl font-semibold text-navy sm:text-4xl lg:text-5xl">
              Kegiatan <span className="italic text-royal">ekstrakurikuler</span>
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Pilih kategori untuk melihat kegiatan yang tersedia bagi siswa.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <EkskulFilter />
          </Reveal>
        </div>
      </section>

      {/* ============ KONTAK & LOKASI ============ */}
      <section id="kontak" className="scroll-mt-32 bg-sand py-20 sm:py-24">
        <div className="container-page">
          <Reveal className="mb-10 max-w-2xl">
            <p className="section-label">Kontak</p>
            <h2 className="mt-4 text-3xl font-semibold text-navy sm:text-4xl lg:text-5xl">
              Hubungi dan <span className="italic text-royal">kunjungi</span>{" "}
              kami
            </h2>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <ul className="space-y-3">
                {kontak.map((k) => (
                  <li
                    key={k.label}
                    className="flex gap-4 border border-navy/10 bg-white p-5"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-navy text-gold">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                        aria-hidden="true"
                      >
                        <path d={k.icon} />
                      </svg>
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        {k.label}
                      </p>
                      <p className="mt-1 text-sm font-semibold leading-6 text-navy">
                        {k.nilai}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <a
                href="https://www.google.com/maps/search/?api=1&query=SMA+Negeri+2+Semarang"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-5 inline-flex items-center gap-3 rounded-lg bg-navy px-6 py-3.5 text-sm font-bold text-white transition hover:bg-royal"
              >
                Buka di Google Maps
                <span
                  aria-hidden="true"
                  className="transition group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </Reveal>

            <Reveal delay={120}>
              <div className="relative h-[360px] overflow-hidden border border-navy/10 bg-white shadow-xl shadow-navy/10 lg:h-full lg:min-h-[420px]">
                <iframe
                  title="Lokasi SMAN 2 Semarang"
                  src="https://www.google.com/maps?q=SMA+Negeri+2+Semarang&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full border-0"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}