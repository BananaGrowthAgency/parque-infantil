import Doodle from "./Doodle";

const testimonios = [
  {
    nombre: "Marie Dupont",
    avatar: "MD",
    texto: "Nous avons emmené notre fille pour son anniversaire et c'était absolument incroyable. Les installations sont impeccables et le personnel est très attentionné. On revient bientôt !",
    estrellas: 5,
    detalle: "Maman de Léa, 6 ans",
    color: "#E8731A",
    bg: "#FFF4EC",
  },
  {
    nombre: "Thomas Martin",
    avatar: "TM",
    texto: "La structure multi-jeux est une merveille. Mes enfants ne voulaient pas partir. Sans aucun doute la meilleure sortie famille de la région.",
    estrellas: 5,
    detalle: "Papa de Mathis et Sofia",
    color: "#7B35A0",
    bg: "#F5EEFF",
  },
  {
    nombre: "Claire Bernard",
    avatar: "CB",
    texto: "On a organisé l'anniversaire de notre fils ici et ça a dépassé toutes nos attentes. L'animateur était génial et la salle était magnifiquement décorée.",
    estrellas: 5,
    detalle: "Maman de Hugo, 7 ans",
    color: "#E8409A",
    bg: "#FFF0FA",
  },
  {
    nombre: "Pierre Leroy",
    avatar: "PL",
    texto: "J'ai particulièrement apprécié l'espace parents. J'ai pris un café tranquillement en regardant mon fils jouer. On s'y sent vraiment bien.",
    estrellas: 5,
    detalle: "Papa de Théo, 4 ans",
    color: "#2E9E2E",
    bg: "#EDFAED",
  },
];

export default function Testimonios() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-8 left-6 opacity-20">
        <Doodle type="star" color="#FFD600" size={65} />
      </div>
      <div className="absolute bottom-10 right-8 opacity-15">
        <Doodle type="cloud" color="#2E6FCC" size={80} />
      </div>
      <div className="absolute top-20 right-20 opacity-15 animate-spin-slow">
        <Doodle type="circle" color="#E8409A" size={55} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-12">
          <div className="inline-block relative">
            <div className="absolute inset-0 -skew-x-6 rounded" style={{ backgroundColor: "#7B35A0" }} />
            <h2 className="relative font-fredoka text-2xl md:text-3xl font-700 text-white px-8 py-2 tracking-wide">
              Les parents se sentent bien chez{" "}
              <span style={{ color: "#FFD600" }}>Ludykid</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonios.map((t) => (
            <div
              key={t.nombre}
              className="rounded-2xl p-6 flex flex-col gap-4 border-2 border-transparent hover:shadow-lg transition-shadow"
              style={{ backgroundColor: t.bg, borderColor: t.color + "30" }}
            >
              <div className="flex gap-0.5">
                {Array.from({ length: t.estrellas }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" style={{ color: "#FFD600" }} viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="font-nunito text-gray-600 text-sm leading-relaxed flex-1 italic">
                &ldquo;{t.texto}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-2 border-t" style={{ borderColor: t.color + "30" }}>
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-fredoka font-700 text-white flex-shrink-0"
                  style={{ backgroundColor: t.color }}>
                  {t.avatar}
                </div>
                <div>
                  <p className="font-fredoka text-sm font-600 text-gray-800">{t.nombre}</p>
                  <p className="font-nunito text-xs text-gray-400">{t.detalle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
