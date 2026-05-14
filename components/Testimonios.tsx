import Script from "next/script";
import Doodle from "./Doodle";
import Wave from "./Wave";

export default function Testimonios() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Doodles de fondo */}
      <div className="absolute top-8 left-6 opacity-20">
        <Doodle type="star" color="#FFD600" size={65} />
      </div>
      <div className="absolute bottom-10 right-8 opacity-15">
        <Doodle type="cloud" color="#2E9E2E" size={80} />
      </div>
      <div className="absolute top-20 right-20 opacity-15 animate-spin-slow">
        <Doodle type="circle" color="#7B35A0" size={55} />
      </div>

      {/* Título — centrado */}
      <div className="text-center mb-12 px-6">
        <div className="inline-block relative">
          <div className="absolute inset-0 -skew-x-6 rounded" style={{ backgroundColor: "#7B35A0" }} />
          <h2 className="relative font-fredoka text-2xl md:text-3xl font-700 text-white px-8 py-2 tracking-wide">
            Les parents parlent mieux que nous{" "}
            <span style={{ color: "#FFD600" }}>💬</span>
          </h2>
        </div>
      </div>

      {/* Widget Elfsight — ancho total */}
      <div className="w-full px-0 relative z-10">
        <div className="elfsight-app-82bae877-7f5c-4732-ac4f-3cea8aa6ed5a" data-elfsight-app-lazy />
      </div>

      {/* Script Elfsight */}
      <Script
        src="https://elfsightcdn.com/platform.js"
        strategy="lazyOnload"
      />

      <Wave fill="#F9FAFB" bg="white" />
    </section>
  );
}
