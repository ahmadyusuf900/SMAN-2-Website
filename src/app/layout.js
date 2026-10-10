
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: {
    default: "SMAN 2 Semarang",
    template: "%s | SMAN 2 Semarang",
  },
  description: "Website profil dan informasi SMAN 2 Semarang.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="min-h-screen bg-white text-slate-800 antialiased">
        <Navbar />

        <main className="min-h-[70vh]">
          {children}
        </main>

        <footer className="border-t border-slate-200 bg-slate-50 px-5 py-6 text-center text-sm text-slate-500">
          <p>SMAN 2 Semarang</p>
          <p className="mt-1">
            Website Profil Sekolah
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} SMAN 2 Semarang
          </p>
        </footer>
      </body>
    </html>
  );
}