import Doodle from "./Doodle";

const testimonios = [
  {
    nombre: "María García",
    avatar: "MG",
    texto: "Llevamos a nuestra hija para su cumpleaños y fue absolutamente increíble. Las instalaciones están impecables y el personal es muy amable. ¡Ya queremos repetir!",
    estrellas: 5,
    detalle: "Mamá de Lucía, 6 años",
    color: "#E8731A",
    bg: "#FFF4EC",
  },
  {
    nombre: "Carlos Rodríguez",
    avatar: "CR",
    texto: "La estructura multijuegos es una maravilla. Mis hijos no querían marcharse. Sin duda el mejor plan de ocio infantil de la zona.",
    estrellas: 5,
    detalle: "Papá de Mateo y Sofía",
    color: "#7B35A0",
    bg: "#F5EEFF",
  },
  {
    nombre: "Ana Martínez",
    avatar: "AM",
    texto: "Organizamos el cumpleaños de nuestro hijo aquí y superó todas las expectativas. El animador fue fenomenal y la sala estaba preciosa.",
    estrellas: 5,
    detalle: "Mamá de Diego, 7 años",
    color: "#E8409A",
    bg: "#FFF0FA",
  },
  {
    nombre: "Pedro López",
    avatar: "PL",
    texto: "Me gustó especialmente el espacio para padres. Tomé un café tranquilo mientras veía jugar a mi hijo. Se están muy cómodos.",
    estrellas: 5,
    detalle: "Papá de Iker, 4 años",
    color: "#2E9E2E",
    bg: "#EDFAED",
  },
];

export default function Testimonios() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Doodles de fondo */}
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
          <Doodle type="zigzag" color="#FFD600" size={40} className="mx-auto mb-3" />
          <h2 className="font-fredoka text-3xl md:text-4xl font-600 text-gray-800">
            Los padres se sienten bien en{" "}
            <span style={{ color: "#E8731A" }}>Ludy</span>
            <span style={{ color: "#7B35A0" }}>kid</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonios.map((t) => (
            <div
              key={t.nombre}
              className="rounded-2xl p-6 flex flex-col gap-4 border-2 border-transparent hover:shadow-lg transition-shadow"
              style={{ backgroundColor: t.bg, borderColor: t.color + "30" }}
            >
              {/* Estrellas */}
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
