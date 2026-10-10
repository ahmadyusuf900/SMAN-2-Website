
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Berita", href: "/berita" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-900 text-white">
            <span className="text-sm font-bold">S2</span>
          </div>

          <div>
            <p className="text-sm font-extrabold tracking-wide text-blue-950 sm:text-base">
              SMAN 2 SEMARANG
            </p>
            <p className="text-xs text-slate-500">
              Website Profil Sekolah
            </p>
          </div>
        </Link>

        <div className="flex items-center gap-5 sm:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-900 sm:text-base"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}