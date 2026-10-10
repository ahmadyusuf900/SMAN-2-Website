
import Image from "next/image";
import Link from "next/link";

export default function NewsCard({ berita }) {
  const tanggal = new Date(
    `${berita.tanggal}T00:00:00`
  ).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <Link
        href={`/berita/${berita.slug}`}
        className="relative block aspect-[16/10] overflow-hidden bg-slate-100"
      >
        <Image
          src={berita.gambar}
          alt={berita.judul}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </Link>

      <div className="p-5">
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
          <span className="rounded-full bg-blue-50 px-3 py-1 font-semibold text-blue-900">
            {berita.kategori}
          </span>

          <time dateTime={berita.tanggal}>
            {tanggal}
          </time>
        </div>

        <h3 className="mt-4 text-lg font-bold leading-7 text-slate-900">
          <Link
            href={`/berita/${berita.slug}`}
            className="transition-colors hover:text-blue-800"
          >
            {berita.judul}
          </Link>
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-600">
          {berita.ringkasan}
        </p>

        <Link
          href={`/berita/${berita.slug}`}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-900 hover:text-blue-700"
        >
          Baca selengkapnya
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}