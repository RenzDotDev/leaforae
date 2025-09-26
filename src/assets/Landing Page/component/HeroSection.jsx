import React from "react";

function HeroSection() {
  return (
    <div className="p-3 w-full h-full grid grid-cols-1 grid-rows-[auto_1fr] gap-2">
      <Header />
      <MainContent />
    </div>
  );
}

export default HeroSection;

function Header() {
  return (
    <header className="flex items-center justify-between w-full">
      {/* Logo */}
      <section className="flex items-center w-fit">
        <img
          src="/Leaforae Logo.png"
          alt=""
          className="h-[clamp(40px,10vw,50px)]"
        />
        <p className="text-[clamp(1.5rem,calc(2vw+0.75rem),2rem)] text-darkGreen font-bold">
          Leaforaé
        </p>
      </section>

      {/* Hamburger Button */}
      <button className="cursor-pointer bg-darkGreen aspect-square h-[30px] flex justify-center items-center rounded-full">
        <i className="fa-solid fa-bars text-white text-sm"></i>
      </button>
    </header>
  );
}

function MainContent() {
  return (
    <section className="w-full h-full relative overflow-hidden rounded-2xl p-2 pt-[20vh] text-center">
      {/* Background Image */}
      <div className="absolute z-[1] h-full w-full top-0 left-0">
        <img
          src="/HeroSectionImage.png"
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="absolute top-0 left-0 bg-linear-to-t from-darkGreen to-[#00000025] w-full h-full z-[2]"></div>

      {/* Text */}
      <div className="relative z-10 flex flex-col items-center gap-2">
        {/* Header */}
        <p
          className="text-[clamp(2rem,calc(3vw+1rem),3rem)] text-white font-semibold"
          style={{
            lineHeight: "40px",
          }}
        >
          Find your best <br className="sm:hidden" /> Green Companion
        </p>

        {/* Sub-Header */}
        <p className="text-sm text-white">Browse plants that suits you!</p>

        {/* Search Bar */}
        <div className="w-full bg-white p-3 flex items-center rounded-full">
          <input type="text" className="outline-0 grow-1 text-sm" />
          <i className="fa-solid fa-search text-gray-500"></i>
        </div>
      </div>
    </section>
  );
}
