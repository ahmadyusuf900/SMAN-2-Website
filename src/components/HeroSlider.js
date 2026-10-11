"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const DURATION = 3000; // lama tiap slide (ms)

// pos = bagian foto yang dipertahankan saat dipotong:
// object-center | object-left | object-right | object-top | object-bottom
const slides = [
  {
    label: "Sekolah",
    img: "/images/school/tampilandepan.png",
    alt: "Gedung SMAN 2 Semarang",
    pos: "object-center",
    tag: "Selamat Datang di SMAN 2 Semarang",
    title: "Unggul dalam ilmu,",
    accent: "kuat dalam karakter.",
    text: "Ruang untuk belajar, bertumbuh, mengembangkan potensi, dan mempersiapkan generasi muda menghadapi masa depan.",
    cta: { href: "/about", label: "Kenali Sekolah Kami" },
  },
  {
    label: "Lingkungan",
    img: "/images/school/tampilan atas taman.png",
    alt: "Halaman depan SMAN 2 Semarang",
    pos: "object-center",
    tag: "Lingkungan Sekolah",
    title: "Belajar di lingkungan yang",
    accent: "nyaman dan inspiratif.",
    text: "Suasana sekolah yang mendukung siswa belajar, berkarya, dan berkolaborasi setiap hari.",
    cta: { href: "#fasilitas", label: "Lihat Fasilitas" },
  },
  {
    label: "Kegiatan",
    img: "/images/activities/paskib.png",
    alt: "Kegiatan Paskibra siswa SMAN 2 Semarang",
    pos: "object-center",
    tag: "Kegiatan dan Prestasi",
    title: "Ruang untuk siswa",
    accent: "berprestasi dan berkreasi.",
    text: "Ikuti informasi kegiatan dan cerita dari lingkungan SMAN 2 Semarang.",
    cta: { href: "/berita", label: "Baca Berita" },
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const touchX = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const go = useCallback(
    (i) => setIndex((i + slides.length) % slides.length),
    []
  );

  const onTouchStart = (e) => {
    touchX.current = e.touches[0].clientX;
    setPaused(true);
  };
  const onTouchEnd = (e) => {
    if (touchX.current !== null) {
      const diff = e.changedTouches[0].clientX - touchX.current;
      if (Math.abs(diff) > 50) go(diff < 0 ? index + 1 : index - 1);
    }
    touchX.current = null;
    setPaused(false);
  };

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Banner sekolah"
      className="bg-modern-navy text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >

      <div className="container-page relative grid items-center gap-12 pb-44 pt-14 sm:pb-40 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pb-36 lg:pt-20">
        {/* Kolom teks: semua slide ditumpuk agar tinggi tetap stabil */}
        <div className="grid">
          {slides.map((s, i) => {
            const active = i === index;
            return (
              <div
                key={s.label}
                aria-hidden={!active}
                className={`col-start-1 row-start-1 transition-all duration-700 ${
                  active
                    ? "translate-y-0 opacity-100 delay-300"
                    : "pointer-events-none translate-y-5 opacity-0"
                }`}
              >
                <p className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.16em] text-gold">
                  <span className="h-[3px] w-8 bg-brand-red" />
                  {s.tag.toUpperCase()}
                </p>

                <h1 className="mt-5 text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
                  {s.title}{" "}
                  <span className="italic text-gold">{s.accent}</span>
                </h1>

                <p className="mt-6 max-w-lg text-sm leading-7 text-blue-100 sm:text-base sm:leading-8">
                  {s.text}
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={s.cta.href}
                    tabIndex={active ? 0 : -1}
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-bold text-navy transition hover:-translate-y-0.5 hover:bg-gold-dark"
                  >
                    {s.cta.label}
                    <span aria-hidden="true">→</span>
                  </Link>
                  <Link
                    href="/berita"
                    tabIndex={active ? 0 : -1}
                    className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/50 px-6 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-navy"
                  >
                    Berita Terbaru
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Kolom foto: dalam bingkai, ukuran terbatas supaya tetap tajam */}
        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="absolute -right-3 -top-3 h-full w-full border-2 border-gold/70 sm:-right-4 sm:-top-4" />

          <div className="relative aspect-[4/3] overflow-hidden bg-sand shadow-2xl shadow-black/40 lg:aspect-[5/4]">
            {slides.map((s, i) => (
              <Image
                key={s.img}
                src={s.img}
                alt={s.alt}
                fill
                priority
                quality={90}
                sizes="(max-width: 1024px) 100vw, 600px"
                className={`object-cover transition-all duration-[900ms] ease-out ${s.pos} ${
                  i === index ? "scale-100 opacity-100" : "scale-[1.04] opacity-0"
                }`}
              />
            ))}

            <span className="absolute left-0 top-0 h-1.5 w-24 bg-gold" />
            <span className="absolute left-24 top-0 h-1.5 w-10 bg-brand-red" />
          </div>

          {/* Penanda slide yang sedang tampil */}
          <div className="absolute -bottom-5 left-4 flex items-center gap-3 border-l-4 border-brand-red bg-white px-4 py-3 text-navy shadow-xl sm:-left-5">
            <span className="font-display text-2xl font-semibold leading-none text-royal">
              0{index + 1}
              <span className="text-sm text-slate-400"> / 0{slides.length}</span>
            </span>
            <span className="text-xs font-bold uppercase tracking-wider">
              {slides[index].label}
            </span>
          </div>
        </div>
      </div>

      {/* Kontrol: nomor slide + progres + panah */}
      <div className="absolute inset-x-0 bottom-20 z-10 sm:bottom-24">
        <div className="container-page flex items-end justify-between gap-4">
          <div className="flex flex-1 gap-2 sm:flex-none sm:gap-5">
            {slides.map((s, i) => (
              <button
                key={s.label}
                type="button"
                onClick={() => go(i)}
                aria-label={`Slide ${i + 1}: ${s.label}`}
                aria-current={i === index}
                className="group flex-1 text-left sm:w-28 sm:flex-none"
              >
                <span
                  className={`block text-xs font-bold transition-colors ${
                    i === index
                      ? "text-gold"
                      : "text-white/60 group-hover:text-white"
                  }`}
                >
                  0{i + 1}
                  <span className="ml-2 hidden font-semibold sm:inline">
                    {s.label}
                  </span>
                </span>
                <span className="mt-2 block h-[3px] w-full overflow-hidden bg-white/30">
                  {i === index &&
                    (reduced ? (
                      <span className="block h-full w-full bg-gold" />
                    ) : (
                      <span
                        key={index}
                        className="hero-progress block h-full w-full bg-gold"
                        style={{
                          animationDuration: `${DURATION}ms`,
                          animationPlayState: paused ? "paused" : "running",
                        }}
                        onAnimationEnd={() => go(index + 1)}
                      />
                    ))}
                </span>
              </button>
            ))}
          </div>

          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Slide sebelumnya"
              className="flex h-11 w-11 items-center justify-center border border-white/50 text-xl text-white transition hover:bg-gold hover:text-navy"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Slide berikutnya"
              className="flex h-11 w-11 items-center justify-center border border-white/50 text-xl text-white transition hover:bg-gold hover:text-navy"
            >
              ›
            </button>
          </div>
        </div>
      </div>

      {/* Strip empat warna logo */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex h-1.5">
        <span className="flex-[5] bg-royal" />
        <span className="flex-[2] bg-sky" />
        <span className="flex-1 bg-brand-red" />
        <span className="flex-1 bg-gold" />
      </div>
    </section>
  );
}