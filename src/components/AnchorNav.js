"use client";

import { useEffect, useState } from "react";

const links = [
  { id: "profil", label: "Profil" },
  { id: "visi-misi", label: "Visi & Misi" },
  { id: "sejarah", label: "Sejarah" },
  { id: "lingkungan", label: "Lingkungan" },
  { id: "ekstrakurikuler", label: "Ekstrakurikuler" },
  { id: "kontak", label: "Kontak" },
];

export default function AnchorNav() {
  const [active, setActive] = useState("profil");

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <div className="sticky top-[78px] z-40 border-b border-navy/10 bg-white/95 backdrop-blur">
      <nav
        aria-label="Navigasi halaman"
        className="container-page no-scrollbar flex gap-1 overflow-x-auto"
      >
        {links.map((l) => {
          const isActive = active === l.id;
          return (
            <a
              key={l.id}
              href={`#${l.id}`}
              aria-current={isActive ? "true" : undefined}
              className={`relative shrink-0 px-4 py-4 text-sm font-bold transition-colors ${
                isActive ? "text-navy" : "text-slate-500 hover:text-royal"
              }`}
            >
              {l.label}
              <span
                aria-hidden="true"
                className={`absolute inset-x-4 bottom-0 h-[3px] origin-left bg-gold transition-transform duration-300 ${
                  isActive ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </a>
          );
        })}
      </nav>
    </div>
  );
}