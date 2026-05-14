import Doodle from "../Doodle";

const REVIEWS = [
  {
    name: "Jessica Guillemot",
    date: "Il y a 1 mois",
    color: "#E8731A",
    text: "Aujourd'hui, c'était l'anniversaire de mes copines ! C'était super ! Activité chasse au trésor, tout le monde s'est régalé. Merci à toute l'équipe Ludykid.",
  },
  {
    name: "Sophie Cosset",
    date: "Il y a 2 mois",
    color: "#7B35A0",
    text: "Un lieu que je connais depuis plusieurs années et j'aimais déjà. Leur professionnalisme à encore brillé pour l'anniversaire de mon fils.",
  },
  {
    name: "Jb (renevoy)",
    date: "Il y a 3 semaines",
    color: "#2E9E2E",
    text: "Tout était parfait ! Nous avons pu réserver à la dernière minute pour l'anniversaire de notre petite. L'équipe est top.",
  },
  {
    name: "Jean-Claude Pastor",
    date: "Il y a 2 semaines",
    color: "#7B35A0",
    text: "Bien plus intéressant et accessible que le Quill. Les jeux sont plus variés et ils proposent des activités encadrées vraiment géniales.",
  },
];

export default function Avis() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-10 left-8 opacity-15">
        <Doodle type="circle" color="#FFD600" size={70} />
      </div>
      <div className="absolute bottom-12 right-12 opacity-15 animate-spin-slow">
        <Doodle type="swirl" color="#2E9E2E" size={60} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-12">
          <div className="inline-block relative">
            <div
              className="absolute inset-0 -skew-x-6 rounded"
              style={{ backgroundColor: "#2E9E2E" }}
            />
            <h2 className="relative font-fredoka text-2xl md:text-3xl font-700 text-white px-8 py-2 tracking-wide">
              Ce que pensent nos clients 💬
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {REVIEWS.map((r) => (
            <div
              key={r.name}
              className="bg-white rounded-2xl p-5 shadow-md border border-gray-100 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-fredoka font-700"
                  style={{ backgroundColor: r.color }}
                >
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="font-fredoka font-600 text-sm text-gray-800">{r.name}</p>
                  <p className="font-nunito text-xs text-gray-400">{r.date}</p>
                </div>
              </div>
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FFD600">
                    <path d="M12 2 L14.5 8.6 L21.5 9.3 L16.2 14 L17.8 21 L12 17.3 L6.2 21 L7.8 14 L2.5 9.3 L9.5 8.6 Z" />
                  </svg>
                ))}
              </div>
              <p className="font-nunito text-sm text-gray-600 leading-relaxed flex-1">
                &ldquo;{r.text}&rdquo;
              </p>
              <p className="mt-3 text-xs font-nunito" style={{ color: "#7B35A0" }}>
                Lire la suite
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
