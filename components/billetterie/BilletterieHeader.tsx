"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ClayButton from "../ui/ClayButton";

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
  const onBilletterie = pathname === "/billetterie";
  const onAnniversaire = pathname.startsWith("/billetterie/anniversaire");

  return (
    <div className="max-w-5xl mx-auto px-6">
      <div className="flex justify-end mb-2">
        <Breadcrumb pathname={pathname} />
      </div>
      <div className="flex flex-wrap gap-3 mb-10">
        {onAnniversaire ? (
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full font-fredoka font-bold text-sm bg-[#1877F2] text-white opacity-60 cursor-default ring-2 ring-[#1877F2] ring-offset-2">
            ⭐ Réservations Anniversaire
          </span>
        ) : (
          <ClayButton href="/billetterie/anniversaire" tone="blue" size="md">
            ⭐ Réservations Anniversaire
          </ClayButton>
        )}

        {onBilletterie ? (
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full font-fredoka font-bold text-sm bg-[#1877F2] text-white opacity-60 cursor-default ring-2 ring-[#1877F2] ring-offset-2">
            🎫 Billetterie Ludykid
          </span>
        ) : (
          <ClayButton href="/billetterie" tone="blue" size="md">
            🎫 Billetterie Ludykid
          </ClayButton>
        )}
      </div>
    </div>
  );
}
