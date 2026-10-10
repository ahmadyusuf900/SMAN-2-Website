
import Link from "next/link";
import NewsCard from "../../components/NewsCard";
import berita from "../../data/berita";

export const metadata = {
  title: "Berita Sekolah",
  description: "Informasi dan kegiatan SMAN 2 Semarang.",
};

export default function BeritaPage() {
  const daftarBerita = [...berita].sort(
    (a, b) => new Date(b.tanggal) - new Date(a.tanggal)
  );

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-slate-900 px-6 py-16 text-white md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">
            Informasi Sekolah
          </p>

          <h1 className="mt-4 text-4xl font-bold md:text-6xl">
            Berita dan Kegiatan
          </h1>

          <p className="mt-5 max-w-2xl leading-8 text-slate-300">
            Ikuti informasi, kegiatan, dan cerita perkembangan warga sekolah
            melalui halaman berita SMAN 2 Semarang.
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex rounded-xl border border-slate-500 px-5 py-3 font-semibold transition hover:bg-white hover:text-slate-900"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-700">
              Arsip Berita
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900 md:text-3xl">
              Semua Berita
            </h2>
          </div>

          <p className="text-sm text-slate-500">
            Total {daftarBerita.length} berita
          </p>
        </div>

        {daftarBerita.length > 0 ? (
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {daftarBerita.map((item) => (
              <NewsCard key={item.slug} berita={item} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
            <h3 className="text-xl font-bold text-slate-800">
              Belum ada berita
            </h3>
            <p className="mt-3 text-slate-500">
              Berita sekolah akan ditampilkan di sini setelah tersedia.
            </p>
          </div>
        )}
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-6xl rounded-3xl bg-sky-100 px-6 py-10 text-center md:px-12">
          <h2 className="text-2xl font-bold text-slate-900">
            Ingin kembali ke halaman utama?
          </h2>
          <p className="mt-3 text-slate-600">
            Temukan profil sekolah dan informasi terbaru dari beranda.
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex rounded-xl bg-sky-700 px-6 py-3 font-semibold text-white transition hover:bg-sky-800"
          >
            Kunjungi Beranda
          </Link>
        </div>
      </section>

      <p className="mx-auto max-w-6xl px-6 pb-8 text-xs leading-6 text-slate-500">
        Catatan: berita yang tersedia saat ini merupakan data simulasi untuk
        pengembangan website dan bukan pernyataan bahwa kegiatan tersebut
        benar-benar telah dilaksanakan.
      </p>
    </div>
  );
}
