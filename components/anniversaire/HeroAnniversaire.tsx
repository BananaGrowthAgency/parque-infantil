import Image from "next/image";

export default function HeroAnniversaire() {
  return (
    <section className="relative pt-16">
      <div className="relative overflow-hidden" style={{ height: "72vh", minHeight: 500 }}>
        <Image
          src="/images/cumple.png"
          alt="Anniversaire enfant Ludykid"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 40%" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(123,53,160,0.45) 100%)",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6 max-w-3xl">
            <span
              className="inline-block font-fredoka font-600 text-white text-xs px-4 py-1.5 rounded-full mb-5"
              style={{ backgroundColor: "#E8731A" }}
            >
              🎂 ANNIVERSAIRE
            </span>
            <h1 className="font-fredoka text-3xl md:text-5xl font-700 text-white leading-tight mb-5 drop-shadow-xl">
              Anniversaire enfant Le Mans chez Ludykid
            </h1>
            <p className="font-nunito text-white/90 text-lg md:text-xl mb-7">
              Choisissez votre formule
            </p>
            <a
              href="#formules"
              className="inline-block font-fredoka font-600 text-white px-8 py-3.5 rounded-full text-lg shadow-xl transition-transform hover:scale-105"
              style={{ backgroundColor: "#E8731A" }}
            >
              Voir les formules
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
