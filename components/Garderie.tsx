"use client";

import Image from "next/image";
import Doodle from "./Doodle";
import Wave from "./Wave";
import FadeInUp from "./ui/FadeInUp";
import ClayButton from "./ui/ClayButton";

const BLUE = "#1877F2";

/* ── Section helper ─────────────────────────────────── */
function SectionIntro({
  title,
  desc,
  features,
  cta,
  ctaHref,
  ctaTone,
  image,
  imageAlt,
  reverse = false,
  bg = "white",
  accent = BLUE,
  iconBg = "#E8F4FF",
  shadow = "shadow-clay-blue",
  nextBg,
}: {
  title: string;
  desc?: string;
  features: { icon: string; label: string; desc?: string }[];
  cta: string;
  ctaHref: string;
  ctaTone: "blue" | "orange" | "purple" | "green";
  image: string;
  imageAlt: string;
  reverse?: boolean;
  bg?: string;
  accent?: string;
  iconBg?: string;
  shadow?: string;
  nextBg?: string;
}) {
  return (
    <section className="relative pt-16 overflow-hidden" style={{ backgroundColor: bg }}>
      <div className="max-w-6xl mx-auto px-6 pb-16 relative">
        <div className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-stretch`}>

          {/* Image */}
          <FadeInUp className="w-full md:w-1/2" y={28}>
            <div className={`group relative h-full min-h-[380px] rounded-clay-lg overflow-hidden ${shadow} transition-transform duration-500 hover:-translate-y-1`}>
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </FadeInUp>

          {/* Card */}
          <FadeInUp className="w-full md:w-1/2" delay={0.15} y={28}>
            <div className="bg-white rounded-clay-lg shadow-clay p-7 h-full flex flex-col">
              <h2 className="font-fredoka text-2xl md:text-3xl font-bold text-gray-800 mb-3 leading-snug">
                {title}
              </h2>
              {desc && (
                <p className="font-nunito text-gray-500 text-sm leading-relaxed mb-5">{desc}</p>
              )}
              <ul className="space-y-3 mb-6 flex-1">
                {features.map((f) => (
                  <li key={f.label} className="flex items-start gap-3">
                    <span
                      className="w-10 h-10 rounded-2xl flex items-center justify-center text-lg flex-shrink-0 shadow-clay-inset"
                      style={{ backgroundColor: iconBg }}
                    >
                      {f.icon}
                    </span>
                    <span className="font-nunito text-sm text-gray-700 leading-snug">
                      <span className="font-bold block text-gray-800">{f.label}</span>
                      {f.desc && <span className="text-gray-500">{f.desc}</span>}
                    </span>
                  </li>
                ))}
              </ul>
              <div>
                <ClayButton href={ctaHref} tone={ctaTone} size="md">
                  {cta}
                </ClayButton>
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>
      {nextBg && <Wave fill={nextBg} bg={bg} />}
    </section>
  );
}

/* ── Main component ─────────────────────────────────── */
export default function Garderie() {
  return (
    <>
      {/* 1. Intro — Un espace de jeu et de découvertes */}
      <SectionIntro
        title="Un espace de jeu et de découvertes en toute confiance"
        desc="Besoin de prendre du temps pour vous ? Dès 4 ans, un service garderie vous est proposé. Vos enfants seront sous la surveillance de nos animateurs."
        features={[
          { icon: "👦", label: "Dès 4 ans",            desc: "Un service garderie pour les enfants dès 4 ans." },
          { icon: "🛡️", label: "Encadrement assuré",   desc: "Les enfants sont sous la surveillance d'animateurs." },
          { icon: "💰", label: "10,00 € / heure",      desc: "Tarif dégressif — renseignements à l'accueil." },
          { icon: "🎟️", label: "Entrée du parc incluse", desc: "L'accès au parc est compris dans les tarifs." },
        ]}
        cta="Profitez de l'offre sur place"
        ctaHref="/contact"
        ctaTone="blue"
        image="/images/img_2469.jpg"
        imageAlt="Enfant jouant à la garderie Ludykid"
        bg="#E8F7FF"
        accent={BLUE}
        iconBg="#E8F4FF"
        shadow="shadow-clay-blue"
        nextBg="#FFF8EC"
      />

      {/* 2. Nounous */}
      <SectionIntro
        title="Le rendez-vous mensuel des Nounous 👩‍🍼"
        desc="Nous proposons aux assistantes maternelles un jeudi matin par mois l'accès à notre parc sur un temps qui leur est réservé."
        features={[
          { icon: "📅", label: "Un jeudi matin par mois",            desc: "Un moment dédié rien que pour vous et les enfants." },
          { icon: "🎮", label: "Une activité encadrée",              desc: "Les enfants s'amusent en toute sécurité." },
          { icon: "💰", label: "6,00 € par enfant de plus d'un an",  desc: "" },
          { icon: "💛", label: "Un temps privilégié",                desc: "Pour jouer, se dépenser et partager de bons moments." },
        ]}
        cta="Contactez-nous pour plus d'infos !"
        ctaHref="/contact"
        ctaTone="orange"
        image="/images/img_4094.jpg"
        imageAlt="Enfants s'amusant à Ludykid"
        reverse
        bg="#FFF8EC"
        accent="#E8731A"
        iconBg="#FFF0E0"
        shadow="shadow-clay-orange"
        nextBg="#F5EEFF"
      />

      {/* 3. Grands */}
      <SectionIntro
        title="Un parc de jeux indoor pour les plus grands (4–12 ans)"
        desc="Un espace pensé pour les enfants de 4 à 12 ans qui souhaitent se dépenser dans un cadre sécurisé et stimulant."
        features={[
          { icon: "🧗", label: "Accrobranche",    desc: "Parcours en hauteur, passerelles et obstacles." },
          { icon: "🎯", label: "Laser game",       desc: "Jeu d'équipe dans un univers futuriste." },
          { icon: "🔒", label: "Escape game",      desc: "Énigmes en réalité augmentée dès 9 ans." },
          { icon: "⚡", label: "Trampoline",       desc: "Sauts et rebonds en toute liberté." },
        ]}
        cta="Voir les activités"
        ctaHref="/billetterie"
        ctaTone="purple"
        image="/images/home/accrobranche-hero.jpg"
        imageAlt="Parc de jeux indoor pour les grands chez Ludykid"
        reverse
        bg="#F5EEFF"
        accent="#7B35A0"
        iconBg="#F0E8FF"
        shadow="shadow-clay-purple"
        nextBg="#EDFAED"
      />

      {/* 4. Petits */}
      <SectionIntro
        title="Une aire de jeux intérieure pour les petits (1–3 ans)"
        desc="Un espace dédié et sécurisé pour les tout-petits, adapté à leur développement et à leur rythme."
        features={[
          { icon: "🎈", label: "Accès sécurisé",     desc: "Espace séparé des attractions des plus grands." },
          { icon: "🎠", label: "Jeux adaptés",       desc: "Structures douces pensées pour les 1–3 ans." },
          { icon: "👀", label: "Surveillance",        desc: "Animateurs présents en permanence." },
          { icon: "😊", label: "Éveil et découverte", desc: "Activités sensorielles pour stimuler les tout-petits." },
        ]}
        cta="En savoir plus"
        ctaHref="/espace-petits"
        ctaTone="green"
        image="/images/pelotas2.jpg"
        imageAlt="Aire de jeux pour les petits chez Ludykid"
        bg="#EDFAED"
        accent="#2E9E2E"
        iconBg="#E0F5E0"
        shadow="shadow-clay-green"
        nextBg="white"
      />
    </>
  );
}
