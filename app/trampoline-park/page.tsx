import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Doodle from "@/components/Doodle";
import FadeInUp from "@/components/ui/FadeInUp";
import ClayButton from "@/components/ui/ClayButton";
import ClayCard from "@/components/ui/ClayCard";
import SquiggleTitle from "@/components/ui/SquiggleTitle";

export const metadata = {
  title: "Trampoline Park · Ludykid Le Mans",
  description:
    "Un espace trampoline park unique au Mans : sauts, rebonds, figures… Adapté aux enfants 4–12 ans, encadré et sécurisé. Dès 4,50 € par enfant.",
};

const FEATURES = [
  { icon: "⚡", label: "Zones de trampolines", desc: "Plusieurs espaces pour sauter, rebondir et tester ses figures." },
  { icon: "🎂", label: "Idéal anniversaire", desc: "Une activité fun à intégrer à toutes nos formules d'anniversaire." },
  { icon: "🐣", label: "Adapté 4–12 ans", desc: "Conçu pour les enfants à partir de 4 ans, à leur rythme." },
  { icon: "🔒", label: "Encadré & sécurisé", desc: "Présence du personnel, mousse de réception, zones balisées." },
];

const RULES = [
  "Chaussettes obligatoires (en vente à l'accueil si besoin)",
  "Un enfant par trampoline pour éviter les collisions",
  "Pas de saut depuis l'extérieur ni de figures non maîtrisées",
  "Les enfants restent sous la surveillance d'un adulte accompagnant",
];

export default function TrampolinePage() {
  return (
    <main className="bg-[#FFF8EC] min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-16">
        <div className="relative overflow-hidden" style={{ height: "62vh", minHeight: 440 }}>
          <Image
            src="/images/seccion3.jpg"
            alt="Trampoline parc Ludykid Le Mans"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "center 30%" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(232,115,26,0.28) 60%, rgba(255,248,236,0) 100%)",
            }}
          />
          <div className="absolute bottom-0 inset-x-0 h-20 sm:h-28 bg-gradient-to-b from-transparent to-[#FFF8EC] pointer-events-none" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-6 max-w-3xl">
              <h1 className="font-fredoka text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-xl">
                Un espace{" "}
                <span className="inline-block px-3 py-1 rounded-clay bg-lk-yellow text-[#3A2A00] -rotate-2 shadow-clay-yellow">
                  Trampoline Parc
                </span>{" "}
                unique au Mans 🤸
              </h1>
              <p className="font-nunito text-white/95 text-base md:text-lg mt-5 drop-shadow-lg">
                Sauts, rebonds, figures… Un terrain de jeu dynamique pour se dépenser à fond, en toute sécurité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bandeau prix */}
      <div className="relative z-10 -mt-10 sm:-mt-14 px-4 sm:px-8 lg:px-16 mb-12">
        <div className="max-w-3xl mx-auto">
          <FadeInUp delay={0.05}>
            <div className="flex items-center justify-center gap-4 px-6 py-5 rounded-clay-lg bg-white border-[3px] border-lk-orange shadow-clay-orange">
              <span className="text-3xl">👉</span>
              <p className="font-fredoka font-extrabold text-lk-orange text-xl md:text-2xl">
                Dès 4,50 € / enfant
              </p>
            </div>
          </FadeInUp>
        </div>
      </div>

      {/* Features */}
      <section className="px-6 pb-16 relative overflow-hidden">
        <div className="absolute top-10 left-6 opacity-15 animate-float pointer-events-none">
          <Doodle type="star" color="#E8731A" size={60} />
        </div>
        <div className="absolute top-20 right-10 opacity-15 animate-wiggle pointer-events-none">
          <Doodle type="zigzag" color="#E8731A" size={70} />
        </div>

        <div className="max-w-5xl mx-auto relative">
          <FadeInUp>
            <SquiggleTitle color="#E8731A">Au programme ⚡</SquiggleTitle>
          </FadeInUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
            {FEATURES.map((f, i) => (
              <FadeInUp key={f.label} delay={0.1 + i * 0.06}>
                <ClayCard size="md" tone="white" className="h-full flex items-start gap-4">
                  <span
                    className="shrink-0 w-12 h-12 rounded-clay flex items-center justify-center text-2xl shadow-clay-inset"
                    style={{ backgroundColor: "#E8731A1F" }}
                  >
                    {f.icon}
                  </span>
                  <div>
                    <p className="font-fredoka font-extrabold text-lk-orange text-lg leading-tight mb-1">
                      {f.label}
                    </p>
                    <p className="font-nunito text-sm text-gray-600 leading-relaxed">{f.desc}</p>
                  </div>
                </ClayCard>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Règles de sécurité */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <FadeInUp>
            <div className="rounded-clay-lg border-[3px] border-lk-orange shadow-clay-orange bg-white overflow-hidden">
              <div className="bg-lk-orange px-6 py-4 flex items-center gap-3">
                <span className="text-2xl">🔒</span>
                <h2 className="font-fredoka font-extrabold text-white text-xl md:text-2xl">
                  Sécurité & bon esprit
                </h2>
              </div>
              <div className="p-6">
                <p className="font-nunito text-gray-700 text-sm md:text-base mb-4 leading-relaxed">
                  Pour que tout le monde s&apos;amuse, on respecte quelques règles simples :
                </p>
                <ul className="space-y-3">
                  {RULES.map((r) => (
                    <li key={r} className="flex items-start gap-3">
                      <span
                        className="shrink-0 mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-full text-white font-bold text-xs shadow-clay-sm"
                        style={{ backgroundColor: "#E8731A" }}
                      >
                        ✓
                      </span>
                      <span className="font-nunito text-sm md:text-base text-gray-700">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* CTA final */}
      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto">
          <FadeInUp>
            <div className="rounded-clay-lg bg-lk-orange shadow-clay-orange p-8 md:p-10 text-center relative overflow-hidden">
              <div className="absolute top-4 right-4 opacity-30">
                <Doodle type="star" color="#ffffff" size={56} />
              </div>
              <div className="absolute bottom-3 left-5 opacity-25">
                <Doodle type="circle" color="#ffffff" size={44} />
              </div>
              <h2 className="font-fredoka font-extrabold text-white text-2xl md:text-3xl leading-tight">
                Prêt à sauter ?
              </h2>
              <p className="font-nunito text-white/90 text-sm md:text-base mt-3 mb-6 max-w-xl mx-auto">
                Réservez vos entrées en ligne et venez tester nos trampolines avec vos enfants.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <ClayButton href="/billetterie" tone="white" size="lg">
                  🎫 Réserver mes entrées
                </ClayButton>
                <ClayButton href="/anniversaire" tone="purple" size="lg">
                  🎂 Anniversaire au trampoline
                </ClayButton>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      <Footer waveBg="#FFF8EC" />
    </main>
  );
}
