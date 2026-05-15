import Script from "next/script";
import Doodle from "../Doodle";

export default function Avis() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: "#EDFAED" }}
    >
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
            <h2 className="relative font-fredoka text-2xl md:text-3xl font-bold text-white px-8 py-2 tracking-wide">
              Ce que pensent nos clients 💬
            </h2>
          </div>
        </div>

        {/* Widget Elfsight Google Reviews — Ludykid Anniversaire */}
        <div
          className="elfsight-app-44366b23-a420-46ae-ab26-7b86ae5bca82"
          data-elfsight-app-lazy
        />
      </div>

      <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
    </section>
  );
}
