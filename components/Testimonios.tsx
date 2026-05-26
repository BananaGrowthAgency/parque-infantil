import Script from "next/script";
import Doodle from "./Doodle";
import Wave from "./Wave";
import FadeInUp from "./ui/FadeInUp";
import SquiggleTitle from "./ui/SquiggleTitle";

export default function Testimonios() {
  return (
    <section className="pt-20 pb-0 bg-white relative overflow-hidden">
      <div className="absolute top-8 left-6 opacity-20 animate-float">
        <Doodle type="star" color="#FFD600" size={65} />
      </div>
      <div className="absolute bottom-10 right-8 opacity-15 animate-float-slow">
        <Doodle type="cloud" color="#2E9E2E" size={80} />
      </div>
      <div className="absolute top-20 right-20 opacity-15 animate-spin-slow">
        <Doodle type="circle" color="#7B35A0" size={55} />
      </div>

      <FadeInUp className="mb-12 px-6">
        <SquiggleTitle color="#7B35A0">
          Les parents parlent mieux que nous{" "}
          <span style={{ color: "#FFD600" }}>💬</span>
        </SquiggleTitle>
      </FadeInUp>

      <div className="w-full px-0 relative z-10">
        <div className="elfsight-app-82bae877-7f5c-4732-ac4f-3cea8aa6ed5a" data-elfsight-app-lazy />
      </div>

      <Script
        src="https://elfsightcdn.com/platform.js"
        strategy="lazyOnload"
      />

      <Wave fill="#FFF4EC" bg="white" />
    </section>
  );
}
