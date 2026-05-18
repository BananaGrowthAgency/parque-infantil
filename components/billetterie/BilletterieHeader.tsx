"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LABELS: Record<string, string> = {
  billetterie:  "Billetterie Ludykid",
  anniversaire: "Anniversaires",
  maxiludy:     "Formule MaxiLudy",
  reservation:  "Détails",
  ludykid:      "Formule Ludykid",
  libre:        "Formule Libre",
  ludynight:    "Ludynight",
  restauration: "Restauration",
  tarifs:       "Tarifs & Horaires",
};

function Breadcrumb({ pathname }: { pathname: string }) {
  const segments = pathname.split("/").filter(Boolean);
  return (
    <nav aria-label="Fil d'Ariane" className="mb-2">
      <ol className="flex flex-wrap items-center gap-1 font-fredoka font-bold text-xs uppercase tracking-wide text-gray-400">
        <li>
          <Link href="/" className="hover:text-lk-orange transition-colors duration-200 text-gray-500">
            Ludykid
          </Link>
        </li>
        {segments.map((seg, i) => {
          const href = "/" + segments.slice(0, i + 1).join("/");
          const label = LABELS[seg] ?? seg.charAt(0).toUpperCase() + seg.slice(1);
          const isLast = i === segments.length - 1;
          return (
            <li key={href} className="flex items-center gap-1">
              <span className="text-gray-300">/</span>
              {isLast ? (
                <span className="text-lk-orange">{label}</span>
              ) : (
                <Link href={href} className="hover:text-lk-orange transition-colors duration-200 text-gray-500">
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default function BilletterieHeader() {
  const pathname = usePathname();

  return (
    <div className="max-w-5xl mx-auto px-6">
      <div className="flex justify-end mb-10">
        <Breadcrumb pathname={pathname} />
      </div>
    </div>
  );
}
