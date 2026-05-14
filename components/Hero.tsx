import Image from "next/image";

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-16">
      <div className="relative h-[78vh] min-h-[520px] overflow-hidden">
        <Image
          src="/images/autos.jpg"
          alt="Enfants qui s'amusent à Ludykid"
          fill className="object-cover object-center" priority
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="font-fredoka text-4xl md:text-6xl font-700 text-white leading-tight mb-6 drop-shadow-xl max-w-2xl">
              Le parc indoor préféré des enfants au Mans
            </h1>
            <a href="#infos"
              className="inline-block font-fredoka font-600 text-white px-8 py-3.5 rounded-full text-lg shadow-xl transition-transform hover:scale-105"
              style={{ backgroundColor: "#E8731A" }}>
              Réservez maintenant
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
