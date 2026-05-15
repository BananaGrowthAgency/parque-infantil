import Image from "next/image";
import Doodle from "../Doodle";

const BULLETS = [
  { icon: "🎁", text: "Remise appliquée directement en caisse" },
  { icon: "📅", text: "Offre valable uniquement le dimanche (hors options)" },
  { icon: "🎈", text: "Réserve ta date dès maintenant en ligne" },
];

export default function Dimanche() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute top-10 right-10 opacity-15 animate-wiggle">
        <Doodle type="heart" color="#E8731A" size={60} />
      </div>
      <div className="absolute bottom-12 left-8 opacity-15 animate-float">
        <Doodle type="star" color="#7B35A0" size={56} />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          {/* Card promo */}
          <div
            className="w-full md:w-1/2 relative rounded-3xl overflow-hidden shadow-xl flex-shrink-0 self-stretch"
            style={{ minHeight: 380, backgroundColor: "#E8731A" }}
          >
            <Image
              src="/images/cumple.png"
              alt="Promotion dimanche -20%"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
              style={{ mixBlendMode: "multiply", opacity: 0.85 }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
              <p className="font-fredoka text-white text-2xl md:text-3xl font-700 drop-shadow-md mb-2">
                Fête ton anniv&apos; chez Ludykid
              </p>
              <p
                className="font-fredoka text-white font-700 drop-shadow-md"
                style={{ fontSize: 92, lineHeight: 1 }}
              >
                -20%
              </p>
              <p className="font-fredoka text-white text-lg md:text-xl font-600 mt-2 drop-shadow-md">
                sur les formules le DIMANCHE
              </p>
            </div>
          </div>

          {/* Card texto */}
          <div className="w-full md:w-1/2 rounded-3xl p-8 md:p-10 relative overflow-hidden bg-white shadow-md border border-orange-100">
            <span
              className="inline-block font-fredoka font-600 text-white text-xs px-3 py-1 rounded-full mb-4"
              style={{ backgroundColor: "#7B35A0" }}
            >
              🎈 Dimanche malin
            </span>
            <h2 className="font-fredoka text-2xl md:text-3xl font-600 text-gray-800 mb-3 leading-snug">
              -20% sur les anniversaires
            </h2>
            <p className="font-nunito text-gray-500 leading-relaxed mb-3 text-sm">
              Et si le meilleur jour pour fêter un anniversaire… c&apos;était le dimanche ?
            </p>
            <p className="font-nunito text-gray-500 leading-relaxed mb-3 text-sm">
              Chez Ludykid, on rend ce moment encore plus sympa :
            </p>
            <p className="font-nunito text-gray-700 leading-relaxed mb-5 text-sm">
              👉 -20 % sur toutes les formules anniversaires, chaque dimanche
            </p>
            <p className="font-nunito text-gray-500 leading-relaxed mb-5 text-sm">
              De quoi offrir une fête mémorable, sans se poser de questions ✨
            </p>
            <ul className="space-y-3 mb-6">
              {BULLETS.map((b) => (
                <li key={b.text} className="flex items-center gap-3">
                  <span
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                    style={{ backgroundColor: "#E8731A20" }}
                  >
                    {b.icon}
                  </span>
                  <span className="font-nunito text-sm text-gray-700">{b.text}</span>
                </li>
              ))}
            </ul>
            <a
              href="#formules"
              className="inline-flex items-center gap-2 font-fredoka font-600 text-white px-6 py-3 rounded-full text-base transition-all hover:scale-105 shadow-md"
              style={{ backgroundColor: "#7B35A0" }}
            >
              Choisir ma formule <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
