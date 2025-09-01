import React from 'react';

import Header from "../Header/header.jsx";
import HeroSection from "./component/heroSection.jsx";
import BlogSection from "./component/blogSection.jsx";
import ProductSection from "./component/productSection.jsx";
import CommunitySection from "./component/communitySection.jsx";
import Footer from "../Footer/footer.jsx";

import './landingPage.css'

function LandingPage() {
  return (
    <div className="landing-page-con">
        <Header />
        <HeroSection />
        <BlogSection />
        <ProductSection />
        <CommunitySection />
        <Footer />
    </div>
  )
};

export default LandingPage;