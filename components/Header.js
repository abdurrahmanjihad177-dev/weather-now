"use client";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-sky-600 text-white shadow">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">🌤️ WeatherNow</Link>

        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)} aria-label="Menu">
          ☰
        </button>

        <nav className="hidden md:flex gap-6">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:underline">{l.label}</Link>
          ))}
        </nav>
      </div>

      {open && (
        <nav className="md:hidden flex flex-col px-4 pb-4 gap-2">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-1">
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
