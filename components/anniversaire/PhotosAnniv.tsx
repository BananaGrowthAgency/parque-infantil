import Image from "next/image";
import Doodle from "../Doodle";

const PHOTOS = [
  { src: "/images/seccion3.jpg", alt: "Enfant qui saute" },
  { src: "/images/pelotas2.jpg", alt: "Piscine à balles" },
  { src: "/images/tobogan-azul.jpg", alt: "Toboggan" },
];

export default function PhotosAnniv() {
  return (
    <section
      className="py-16 relative overflow-hidden"
      style={{ backgroundColor: "#FFFAD6" }}
    >
      {/* Doodles amarillos/naranjas de fondo */}
      <div className="absolute top-8 left-6 opacity-25 animate-float">
        <Doodle type="star" color="#FFD600" size={70} />
      </div>
      <div className="absolute top-16 right-10 opacity-20 animate-wiggle">
        <Doodle type="circle" color="#E8731A" size={56} />
      </div>
      <div className="absolute bottom-10 left-20 opacity-20 animate-float">
        <Doodle type="swirl" color="#FFD600" size={64} />
      </div>
      <div className="absolute bottom-12 right-16 opacity-25 animate-wiggle">
        <Doodle type="star2" color="#FFD600" size={52} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-10">
          <div className="inline-block relative">
            <div
              className="absolute inset-0 -skew-x-6 rounded shadow-md"
              style={{ backgroundColor: "#FFD600" }}
            />
            <h2 className="relative font-fredoka text-2xl md:text-3xl font-bold text-gray-900 px-8 py-2 tracking-wide">
              Anniversaire Ludykid en photos 📸
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PHOTOS.map((p) => (
            <div
              key={p.src}
              className="relative rounded-2xl overflow-hidden shadow-md group"
              style={{ height: 320 }}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-end">
                <span className="w-full text-center font-fredoka text-white text-sm py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  {p.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
