import React from "react";
import HeroSection from "./component/HeroSection";
import ProductSection from "./component/ProductSection";

function LandingPage() {
  return (
    // Landing Page
    <section className="mx-auto max-w-[1440px] w-full">
      <HeroSection></HeroSection>
      <ProductSection></ProductSection>
    </section>
  );
}

export default LandingPage;
