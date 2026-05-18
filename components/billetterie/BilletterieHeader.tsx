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

type Crumb = { label: string; href: string };

function buildCrumbs(pathname: string): Crumb[] {
  const segments = pathname.split("/").filter(Boolean);

  // Cas spécial : /billetterie/anniversaire/* → on remplace "Billetterie / Anniversaires" par "Anniversaire" pointant vers /anniversaire (la page formules)
  if (segments[0] === "billetterie" && segments[1] === "anniversaire") {
    const rest = segments.slice(2);
    const crumbs: Crumb[] = [{ label: "Anniversaire", href: "/anniversaire" }];
    rest.forEach((seg, i) => {
      crumbs.push({
        label: LABELS[seg] ?? seg.charAt(0).toUpperCase() + seg.slice(1),
        href: "/billetterie/anniversaire/" + rest.slice(0, i + 1).join("/"),
      });
    });
    return crumbs;
  }

  return segments.map((seg, i) => ({
    label: LABELS[seg] ?? seg.charAt(0).toUpperCase() + seg.slice(1),
    href: "/" + segments.slice(0, i + 1).join("/"),
  }));
}

function Breadcrumb({ pathname }: { pathname: string }) {
  const crumbs = buildCrumbs(pathname);
  return (
    <nav aria-label="Fil d'Ariane" className="mb-2">
      <ol className="flex flex-wrap items-center gap-1 font-fredoka font-bold text-xs uppercase tracking-wide text-gray-400">
        <li>
          <Link href="/" className="hover:text-lk-orange transition-colors duration-200 text-gray-500">
            Ludykid
          </Link>
        </li>
        {crumbs.map((c, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <li key={c.href} className="flex items-center gap-1">
              <span className="text-gray-300">/</span>
              {isLast ? (
                <span className="text-lk-orange">{c.label}</span>
              ) : (
                <Link href={c.href} className="hover:text-lk-orange transition-colors duration-200 text-gray-500">
                  {c.label}
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
