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
    { label: "Accueil", href: "#inicio", color: "hover:text-lk-orange" },
    { label: "Attractions", href: "#atracciones", color: "hover:text-lk-purple" },
    { label: "Anniversaire", href: "#cumple", color: "hover:text-lk-pink" },
    { label: "Tarifs", href: "#precios", color: "hover:text-lk-green" },
    { label: "Infos", href: "#infos", color: "hover:text-lk-blue" },
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
              href="#infos"
              className="bg-lk-orange hover:opacity-90 text-white font-fredoka font-600 px-5 py-2 rounded-full text-base transition-opacity shadow"
              style={{ backgroundColor: "#E8731A" }}
            >
              Réserver !
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
          <a href="#infos" onClick={() => setMenuOpen(false)}
            className="mt-2 text-white font-fredoka font-600 px-5 py-3 rounded-full text-center text-lg"
            style={{ backgroundColor: "#E8731A" }}>
            Réserver !
          </a>
        </div>
      </div>
    </nav>
  );
}
