import React from "react";
import HeroSection from "./component/HeroSection";
import ProductSection from "./component/ProductSection";
import AboutUsSection from "./component/AboutUsSection";

function LandingPage() {
  return (
    // Landing Page
    <section className="w-full grid grid-cols-1 grid-rows-[100dvh_auto_repeat(4,100dvh)_10dvh] gap-5">
      <HeroSection />
      <ProductSection />
      <AboutUsSection />
    </section>
  );
}

export default LandingPage;
