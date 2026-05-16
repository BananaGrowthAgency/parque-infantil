import Script from "next/script";
import Doodle from "../Doodle";
import FadeInUp from "../ui/FadeInUp";
import SquiggleTitle from "../ui/SquiggleTitle";

export default function Avis() {
  return (
    <section className="py-20 relative overflow-hidden bg-white">
      <div className="absolute top-10 left-8 opacity-15 animate-float-slow">
        <Doodle type="circle" color="#FFD600" size={70} />
      </div>
      <div className="absolute bottom-12 right-12 opacity-15 animate-spin-slow">
        <Doodle type="swirl" color="#2E9E2E" size={60} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <FadeInUp className="mb-12">
          <SquiggleTitle color="#FFD600">Ce que pensent nos clients 💬</SquiggleTitle>
        </FadeInUp>

        {/* Widget Elfsight Google Reviews — Ludykid Anniversaire (carga inmediata, sin motion wrapper) */}
        <div className="elfsight-app-44366b23-a420-46ae-ab26-7b86ae5bca82" />
      </div>

      <Script src="https://elfsightcdn.com/platform.js" strategy="afterInteractive" />
    </section>
  );
}
