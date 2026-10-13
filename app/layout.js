import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "WeatherNow",
  description: "Simple weather app using Next.js and Open-Meteo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-100 text-slate-800 min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
