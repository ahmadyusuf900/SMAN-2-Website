
import Image from "next/image";
import Link from "next/link";
import berita from "../data/berita";
import NewsCard from "../components/NewsCard";

export default function Home() {
  const beritaTerbaru = [...berita]
    .sort((a, b) => b.tanggal.localeCompare(a.tanggal))
    .slice(0, 3);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-slate-950">
        <Image
          src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2000&q=85"
          alt="Gedung sekolah sebagai ilustrasi banner SMAN 2 Semarang"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/30" />

        <div className="relative mx-auto flex min-h-[520px] max-w-7xl items-center px-5 py-20 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              Website Profil Sekolah
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Selamat Datang di
              <span className="mt-2 block text-blue-300">
                SMAN 2 Semarang
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              Mewujudkan lingkungan pendidikan yang mendukung
              prestasi, karakter, kreativitas, dan pengembangan
              potensi setiap peserta didik.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="rounded-xl bg-blue-700 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-600"
              >
                Mengenal Sekolah
              </Link>

              <Link
                href="/berita"
                className="rounded-xl border border-white/60 bg-white/10 px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Jelajahi Berita
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
        <div className="relative min-h-[300px] overflow-hidden rounded-3xl bg-slate-100 sm:min-h-[400px]">
          <Image
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80"
            alt="Ilustrasi kegiatan pembelajaran di sekolah"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-800">
            Sambutan dan Profil
          </p>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-slate-950 sm:text-4xl">
            Tempat Bertumbuh, Belajar, dan Berprestasi
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Selamat datang di website profil SMAN 2 Semarang.
            Website ini menjadi sarana informasi mengenai profil
            sekolah, kegiatan peserta didik, prestasi, dan berbagai
            informasi pendidikan.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Kami percaya bahwa pendidikan tidak hanya berfokus pada
            pengetahuan, tetapi juga pada karakter, kreativitas,
            kedisiplinan, dan kepedulian terhadap sesama.
          </p>

          <Link
            href="/about"
            className="mt-7 inline-flex items-center gap-2 font-semibold text-blue-900 hover:text-blue-700"
          >
            Lihat profil sekolah
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-800">
                Informasi Sekolah
              </p>

              <h2 className="mt-3 text-3xl font-extrabold text-slate-950 sm:text-4xl">
                Sekolah dalam Sekilas
              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                Informasi ringkas untuk mengenal lingkungan dan
                kegiatan sekolah.
              </p>
            </div>

            <Link
              href="/about"
              className="font-semibold text-blue-900 hover:text-blue-700"
            >
              Profil lengkap →
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-900">
                <span className="text-xl font-bold">01</span>
              </div>

              <h3 className="mt-5 text-lg font-bold text-slate-900">
                Pendidikan Berkualitas
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                Mendukung proses belajar yang mendorong pengetahuan,
                keterampilan, dan perkembangan karakter peserta didik.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-900">
                <span className="text-xl font-bold">02</span>
              </div>

              <h3 className="mt-5 text-lg font-bold text-slate-900">
                Pengembangan Potensi
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                Memberikan ruang bagi siswa untuk mengembangkan minat,
                bakat, kreativitas, dan kemampuan berorganisasi.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-6 sm:col-span-2 lg:col-span-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-900">
                <span className="text-xl font-bold">03</span>
              </div>

              <h3 className="mt-5 text-lg font-bold text-slate-900">
                Karakter dan Prestasi
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                Mendorong kedisiplinan, tanggung jawab, kerja sama,
                dan semangat untuk meraih prestasi.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-800">
              Kabar Sekolah
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-950 sm:text-4xl">
              Berita Terbaru
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
              Informasi dan kegiatan sekolah yang ditampilkan
              menggunakan data simulasi.
            </p>
          </div>

          <Link
            href="/berita"
            className="font-semibold text-blue-900 hover:text-blue-700"
          >
            Semua berita →
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {beritaTerbaru.map((item) => (
            <NewsCard key={item.slug} berita={item} />
          ))}
        </div>
      </section>

      <section className="bg-blue-950 px-5 py-14 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">
              Kenali SMAN 2 Semarang Lebih Dekat
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-blue-100">
              Temukan informasi mengenai profil, lingkungan,
              program, dan kegiatan sekolah.
            </p>
          </div>

          <Link
            href="/about"
            className="inline-flex shrink-0 items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-blue-950 transition hover:bg-blue-100"
          >
            Tentang Sekolah
          </Link>
        </div>
      </section>
    </>
  );
}