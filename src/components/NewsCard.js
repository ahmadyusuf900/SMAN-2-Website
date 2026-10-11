import Image from "next/image";
import Link from "next/link";
import { formatTanggal, warnaKategori } from "../lib/Helperberita";

export default function NewsCard({ berita }) {
  const href = `/berita/${berita.slug}`;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-navy/10 bg-white transition duration-300 hover:-translate-y-1.5 hover:border-navy/30 hover:shadow-xl hover:shadow-navy/10">
      <Link
        href={href}
        className="relative block aspect-[16/10] overflow-hidden bg-sand"
        aria-label={`Baca berita: ${berita.judul}`}
      >
        <Image
          src={berita.gambar}
          alt={berita.judul}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
          className="object-cover transition duration-700 group-hover:scale-105"
        />

        <span className="absolute left-0 top-4 flex items-center bg-white pr-3 text-[11px] font-bold uppercase tracking-wider text-navy shadow-sm">
          <span className={`mr-2.5 h-full w-1.5 self-stretch ${warnaKategori(berita.kategori)}`} />
          <span className="py-1.5">{berita.kategori}</span>
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-xs font-semibold text-slate-500">
          <time dateTime={berita.tanggal}>{formatTanggal(berita.tanggal)}</time>
        </p>

        <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-navy transition-colors group-hover:text-royal">
          <Link href={href}>{berita.judul}</Link>
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-600">
          {berita.ringkasan}
        </p>

        <div className="mt-auto pt-6">
          <Link
            href={href}
            className="inline-flex items-center gap-2 border-b-2 border-gold pb-0.5 text-sm font-bold text-navy transition-all hover:gap-3 hover:text-royal"
          >
            Baca selengkapnya
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}