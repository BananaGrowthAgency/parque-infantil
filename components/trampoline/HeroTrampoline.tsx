import Image from "next/image";

export default function HeroTrampoline() {
  return (
    <section className="relative pt-16">
      <div className="relative overflow-hidden" style={{ height: "62vh", minHeight: 440 }}>
        <Image
          src="/images/home/trampoline.jpg"
          alt="Espace trampoline chez Ludykid Le Mans"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 30%" }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(232,115,26,0.28) 60%, rgba(255,248,236,0) 100%)",
          }}
        />
        <div className="absolute bottom-0 inset-x-0 h-20 sm:h-28 bg-gradient-to-b from-transparent to-[#FFF8EC] pointer-events-none" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6 max-w-3xl">
            <h1
              className="font-fredoka text-4xl md:text-6xl font-extrabold text-white leading-tight"
              style={{ textShadow: "0 0 6px rgba(0,0,0,0.9), 1px 1px 4px rgba(0,0,0,0.7)" }}
            >
              Ludykid | Espace{" "}
              <span className="inline-block px-3 py-1 rounded-clay bg-lk-yellow text-[#3A2A00] -rotate-2 shadow-clay-yellow" style={{ textShadow: "none" }}>
                Trampoline
              </span>{" "}
              Enfant Le Mans
            </h1>
            <p
              className="font-nunito text-white/95 text-base md:text-lg mt-5"
              style={{ textShadow: "0 0 5px rgba(0,0,0,0.8), 1px 1px 3px rgba(0,0,0,0.6)" }}
            >
              À la recherche d&apos;un espace trampoline pour votre enfant au Mans ? Offrez-lui un espace ludique et sécurisé pour se dépenser et s&apos;amuser chez Ludykid.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
