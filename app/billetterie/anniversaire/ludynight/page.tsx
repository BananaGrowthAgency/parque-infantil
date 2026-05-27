import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInUp from "@/components/ui/FadeInUp";
import BilletterieHeader from "@/components/billetterie/BilletterieHeader";
import LudynightBooking from "@/components/billetterie/anniversaire/LudynightBooking";

export const metadata = {
  title: "Ludynight · Réservation Anniversaire · Ludykid",
  description:
    "Réservez la Ludynight : une soirée entre petits potes de 19h30 à 22h, un vendredi par mois chez Ludykid Le Mans.",
};

const YELLOW = "#FFD600";
const YELLOW_DARK = "#3A2A00";

export default function LudynightPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Navbar />

      <section className="relative pt-28 pb-4 px-6">
        <FadeInUp>
          <div className="max-w-5xl mx-auto" />
        </FadeInUp>
      </section>

      <BilletterieHeader />

      <div className="max-w-5xl mx-auto px-6 pb-20 space-y-8">

        {/* Fiche formule */}
        <FadeInUp>
          <div className="rounded-clay-lg border-[3px] border-lk-yellow shadow-clay-yellow bg-white overflow-hidden">

            {/* En-tête jaune */}
            <div className="px-7 py-5 flex items-center gap-4" style={{ backgroundColor: YELLOW }}>
              <span className="text-4xl">🌙</span>
              <div>
                <h1
                  className="font-fredoka font-extrabold text-2xl md:text-3xl leading-tight"
                  style={{ color: YELLOW_DARK }}
                >
                  Ludynight
                </h1>
                <p className="font-nunito text-sm" style={{ color: `${YELLOW_DARK}cc` }}>
                  Minimum 15 enfants · dès 9 ans · 11,00 € par enfant
                </p>
              </div>
            </div>

            <div className="p-7 flex flex-col md:flex-row gap-8">

              {/* Image */}
              <div className="shrink-0 md:w-56">
                <div className="rounded-clay overflow-hidden shadow-clay border-[3px] border-lk-yellow/40">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/home/cumple.png"
                    alt="Ludynight — soirée anniversaire chez Ludykid"
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
              </div>

              {/* Détails */}
              <div className="flex-1 space-y-4 font-nunito text-gray-700 text-sm leading-relaxed">
                <p className="text-base font-bold" style={{ color: YELLOW_DARK }}>
                  Un vendredi par mois pour faire la fête entre petits potes !
                </p>
                <p>
                  Nous vous fournissons la table et les cartons d'invitation, vous vous occupez du reste !
                </p>

                <div className="space-y-0.5">
                  <p className="font-bold text-gray-800">(minimum 9 ans)</p>
                  <p className="font-bold text-gray-800">(11,00 € par enfant)</p>
                </div>

                <div className="space-y-1">
                  <p>Une soirée entre petits potes pour faire la fête de 19h30 à 22h !</p>
                  <p>Prévoyez les collations et boissons, la vaisselle.</p>
                  <p>Accès libre aux jeux, sous la surveillance du personnel.</p>
                </div>

                <div className="rounded-clay bg-[#FFFBE0] border-[2px] border-lk-yellow/40 p-4 space-y-2 text-xs text-gray-600">
                  <p>Présence d'adulte accompagnateur non obligatoire !</p>
                  <p>
                    Minimum 15 enfants (laissez nous une annotation après votre réservation
                    concernant le nombre d'enfants total prévu).
                  </p>
                  <p className="italic">
                    Ces soirées ne sont pas recommandés pour les enfants de moins de 9 ans.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeInUp>

        {/* Booking interactif */}
        <FadeInUp delay={0.1}>
          <div className="rounded-clay-lg border-[3px] border-[#1877F2] shadow-clay-blue bg-white p-7">
            <h2 className="font-fredoka font-extrabold text-[#1877F2] text-xl mb-6 flex items-center gap-2">
              📅 Choisissez votre créneau
            </h2>
            <LudynightBooking />
          </div>
        </FadeInUp>

      </div>

      <Footer waveBg="#F9FAFB" />
    </main>
  );
}
