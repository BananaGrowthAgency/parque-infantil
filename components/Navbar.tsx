"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Trampoline parc", href: "#atracciones", color: "hover:text-lk-orange" },
    { label: "Anniversaire", href: "#cumple", color: "hover:text-lk-purple" },
    { label: "Restauration", href: "#infos", color: "hover:text-lk-purple" },
    { label: "Tarifs & Horaires", href: "#precios", color: "hover:text-lk-green" },
    { label: "Garderie", href: "#infos", color: "hover:text-lk-green" },
    { label: "Contact", href: "#infos", color: "hover:text-lk-orange" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-lg" : "bg-white/98"}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-2">
          <a href="#inicio">
            <Logo size="sm" />
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-fredoka font-500 text-gray-600 text-base transition-colors ${link.color}`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+33"
              className="w-10 h-10 flex items-center justify-center rounded-full transition-colors hover:bg-orange-50"
              style={{ color: "#E8731A" }}
              aria-label="Appeler"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.5a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .82h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
            </a>
          </div>

          {/* Mobile burger */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-gray-700">
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-80" : "max-h-0"}`}>
        <div className="bg-white border-t-2 border-dashed border-gray-100 px-4 pb-4 flex flex-col gap-1">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
              className="font-fredoka text-gray-700 py-2.5 border-b border-gray-50 text-lg">
              {link.label}
            </a>
          ))}
          <a href="tel:+33" onClick={() => setMenuOpen(false)}
            className="mt-2 text-white font-fredoka font-600 px-5 py-3 rounded-full text-center text-lg flex items-center justify-center gap-2"
            style={{ backgroundColor: "#E8731A" }}>
            📞 Appeler
          </a>
        </div>
      </div>
    </nav>
  );
}
