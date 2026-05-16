"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import ClayButton from "./ui/ClayButton";

const CLAY_SCROLLED =
  "top-0 left-0 right-0 bg-white shadow-clay md:top-3 md:left-3 md:right-3 lg:left-6 lg:right-6 md:rounded-full";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Trampoline parc", href: "/#atracciones", hover: "hover:text-lk-orange", active: "text-lk-orange", softBg: "#FFEFE2" },
    { label: "Anniversaire",    href: "/anniversaire", hover: "hover:text-lk-purple", active: "text-lk-purple", softBg: "#F5EEFF" },
    { label: "Restauration",    href: "/restauration",  hover: "hover:text-lk-green",  active: "text-lk-green",  softBg: "#E8F7E8" },
    { label: "Tarifs & Horaires", href: "/#precios",   hover: "hover:text-lk-yellow", active: "text-lk-yellow", softBg: "#FFF8CC" },
    { label: "Garderie",        href: "/#infos",       hover: "hover:text-lk-orange", active: "text-lk-orange", softBg: "#FFEFE2" },
    { label: "Contact",         href: "/#infos",       hover: "hover:text-lk-green",  active: "text-lk-green",  softBg: "#E8F7E8" },
  ];

  const isActive = (href: string) =>
    href.startsWith("/") &&
    !href.includes("#") &&
    (pathname === href || pathname.startsWith(href + "/"));

  const navClass = `fixed z-50 transition-all duration-300 ${
    scrolled ? CLAY_SCROLLED : "top-0 left-0 right-0 bg-white"
  }`;

  return (
    <nav className={navClass}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-2">
          <a href="/">
            <Logo size="sm" />
          </a>

          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => {
              const active = isActive(link.href);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`font-fredoka font-semibold text-base transition-colors px-3 py-1.5 rounded-full ${
                    active ? link.active : `text-gray-600 ${link.hover}`
                  }`}
                  style={active ? { backgroundColor: link.softBg } : undefined}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href="tel:+33"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-[#FFF3E6] shadow-clay-inset transition-transform duration-300 hover:scale-110 hover:rotate-6"
              aria-label="Appeler"
            >
              <span
                aria-hidden
                style={{
                  width: 22,
                  height: 22,
                  display: "inline-block",
                  backgroundColor: "#E8731A",
                  WebkitMaskImage: "url(/images/phone-icon.png)",
                  maskImage: "url(/images/phone-icon.png)",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  maskPosition: "center",
                  WebkitMaskSize: "contain",
                  maskSize: "contain",
                }}
              />
            </a>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-gray-700">
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96" : "max-h-0"}`}>
        <div className="bg-white border-t-2 border-dashed border-gray-100 px-4 pb-4 pt-2 flex flex-col gap-1">
          {links.map((link) => {
            const active = isActive(link.href);
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                aria-current={active ? "page" : undefined}
                className="font-fredoka py-2.5 border-b border-gray-50 text-lg flex"
              >
                <span
                  className={`rounded-full px-3 py-1 ${active ? link.active : "text-gray-700"}`}
                  style={active ? { backgroundColor: link.softBg } : undefined}
                >
                  {link.label}
                </span>
              </a>
            );
          })}
          <div className="mt-3 self-stretch flex justify-center">
            <ClayButton href="tel:+33" tone="orange" size="md" onClick={() => setMenuOpen(false)}>
              📞 Appeler
            </ClayButton>
          </div>
        </div>
      </div>
    </nav>
  );
}
