import berita from "../data/berita";

// Format tanggal: 2026-09-28 -> 28 September 2026
export function formatTanggal(tanggal) {
  return new Date(`${tanggal}T00:00:00`).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// Warna penanda tiap kategori (class ditulis utuh agar terbaca Tailwind)
const warnaMap = {
  Prestasi: "bg-gold",
  Kegiatan: "bg-royal",
  Organisasi: "bg-sky",
  Lingkungan: "bg-sky",
  Kreativitas: "bg-brand-red",
  Olahraga: "bg-royal",
};

export function warnaKategori(kategori) {
  return warnaMap[kategori] ?? "bg-royal";
}

// Berita diurutkan dari yang terbaru
export function getBeritaTerurut() {
  return [...berita].sort((a, b) => b.tanggal.localeCompare(a.tanggal));
}

export function getBeritaBySlug(slug) {
  return berita.find((item) => item.slug === slug);
}