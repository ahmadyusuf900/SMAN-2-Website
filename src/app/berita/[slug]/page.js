import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import NewsCard from "../../../components/NewsCard";
import Reveal from "../../../components/Reveal";
import {
  formatTanggal,
  getBeritaBySlug,
  getBeritaTerurut,
  warnaKategori,
} from "../../../lib/Helperberita";

export async function generateStaticParams() {
  return getBeritaTerurut().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const berita = getBeritaBySlug(slug);

  if (!berita) return { title: "Berita tidak ditemukan" };

  return {
    title: berita.judul,
    description: berita.ringkasan,
    openGraph: {
      title: berita.judul,
      description: berita.ringkasan,
      images: [berita.gambar],
    },
  };
}

export default async function BeritaDetailPage({ params }) {
  const { slug } = await params;
  const berita = getBeritaBySlug(slug);

  if (!berita) notFound();

  const lainnya = getBeritaTerurut()
    .filter((item) => item.slug !== slug)
    .slice(0, 3);

  return (
    <>
      {/* Header artikel */}
      <section className="bg-modern-navy pb-28 pt-14 text-white sm:pb-32 sm:pt-16">
        <div className="container-page">
          <nav aria-label="Breadcrumb" className="text-sm text-blue-200">
            <Link href="/" className="transition hover:text-gold">
              Beranda
            </Link>
            <span className="mx-2 text-gold">›</span>
            <Link href="/berita" className="transition hover:text-gold">
              Berita
            </Link>
          </nav>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-[0.14em]">
            <span className="flex items-center bg-white text-navy">
              <span
                className={`mr-2.5 h-full w-1.5 self-stretch ${warnaKategori(
                  berita.kategori
                )}`}
              />
              <span className="py-1.5 pr-3">{berita.kategori}</span>
            </span>
            <time dateTime={berita.tanggal} className="text-gold">
              {formatTanggal(berita.tanggal)}
            </time>
          </div>

          <h1 className="mt-5 max-w-4xl text-3xl font-semibold leading-[1.15] sm:text-4xl lg:text-5xl">
            {berita.judul}
          </h1>
        </div>
      </section>

      {/* Gambar + isi */}
      <section className="bg-cream pb-16 sm:pb-24">
        <div className="container-page">
          <div className="relative z-10 mx-auto -mt-20 aspect-[16/9] max-w-4xl overflow-hidden bg-sand shadow-2xl shadow-navy/20 sm:-mt-24">
            <Image
              src={berita.gambar}
              alt={berita.judul}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
            />
            <span className="absolute left-0 top-0 h-1.5 w-24 bg-gold" />
            <span className="absolute left-24 top-0 h-1.5 w-10 bg-brand-red" />
          </div>

          <article className="mx-auto mt-10 max-w-3xl sm:mt-14">
            <p className="border-l-4 border-gold pl-5 font-display text-xl font-medium leading-snug text-navy sm:text-2xl">
              {berita.ringkasan}
            </p>

            <div className="mt-10 space-y-6">
              {berita.isi.map((paragraf, i) => (
                <p
                  key={i}
                  className={`text-base leading-8 text-slate-700 sm:text-lg sm:leading-9 ${
                    i === 0
                      ? "first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-6xl first-letter:font-semibold first-letter:leading-[0.85] first-letter:text-royal"
                      : ""
                  }`}
                >
                  {paragraf}
                </p>
              ))}
            </div>

            <div className="mt-12 flex items-center justify-between border-t border-navy/15 pt-6">
              <Link
                href="/berita"
                className="group inline-flex items-center gap-2 text-sm font-bold text-navy transition hover:text-royal"
              >
                <span
                  aria-hidden="true"
                  className="transition group-hover:-translate-x-1"
                >
                  ←
                </span>
                Kembali ke semua berita
              </Link>
              <div className="flex h-1.5 w-20">
                <span className="flex-[3] bg-royal" />
                <span className="flex-1 bg-brand-red" />
                <span className="flex-1 bg-gold" />
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Berita lainnya */}
      {lainnya.length > 0 && (
        <section className="bg-sand py-16 sm:py-20">
          <div className="container-page">
            <Reveal>
              <p className="section-label">Baca Juga</p>
              <h2 className="mt-4 text-3xl font-semibold text-navy sm:text-4xl">
                Berita <span className="italic text-royal">lainnya</span>
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {lainnya.map((item, i) => (
                <Reveal key={item.slug} delay={i * 100}>
                  <NewsCard berita={item} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}