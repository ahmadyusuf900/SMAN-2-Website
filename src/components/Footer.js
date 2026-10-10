
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
        <div>
          <h2 className="text-lg font-bold tracking-wide">
            SMAN 2 SEMARANG
          </h2>

          <p className="mt-3 max-w-sm text-sm leading-6 text-slate-300">
            Website profil sekolah yang menyajikan informasi,
            kegiatan, prestasi, dan berita sekolah.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Navigasi</h3>

          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>
              <a href="/" className="transition hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="transition hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="/berita" className="transition hover:text-white">
                Berita
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Alamat Sekolah</h3>

          <p className="mt-3 text-sm leading-6 text-slate-300">
            Semarang, Jawa Tengah
          </p>

          <p className="mt-2 text-xs text-slate-400">
            Data alamat sementara — silakan sesuaikan dengan alamat resmi.
          </p>
        </div>
      </div>

      <div className="border-t border-slate-800 px-5 py-4 text-center text-xs text-slate-400">
        © {currentYear} SMAN 2 Semarang. Seluruh hak cipta dilindungi.
      </div>
    </footer>
  );
}