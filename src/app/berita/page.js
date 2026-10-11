import Link from "next/link";
import BeritaList from "../../components/BeritaList";
import Reveal from "../../components/Reveal";
import { getBeritaTerurut } from "../../lib/Helperberita";

export const metadata = {
  title: "Berita",
  description:
    "Berita, kegiatan, dan informasi terbaru dari lingkungan SMAN 2 Semarang.",
};

export default function BeritaPage() {
  const items = getBeritaTerurut();

  return (
    <>
      {/* Header halaman */}
      <section className="bg-modern-navy text-white">
        <div className="container-page py-20 md:py-24">
          <nav aria-label="Breadcrumb" className="text-sm text-blue-200">
            <Link href="/" className="transition hover:text-gold">
              Beranda
            </Link>
            <span className="mx-2 text-gold">›</span>
            <span className="text-white">Berita</span>
          </nav>

          <p className="section-label mt-8 !text-gold">Kabar Sekolah</p>

          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-6xl">
            Berita dan <span className="italic text-gold">kegiatan</span>{" "}
            terbaru
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100 md:text-lg">
            Ikuti informasi, prestasi, dan cerita dari lingkungan SMAN 2
            Semarang.
          </p>
        </div>

        <div className="flex h-1.5">
          <span className="flex-[5] bg-royal" />
          <span className="flex-[2] bg-sky" />
          <span className="flex-1 bg-brand-red" />
          <span className="flex-1 bg-gold" />
        </div>
      </section>

      <section className="bg-cream py-14 sm:py-20">
        <div className="container-page">
          <BeritaList items={items} />

          <Reveal>
            <p className="mt-10 text-xs leading-6 text-slate-500">
              Catatan: berita yang ditampilkan saat ini merupakan konten
              simulasi dan perlu diganti dengan informasi resmi sekolah.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}