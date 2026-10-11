"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NewsCard from "./NewsCard";
import { formatTanggal } from "../lib/Helperberita";

export default function BeritaList({ items }) {
  const [kategori, setKategori] = useState("Semua");
  const [query, setQuery] = useState("");

  const daftarKategori = ["Semua", ...new Set(items.map((i) => i.kategori))];
  const q = query.trim().toLowerCase();

  const hasil = items.filter((item) => {
    const cocokKategori = kategori === "Semua" || item.kategori === kategori;
    const cocokCari =
      q === "" || `${item.judul} ${item.ringkasan}`.toLowerCase().includes(q);
    return cocokKategori && cocokCari;
  });

  // Berita utama hanya tampil saat tidak ada filter / pencarian
  const tampilUtama = kategori === "Semua" && q === "";
  const utama = tampilUtama ? hasil[0] : null;
  const daftar = tampilUtama ? hasil.slice(1) : hasil;

  function reset() {
    setKategori("Semua");
    setQuery("");
  }

  return (
    <div>
      {/* Pencarian + filter */}
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div
          role="tablist"
          aria-label="Filter kategori berita"
          className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 lg:mx-0 lg:flex-wrap lg:px-0"
        >
          {daftarKategori.map((k) => (
            <button
              key={k}
              type="button"
              role="tab"
              aria-selected={kategori === k}
              onClick={() => setKategori(k)}
              className={`shrink-0 rounded-full border px-5 py-2 text-sm font-bold transition ${
                kategori === k
                  ? "border-navy bg-navy text-white"
                  : "border-navy/20 bg-white text-navy hover:border-royal hover:text-royal"
              }`}
            >
              {k}
            </button>
          ))}
        </div>

        <label className="relative block w-full lg:w-72">
          <span className="sr-only">Cari berita</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari berita..."
            className="w-full rounded-lg border border-navy/20 bg-white py-3 pl-11 pr-4 text-sm text-navy outline-none transition placeholder:text-slate-400 focus:border-royal focus:ring-2 focus:ring-royal/20"
          />
        </label>
      </div>

      <p className="mt-6 text-sm text-slate-500" aria-live="polite">
        {hasil.length} berita ditemukan
      </p>

      {/* Berita utama */}
      {utama && (
        <Link
          href={`/berita/${utama.slug}`}
          className="group mt-5 grid overflow-hidden bg-navy text-white shadow-xl shadow-navy/15 lg:grid-cols-2"
        >
          <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[380px]">
            <Image
              src={utama.gambar}
              alt={utama.judul}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
            <span className="absolute left-0 top-0 h-1.5 w-24 bg-gold" />
            <span className="absolute left-24 top-0 h-1.5 w-10 bg-brand-red" />
          </div>

          <div className="flex flex-col justify-center p-7 sm:p-10">
            <p className="flex flex-wrap items-center gap-3 text-xs font-bold tracking-[0.16em] text-gold">
              BERITA UTAMA
              <span className="h-3 w-px bg-white/30" />
              <span className="uppercase">{utama.kategori}</span>
            </p>
            <h2 className="mt-4 text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl">
              {utama.judul}
            </h2>
            <p className="mt-4 line-clamp-3 text-sm leading-7 text-blue-100 sm:text-base">
              {utama.ringkasan}
            </p>
            <p className="mt-5 text-xs text-blue-200">
              {formatTanggal(utama.tanggal)}
            </p>
            <span className="mt-6 inline-flex w-fit items-center gap-2 border-b-2 border-gold pb-0.5 text-sm font-bold transition-all group-hover:gap-3">
              Baca selengkapnya <span aria-hidden="true">→</span>
            </span>
          </div>
        </Link>
      )}

      {/* Daftar berita */}
      {daftar.length > 0 && (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {daftar.map((item) => (
            <NewsCard key={item.slug} berita={item} />
          ))}
        </div>
      )}

      {/* Tidak ada hasil */}
      {hasil.length === 0 && (
        <div className="mt-6 border border-dashed border-navy/25 bg-white px-6 py-14 text-center">
          <p className="font-display text-2xl font-semibold text-navy">
            Berita tidak ditemukan
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Coba kata kunci atau kategori lain.
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-5 rounded-lg bg-navy px-5 py-3 text-sm font-bold text-white transition hover:bg-royal"
          >
            Tampilkan semua berita
          </button>
        </div>
      )}
    </div>
  );
}