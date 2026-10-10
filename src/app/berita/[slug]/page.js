
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import berita from "../../../data/berita";

export function generateStaticParams() {
  return berita.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = berita.find((beritaItem) => beritaItem.slug === slug);

  if (!item) {
    return {
      title: "Berita Tidak Ditemukan",
    };
  }

  return {
    title: item.judul,
    description: item.ringkasan,
  };
}

export default async function DetailBeritaPage({ params }) {
  const { slug } = await params;

  const item = berita.find((beritaItem) => beritaItem.slug === slug);

  if (!item) {
    notFound();
  }

  const tanggalFormat = new Date(
    `${item.tanggal}T00:00:00`
  ).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <article className="min-h-screen bg-white">
      <section className="bg-slate-900 px-6 py-12 text-white md:py-16">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/berita"
            className="inline-flex items-center gap-2 text-sm font-semibold text-sky-300 transition hover:text-white"
          >
            <span aria-hidden="true">←</span>
            Kembali ke Daftar Berita
          </Link>

          <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-sky-300">
            {item.kategori}
          </p>

          <h1 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
            {item.judul}
          </h1>

          <p className="mt-5 text-sm text-slate-300">
            Dipublikasikan pada {tanggalFormat}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-6 py-10 md:py-14">
        <div className="relative aspect-video overflow-hidden rounded-2xl bg-slate-100">
          <Image
            src={item.gambar}
            alt={item.judul}
            fill
            priority
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-cover"
          />
        </div>

        <p className="mt-8 border-l-4 border-sky-600 pl-5 text-lg leading-8 text-slate-700">
          {item.ringkasan}
        </p>

        <div className="mt-8 space-y-5">
          {item.isi.map((paragraf, index) => (
            <p
              key={index}
              className="text-base leading-8 text-slate-600"
            >
              {paragraf}
            </p>
          ))}
        </div>

        <div className="mt-12 border-t border-slate-200 pt-8">
          <Link
            href="/berita"
            className="inline-flex rounded-xl bg-sky-700 px-6 py-3 font-semibold text-white transition hover:bg-sky-800"
          >
            Lihat Berita Lainnya
          </Link>
        </div>

        <p className="mt-8 text-xs leading-6 text-slate-500">
          Catatan: konten berita ini merupakan data simulasi untuk
          pengembangan website. Perbarui dengan informasi dan dokumentasi
          resmi sekolah sebelum website dipublikasikan.
        </p>
      </div>
    </article>
  );
}
