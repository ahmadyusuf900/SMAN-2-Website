import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-blue-100">
      {/* Strip empat warna logo */}
      <div className="flex h-1.5">
        <span className="flex-[5] bg-royal" />
        <span className="flex-[2] bg-sky" />
        <span className="flex-1 bg-brand-red" />
        <span className="flex-1 bg-gold" />
      </div>

      <div className="container-page grid gap-12 py-14 md:grid-cols-[1.5fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-3">
            <div className="relative h-14 w-14 shrink-0 rounded-full bg-white p-1">
              <Image
                src="/images/school/logo%20smanda%20remove%20bg.png"
                alt="Logo SMAN 2 Semarang"
                fill
                sizes="56px"
                className="object-contain p-1"
              />
            </div>
            <div>
              <p className="font-display text-xl font-semibold text-white">
                SMA Negeri 2 Semarang
              </p>
              <p className="text-[10px] font-bold tracking-[0.14em] text-gold">
                SMANDA BERBUDAYA 🙏
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7">
            Tempat belajar, berkarya, dan mengembangkan potensi diri untuk
            menyiapkan generasi muda menghadapi masa depan.
          </p>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold text-white">
            Tautan
          </h3>
          <span className="mt-2 block h-[3px] w-10 bg-gold" />
          <ul className="mt-5 space-y-3 text-sm">
            {[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about" },
              { label: "Berita", href: "/berita" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="inline-flex items-center gap-2 transition hover:translate-x-1 hover:text-gold"
                >
                  <span aria-hidden="true" className="text-gold">›</span>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold text-white">
            Kontak
          </h3>
          <span className="mt-2 block h-[3px] w-10 bg-gold" />
          {/* ISI DENGAN DATA RESMI SEKOLAH */}
          <ul className="mt-5 space-y-3 text-sm leading-7">
            <li>Jl. Sendangguwo Baru I No.1, Gemah, Kecamatan Pedurungan, Kota Semarang, Jawa Tengah</li>
            <li>Telepon:  (024) 6715994</li>
            <li>Email: admin@sma2smg.sch.id</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <p className="container-page text-center text-xs text-blue-200/80">
          © {year} SMA Negeri 2 Semarang. Seluruh hak cipta dilindungi.
        </p>
      </div>
    </footer>
  );
}