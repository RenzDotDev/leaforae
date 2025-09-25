import React from "react";

function HeroSection() {
  return (
    <section className="grid grid-rows-[auto_1fr] h-screen w-full min-h-screen gap-2 p-3">
      <Header />
      <MainContent />
    </section>
  );
}

export default HeroSection;

// Inner Components

function Header() {
  return (
    <header className="flex items-center justify-between px-1">
      {/* Logo */}
      <section className="flex items-center">
        <img src="/Leaforae Logo.png" alt="" className="h-[50px]" />
        <p className="font-bold text-darkGreen py-4 text-2xl">Leaforaé</p>
      </section>
      <button className="bg-darkGreen aspect-square h-[30px] flex items-center justify-center rounded-full p-1">
        <i className="fa-solid fa-bars text-white text-sm"></i>
      </button>
    </header>
  );
}

function MainContent() {
  return (
    <section className="relative bg-[url('/HeroSectionImage.png')] bg-cover bg-center rounded-2xl p-3">
      <div className="absolute top-0 left-0 w-full h-full bg-linear-to-t from-darkGreen rounded-2xl z-1"></div>
      <div className="relative z-10 text-center flex flex-col gap-2 items-center justify-center pt-[30dvh]">
        <p className="text-4xl text-white font-semibold">
          Find your best <br className="md:hidden" />
          <span>Green</span> Companion
        </p>
        <p className="text-white text-sm">
          Browse the best plants that suits you!
        </p>
        <div className="bg-white px-4 py-2 rounded-full flex gap-2 w-full">
          <input
            type="text"
            placeholder="Search plants here"
            className="text-sm outline-0 grow-1"
          />
          <div className="bg-darkGreen aspect-square h-[40px] flex items-center justify-center rounded-full">
            <i className="fa-solid fa-search text-white h-fit w-fit"></i>
          </div>
        </div>
      </div>
    </section>
  );
}
