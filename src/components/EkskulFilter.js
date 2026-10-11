"use client";

import { useState } from "react";

// CONTOH. Sesuaikan dengan ekstrakurikuler yang benar-benar ada di sekolah.
const kegiatan = [
  { nama: "OSIS", kategori: "Organisasi" },
  { nama: "Pramuka", kategori: "Organisasi" },
  { nama: "PMR", kategori: "Organisasi" },
  { nama: "Paskibra", kategori: "Organisasi" },
  { nama: "Basket", kategori: "Olahraga" },
  { nama: "Futsal", kategori: "Olahraga" },
  { nama: "Voli", kategori: "Olahraga" },
  { nama: "Paduan Suara", kategori: "Seni" },
  { nama: "Seni Tari", kategori: "Seni" },
  { nama: "Band", kategori: "Seni" },
  { nama: "Cheers", kategori: "Seni" },
  { nama: "Teater", kategori: "Seni" },
  { nama: "Karya Ilmiah Remaja", kategori: "Akademik" },
  { nama: "SWAT", kategori: "Akademik" },
];

const kategori = ["Semua", "Akademik", "Olahraga", "Seni", "Organisasi"];

const warna = {
  Akademik: "bg-gold",
  Olahraga: "bg-royal",
  Seni: "bg-brand-red",
  Organisasi: "bg-sky",
};

export default function EkskulFilter() {
  const [aktif, setAktif] = useState("Semua");

  const tampil =
    aktif === "Semua" ? kegiatan : kegiatan.filter((k) => k.kategori === aktif);

  return (
    <div>
      <div
        role="tablist"
        aria-label="Filter kategori"
        className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:px-0"
      >
        {kategori.map((k) => (
          <button
            key={k}
            type="button"
            role="tab"
            aria-selected={aktif === k}
            onClick={() => setAktif(k)}
            className={`shrink-0 rounded-full border px-5 py-2 text-sm font-bold transition ${
              aktif === k
                ? "border-navy bg-navy text-white"
                : "border-navy/20 bg-white text-navy hover:border-royal hover:text-royal"
            }`}
          >
            {k}
          </button>
        ))}
      </div>

      <p className="mt-5 text-sm text-slate-500">
        Menampilkan {tampil.length} kegiatan
      </p>

      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {tampil.map((k) => (
          <div
            key={k.nama}
            className="group relative overflow-hidden rounded-lg border border-navy/10 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-navy hover:shadow-lg hover:shadow-navy/10"
          >
            <span
              className={`absolute left-0 top-0 h-full w-1 ${warna[k.kategori]}`}
            />
            <p className="pl-2 font-display text-lg font-semibold leading-snug text-navy">
              {k.nama}
            </p>
            <p className="mt-1 pl-2 text-xs font-bold uppercase tracking-wider text-slate-400">
              {k.kategori}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}