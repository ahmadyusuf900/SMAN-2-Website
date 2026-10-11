import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Font judul (serif)
const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

// Font teks
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata = {
  title: {
    default: "SMAN 2 Semarang | Sekolah Unggul dan Berprestasi",
    template: "%s | SMAN 2 Semarang",
  },
  description:
    "Website profil SMAN 2 Semarang yang menyajikan informasi profil sekolah, fasilitas, kegiatan, dan berita terbaru.",
};

export default function RootLayout({ children }) {
  return (
    // Variabel font dipasang di <html> supaya terbaca di seluruh CSS
    <html lang="id" className={`${fraunces.variable} ${jakarta.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}