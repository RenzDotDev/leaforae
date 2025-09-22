import React from "react";
import Header from "../../Header/Header";

function HeroSection() {
  return (
    <div className="grid w-full h-full grid-rows-auto">
      <Header />
      <section className="p-3 flex flex-col items-center justify-between text-center h-[90dvh]">
        <img src="/plant-image2.png" alt="plant image" className="h-[60%]" />
        <p className="text-5xl font-semibold">
          Bring Home the <span className="text-darkGreen">Green</span>
        </p>
        <p className="text-sm">
          Fresh plants, happy spaces, and a touch of nature for every home.
        </p>

        <div className="flex gap-2 items-center just-center">
          <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-darkGreen">
            <p className="text-white text-sm">Shop Now</p>
            <i className="fa-solid fa-arrow-right text-white"></i>
          </button>
          <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg">
            <p className="text-sm">Read Blogs</p>
            <i className="fa-solid fa-arrow-right"></i>
          </button>{" "}
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
