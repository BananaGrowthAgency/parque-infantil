import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInUp from "@/components/ui/FadeInUp";
import BilletterieHeader from "@/components/billetterie/BilletterieHeader";
import LibreBooking from "@/components/billetterie/anniversaire/LibreBooking";

export const metadata = {
  title: "Formule Libre · Réservation Anniversaire · Ludykid",
  description:
    "Réservez la Formule Libre : table et cartons d'invitation fournis, vous personnalisez le reste pour un anniversaire à votre image chez Ludykid Le Mans.",
};

export default function LibrePage() {
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
          <div className="rounded-clay-lg border-[3px] border-lk-green shadow-clay-green bg-white overflow-hidden">

            {/* En-tête vert */}
            <div className="bg-lk-green px-7 py-5 flex items-center gap-4">
              <span className="text-4xl">🎈</span>
              <div>
                <h1 className="font-fredoka font-extrabold text-white text-2xl md:text-3xl leading-tight">
                  Formule Libre
                </h1>
                <p className="font-nunito text-white/80 text-sm">De 8 à 15 enfants · 10,50 € par enfant</p>
              </div>
            </div>

            <div className="p-7 flex flex-col md:flex-row gap-8">

              {/* Image */}
              <div className="shrink-0 md:w-56">
                <div className="rounded-clay overflow-hidden shadow-clay-green border-[3px] border-lk-green/30">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/cumple.png"
                    alt="Formule Libre — anniversaire chez Ludykid"
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
              </div>

              {/* Détails */}
              <div className="flex-1 space-y-5 font-nunito text-gray-700 text-sm leading-relaxed">
                <p className="text-base font-bold text-lk-green">
                  La formule idéale pour personnaliser l'anniversaire à votre guise !
                </p>
                <p>
                  Nous vous fournissons la table et les cartons d'invitation, vous vous occupez de tout le reste !
                </p>

                <p className="font-bold text-gray-800 text-base">(10,50 € par enfant)</p>

                <div>
                  <p className="font-bold text-gray-800 mb-2">
                    Vous fournissez tout le nécessaire à l'organisation de l'anniversaire !
                  </p>
                  <ul className="space-y-1 list-disc list-inside">
                    <li>La table est réservée pour la matinée ou l'après-midi.</li>
                    <li>L'accès aux jeux est à volonté.</li>
                    <li>Nous vous fournissons les cartons d'invitations.</li>
                    <li>Minimum de 8 enfants, maximum 15 enfants.</li>
                  </ul>
                </div>

                <div className="rounded-clay bg-gray-50 border-[2px] border-gray-200 p-4 text-xs text-gray-600">
                  <p>La présence d'un adulte est obligatoire (au delà de 2, 1€ par adultes supplémentaires).</p>
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
            <LibreBooking />
          </div>
        </FadeInUp>

      </div>

      <Footer waveBg="#F9FAFB" />
    </main>
  );
}
