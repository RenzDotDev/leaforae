import React from "react";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="w-full h-full p-3 grid grid-cols-1 grid-rows-[auto_1fr]">
      <Header />
      <MainContent />
    </div>
  );
}

export default HeroSection;

function Header() {
  const links = [
    {
      name: "Home",
      link: "",
    },
    {
      name: "Products",
      link: "/Product",
    },
    {
      name: "Blogs",
      link: "/Blog",
    },
    {
      name: "Contact Us",
      link: "Contact",
    },
  ];

  return (
    <header className="flex items-center justify-between w-full gap-3 py-4">
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

      {/* Navigation Bar (Larger Screen) */}
      <nav className="hidden lg:flex grow-1 gap-4 justify-end items-center">
        {links.map((link, index) => {
          return (
            <Link
              key={index}
              to={link.link}
              className={
                "text-sm w-fit " +
                (link.name === "Home"
                  ? "text-darkGreen font-semibold px-1 border-b-2 border-b-darkGreen"
                  : "")
              }
            >
              {link.name}
            </Link>
          );
        })}
        <button className="bg-darkGreen text-white text-sm px-3 py-2 rounded-lg">
          Login Now
        </button>
      </nav>

      {/* Hamburger Button */}
      <button className="cursor-pointer bg-darkGreen aspect-square h-[30px] sm:h-[35px] flex justify-center items-center rounded-full lg:hidden">
        <i className="fa-solid fa-bars text-white text-sm sm:text-lg"></i>
      </button>
    </header>
  );
}

function MainContent() {
  return (
    <section className="w-full h-full relative overflow-hidden rounded-2xl p-2 sm:px-5 pt-[20vh] text-center">
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
        <div className="w-full max-w-[500px] bg-white p-4 gap-2 flex items-center rounded-full">
          <input type="text" className="outline-0 grow-1 text-sm" />
          <i className="fa-solid fa-search text-gray-500"></i>
        </div>
      </div>
    </section>
  );
}
