"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Berita", href: "/berita" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  function isActive(href) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-cream/95 backdrop-blur">
      <div className="container-page">
        <div className="flex min-h-[78px] items-center justify-between gap-4">
          {/* Logo dan identitas sekolah */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex min-w-0 items-center gap-3"
            aria-label="SMAN 2 Semarang - Halaman Home"
          >
            <div className="relative h-12 w-12 shrink-0 sm:h-14 sm:w-14">
              <Image
                src="/images/school/logo%20smanda%20remove%20bg.png"
                alt="Logo SMAN 2 Semarang"
                fill
                sizes="56px"
                className="object-contain"
                priority
              />
            </div>

            <div className="min-w-0">
              <p className="truncate font-display text-base font-bold tracking-tight text-navy sm:text-lg">
                SMA Negeri 2 Semarang
              </p>
              <p className="mt-0.5 text-[9px] font-bold tracking-[0.14em] text-slate-500 sm:text-[10px]">
                SMANDA BERBUDAYA 🙏
              </p>
              <div className="mt-1.5 flex gap-1">
                <span className="h-1 w-7 rounded-full bg-royal" />
                <span className="h-1 w-3 rounded-full bg-sky" />
                <span className="h-1 w-2 rounded-full bg-brand-red" />
                <span className="h-1 w-2 rounded-full bg-gold" />
              </div>
            </div>
          </Link>

          {/* Navigasi desktop */}
          <nav
            aria-label="Navigasi utama"
            className="hidden items-center gap-1 md:flex"
          >
            {menuItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative px-4 py-3 text-sm font-bold transition-colors ${
                    active ? "text-navy" : "text-slate-600 hover:text-royal"
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-4 bottom-1 h-[3px] origin-left bg-gold transition-transform duration-300 ${
                      active ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </Link>
              );
            })}

            <Link
              href="/about"
              className="ml-4 inline-flex items-center gap-2 rounded-lg bg-navy px-5 py-3 text-sm font-bold text-white transition hover:bg-royal"
            >
              Hubungi Kami
              <span aria-hidden="true">→</span>
            </Link>
          </nav>

          {/* Tombol menu mobile */}
          <button
            type="button"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-navy/20 text-navy transition hover:bg-sand md:hidden"
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d={menuOpen ? "m6 6 12 12M18 6 6 18" : "M4 7h16M4 12h16M4 17h16"} />
            </svg>
          </button>
        </div>

        {/* Navigasi mobile */}
        {menuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Navigasi mobile"
            className="border-t border-navy/10 py-3 md:hidden"
          >
            {menuItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  aria-current={active ? "page" : undefined}
                  className={`mb-1 block rounded-lg border-l-4 px-4 py-3 text-sm font-bold transition-colors ${
                    active
                      ? "border-gold bg-sand text-navy"
                      : "border-transparent text-slate-600 hover:bg-sand hover:text-royal"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              href="/about"
              onClick={closeMenu}
              className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-navy px-4 py-3 text-sm font-bold text-white"
            >
              Hubungi Kami
              <span aria-hidden="true">→</span>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}