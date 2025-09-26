import React from "react";
import HeroSection from "./component/HeroSection";
import ProductSection from "./component/ProductSection";

function LandingPage() {
  return (
    // Landing Page
    <section className="w-full grid grid-cols-1 grid-rows-[repeat(5,100dvh)_10dvh]">
      <HeroSection />
      <ProductSection />
    </section>
  );
}

export default LandingPage;
