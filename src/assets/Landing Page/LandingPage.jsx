import React from "react";
import HeroSection from "./component/HeroSection";
import ProductSection from "./component/ProductSection";

function LandingPage() {
  return (
    // Landing Page
    <section className="mx-auto max-w-[1440px] grid-rows-[auto] w-full h-[100dvh]">
      <HeroSection />
      {/* <ProductSection /> */}
    </section>
  );
}

export default LandingPage;
