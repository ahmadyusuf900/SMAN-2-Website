
import Image from "next/image";

const visi = [
  "Mewujudkan peserta didik yang berkarakter, berprestasi, mandiri, dan berwawasan global.",
];

const misi = [
  "Membangun budaya disiplin, tanggung jawab, dan integritas.",
  "Mendorong prestasi akademik dan nonakademik sesuai potensi siswa.",
  "Mengembangkan kreativitas, literasi, dan kemampuan berpikir kritis.",
  "Menciptakan lingkungan belajar yang aman, nyaman, dan inklusif.",
  "Mendorong kepedulian terhadap lingkungan dan masyarakat.",
];

const nilaiSekolah = [
  {
    nomor: "01",
    judul: "Karakter",
    deskripsi:
      "Membiasakan sikap disiplin, jujur, bertanggung jawab, dan saling menghargai.",
  },
  {
    nomor: "02",
    judul: "Prestasi",
    deskripsi:
      "Memberikan ruang bagi siswa untuk berkembang dalam bidang akademik maupun nonakademik.",
  },
  {
    nomor: "03",
    judul: "Kolaborasi",
    deskripsi:
      "Mendorong kerja sama antara siswa, guru, orang tua, dan lingkungan sekolah.",
  },
];

export const metadata = {
  title: "Tentang Sekolah",
  description: "Profil, visi, dan misi SMAN 2 Semarang.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="bg-slate-900 px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">
            Tentang Sekolah
          </p>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            Mengenal Lebih Dekat SMAN 2 Semarang
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            Mengenal lingkungan pendidikan, nilai, serta komitmen sekolah dalam
            mendukung perkembangan peserta didik.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div className="relative min-h-72 overflow-hidden rounded-3xl md:min-h-[420px]">
          <Image
            src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=85"
            alt="Ilustrasi lingkungan pendidikan"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-700">
            Profil Sekolah
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
            Tempat Belajar, Bertumbuh, dan Berprestasi
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            SMAN 2 Semarang merupakan nama sekolah yang menjadi fokus website
            profil ini. Halaman ini nantinya dapat memuat informasi resmi
            mengenai identitas, sejarah, fasilitas, kegiatan, dan perkembangan
            sekolah.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Informasi sejarah dan identitas resmi perlu disesuaikan dengan
            sumber sekolah agar konten website akurat dan dapat
            dipertanggungjawabkan.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-700">
              Arah Pendidikan
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              Visi dan Misi
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Rumusan berikut adalah contoh sementara untuk kebutuhan desain.
              Ganti dengan visi dan misi resmi sekolah.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl bg-slate-900 p-8 text-white">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500 text-xl font-bold">
                V
              </div>

              <h3 className="text-2xl font-bold">Visi</h3>

              {visi.map((item, index) => (
                <p key={index} className="mt-4 leading-8 text-slate-200">
                  {item}
                </p>
              ))}
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-xl font-bold text-sky-800">
                M
              </div>

              <h3 className="text-2xl font-bold text-slate-900">Misi</h3>

              <ul className="mt-5 space-y-4">
                {misi.map((item, index) => (
                  <li key={index} className="flex gap-3 leading-7 text-slate-600">
                    <span className="font-bold text-sky-700">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-700">
            Nilai yang Dikembangkan
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
            Prinsip dalam Lingkungan Belajar
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {nilaiSekolah.map((nilai) => (
            <article
              key={nilai.nomor}
              className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-bold tracking-widest text-sky-700">
                {nilai.nomor}
              </p>
              <h3 className="mt-4 text-xl font-bold text-slate-900">
                {nilai.judul}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                {nilai.deskripsi}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-sky-50 px-6 py-14">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Informasi Sekolah
            </h2>
            <p className="mt-2 leading-7 text-slate-600">
              Alamat, kontak, dan informasi resmi sekolah dapat ditambahkan di
              bagian ini setelah datanya diverifikasi.
            </p>
          </div>

          <div className="rounded-xl border border-sky-200 bg-white px-5 py-4">
            <p className="font-semibold text-slate-900">SMAN 2 Semarang</p>
            <p className="mt-1 text-sm text-slate-600">
              Semarang, Jawa Tengah
            </p>
            <p className="mt-2 text-xs text-slate-500">
              Alamat sementara — perlu diverifikasi.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}