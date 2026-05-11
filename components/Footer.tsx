import Logo from "./Logo";
import Doodle from "./Doodle";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-14 pb-8 relative overflow-hidden">
      <div className="absolute top-4 right-10 opacity-10 animate-float">
        <Doodle type="star" color="#FFD600" size={70} />
      </div>
      <div className="absolute bottom-6 left-6 opacity-10 animate-wiggle">
        <Doodle type="heart" color="#E8409A" size={55} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="mb-5">
              <Logo size="sm" />
            </div>
            <p className="font-nunito text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Le parc de jeux indoor préféré des enfants. Plus de 1 500 m²
              de fun couvert pour toute la famille, ouvert 7 jours sur 7.
            </p>
            <div className="flex gap-2">
              {[
                { label: "Facebook", emoji: "📘", color: "#2E6FCC" },
                { label: "Instagram", emoji: "📸", color: "#E8409A" },
                { label: "TikTok", emoji: "🎵", color: "#E8731A" },
              ].map((s) => (
                <button key={s.label} aria-label={s.label}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-base transition-transform hover:scale-110"
                  style={{ backgroundColor: s.color }}>
                  {s.emoji}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-fredoka text-base font-600 mb-4" style={{ color: "#E8731A" }}>Navigation</h4>
            <ul className="space-y-2 text-gray-400 text-sm font-nunito">
              {[
                ["Accueil", "#inicio"],
                ["Attractions", "#atracciones"],
                ["Anniversaire", "#cumple"],
                ["Tarifs", "#precios"],
                ["Infos pratiques", "#infos"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="hover:text-white transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-fredoka text-base font-600 mb-4" style={{ color: "#7B35A0" }}>Contact</h4>
            <ul className="space-y-2.5 text-gray-400 text-sm font-nunito">
              <li>📍 123 Av. de l&apos;Aventure, Le Mans</li>
              <li>📞 +33 2 43 00 00 00</li>
              <li>✉️ contact@ludykid.fr</li>
              <li className="pt-1" style={{ color: "#E8731A" }}>
                <strong className="font-fredoka">Lun–Ven</strong> 14h00–19h30<br />
                <strong className="font-fredoka">Sam–Dim</strong> 10h00–20h00
              </li>
            </ul>
          </div>
        </div>

        <div className="h-1 rounded-full mb-6 overflow-hidden">
          <div className="h-full flex">
            {["#E8731A","#7B35A0","#2E9E2E","#FFD600","#D93030","#2E6FCC","#E8409A"].map((c) => (
              <div key={c} className="flex-1" style={{ backgroundColor: c }} />
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 text-sm font-nunito">
          <p>© 2026 Ludykid · Tous droits réservés.</p>
          <div className="flex gap-5">
            {["Confidentialité", "Cookies", "Mentions légales"].map((item) => (
              <a key={item} href="#" className="hover:text-white transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
