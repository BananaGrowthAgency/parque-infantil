import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInUp from "@/components/ui/FadeInUp";
import BilletterieHeader from "@/components/billetterie/BilletterieHeader";
import MaxiludyBooking from "@/components/billetterie/anniversaire/MaxiludyBooking";

export const metadata = {
  title: "Formule MaxiLudy · Réservation Anniversaire · Ludykid",
  description:
    "Réservez la Formule MaxiLudy : gâteau, Champomy, animation et photo souvenir pour un anniversaire inoubliable chez Ludykid Le Mans.",
};

export default function MaxiludyPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Navbar />

      <section className="relative pt-28 pb-4 px-6">
        <FadeInUp>
          <div className="max-w-5xl mx-auto" />
        </FadeInUp>
      </section>

      <BilletterieHeader />

      {/* Contenu */}
      <div className="max-w-5xl mx-auto px-6 pb-20 space-y-8">

        {/* Fiche formule */}
        <FadeInUp>
          <div className="rounded-clay-lg border-[3px] border-lk-orange shadow-clay-orange bg-white overflow-hidden">

            {/* En-tête orange */}
            <div className="bg-lk-orange px-7 py-5 flex items-center gap-4">
              <span className="text-4xl">🎂</span>
              <div>
                <h1 className="font-fredoka font-extrabold text-white text-2xl md:text-3xl leading-tight">
                  Formule MaxiLudy
                </h1>
                <p className="font-nunito text-white/80 text-sm">De 4 à 15 enfants · 17,50 € par enfant</p>
              </div>
            </div>

            <div className="p-7 flex flex-col md:flex-row gap-8">

              {/* Image */}
              <div className="shrink-0 md:w-56">
                <div className="rounded-clay overflow-hidden shadow-clay-orange border-[3px] border-lk-orange/30">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/cumple.png"
                    alt="Formule MaxiLudy — anniversaire chez Ludykid"
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
              </div>

              {/* Détails */}
              <div className="flex-1 space-y-5 font-nunito text-gray-700 text-sm leading-relaxed">
                <p className="text-base font-bold text-lk-orange">
                  La Formule XXL pour des souvenirs inoubliables !
                </p>
                <p>
                  Gâteau, Champomy et bonbons. Table décorée, photo souvenir et animation fun.<br />
                  <strong>En bonus :</strong> une entrée offerte pour l'enfant fêté et un jeton de bumper pour chaque enfant.<br />
                  Ambiance garantie !
                </p>

                <div>
                  <p className="font-bold text-gray-800 mb-2">Nous fournissons :</p>
                  <ul className="space-y-1 list-disc list-inside">
                    <li>Les parts de gâteaux (à choisir dans une liste à la réservation) avec la bougie scintillante</li>
                    <li>Une bouteille de Champomy, des sirops à l'eau (à volonté)</li>
                    <li>Un sachet de bonbons par enfant (130g)</li>
                    <li>La table dressée selon différents thèmes (à choisir dans une liste à la réservation)</li>
                    <li>Les cartons d'invitations</li>
                    <li>La photo souvenir</li>
                    <li>Animation collective (escape game, pêche à la ligne, chasse au trésor, laser game ou parcours interactif)</li>
                    <li>Un jeton de bumper pour chaque enfant</li>
                    <li>Une entrée offerte pour l'enfant fêté, pour revenir plus tard</li>
                  </ul>
                </div>

                <div className="rounded-clay bg-[#FFF4EC] border-[2px] border-lk-orange/30 p-4 space-y-2">
                  <p>
                    <strong>Si vous faites le choix d'une option gâteau à thème,</strong> merci de nous préciser le choix de la ganache : vanille, nutella, kinder bueno, framboise, fraise, chocolat au lait, chocolat blanc.
                  </p>
                  <p className="font-bold text-lk-orange underline uppercase text-xs tracking-wide">
                    CE GÂTEAU ANNULE ET REMPLACE LE GÂTEAU CLASSIQUE !
                  </p>
                  <p className="italic text-gray-500 text-xs">
                    L'image du gâteau à thème est non contractuelle, notre pâtissière peut choisir de changer la couleur, des détails ainsi que la décoration.
                  </p>
                </div>

                <div className="rounded-clay bg-gray-50 border-[2px] border-gray-200 p-4 space-y-1.5 text-xs text-gray-600">
                  <p>La table est réservée pour la matinée ou l'après-midi avec l'accès aux jeux à volonté.</p>
                  <p><strong>Minimum 4 enfants, maximum 15 enfants.</strong></p>
                  <p>La présence d'un adulte est obligatoire (au delà de 2, 1 € par adulte supplémentaire).</p>
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
            <MaxiludyBooking />
          </div>
        </FadeInUp>

      </div>

      <Footer waveBg="#F9FAFB" />
    </main>
  );
}
