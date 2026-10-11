import Image from "next/image";
import Reveal from "./Reveal";

/*
  Komponen Sambutan Kepala Sekolah (reusable).
  Props:
    nama      : nama kepala sekolah
    jabatan   : jabatan (default "Kepala SMA Negeri 2 Semarang")
    foto      : alamat foto, misalnya "/images/school/kepala-sekolah.jpg"
                (kosongkan / null jika belum ada, akan tampil placeholder)
    paragraf  : array teks sambutan
*/
export default function Sambutan({
  nama = "Nama Kepala Sekolah",
  jabatan = "Kepala SMA Negeri 2 Semarang",
  foto = null,
  paragraf = [],
}) {
  return (
    <section className="bg-navy bg-modern-navy py-20 text-white sm:py-24 lg:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[360px_1fr] lg:gap-20">
        {/* Foto */}
        <Reveal className="relative mx-auto w-full max-w-xs sm:max-w-sm">
          <div className="absolute -bottom-4 -right-4 h-full w-full border-2 border-gold/70" />

          <div className="relative aspect-[4/5] overflow-hidden bg-royal/30 shadow-2xl shadow-black/30">
            {foto ? (
              <Image
                src={foto}
                alt={`Foto ${nama}`}
                fill
                quality={90}
                sizes="(max-width: 1024px) 80vw, 360px"
                className="object-cover"
              />
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-3 text-blue-200">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  className="h-24 w-24"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
                </svg>
                <span className="text-xs font-bold tracking-wider">
                  FOTO KEPALA SEKOLAH
                </span>
              </div>
            )}
            <span className="absolute left-0 top-0 h-1.5 w-24 bg-gold" />
            <span className="absolute left-24 top-0 h-1.5 w-10 bg-brand-red" />
          </div>
        </Reveal>

        {/* Teks sambutan */}
        <Reveal delay={120}>
          <p className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.16em] text-gold">
            <span className="h-[3px] w-8 bg-brand-red" />
            SAMBUTAN KEPALA SEKOLAH
          </p>

          <div className="relative mt-5">
            <span
              aria-hidden="true"
              className="absolute -left-2 -top-10 font-display text-8xl leading-none text-gold/30 sm:-top-12 sm:text-9xl"
            >
              &ldquo;
            </span>

            <h2 className="relative text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Selamat datang di{" "}
              <span className="italic text-gold">rumah belajar kami</span>
            </h2>
          </div>

          <div className="mt-6 space-y-4 text-sm leading-8 text-blue-100 sm:text-base">
            {paragraf.map((teks, i) => (
              <p key={i}>{teks}</p>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-4 border-t border-white/20 pt-6">
            <span className="h-12 w-1.5 bg-gold" />
            <div>
              <p className="font-display text-xl font-semibold">{nama}</p>
              <p className="text-sm text-blue-200">{jabatan}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}