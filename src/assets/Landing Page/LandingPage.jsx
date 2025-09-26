import React from "react";
import HeroSection from "./component/HeroSection";
import ProductSection from "./component/ProductSection";
import AboutUsSection from "./component/AboutUsSection";
import OurTeamSection from "./component/OurTeamSection";
import Footer from "../Footer&Header/Footer";

function LandingPage() {
  return (
    // Landing Page
    <section className="w-full grid grid-cols-1 grid-rows-[100dvh_auto_auto_auto_10dvh] gap-5">
      <HeroSection />
      <ProductSection />
      <AboutUsSection />
      <OurTeamSection />
      <Footer />
    </section>
  );
}

export default LandingPage;
