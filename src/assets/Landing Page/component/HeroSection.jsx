import React from "react";

import Header from "../../Footer&Header/Header";
import { motion } from "motion/react";

function HeroSection() {
  return (
    <>
      <div className="grid grid-cols-4 grid-rows-12 gap-2 p-2 w-screen h-screen min-h-[836px]">
        {/* Header */}
        <div className="col-span-4 row-span-1">
          <Header />
        </div>

        {/* Header Text */}
        <div className=" col-span-4 row-span-2 grid place-items-center">
          <p className="text-4xl font-semibold text-center">
            Grow Your Space with <br />
            <span className="text-darkGreen"> Nature's Touch</span>
          </p>
        </div>

        {/* Hero Section Image */}
        <div className="col-span-4 row-span-5 bg-[url('/HeroSectionImage.png')] bg-cover rounded-2xl relative">
          <div className="absolute right-2 bottom-2 backdrop-blur-3xl rounded-full overflow-hidden">
            <button className="flex gap-1 items-center bg-[#FFFFFF50] justify-center px-4 py-2 rounded-full">
              <p className="text-sm">Shop Now</p>
              <i className="fa-solid fa-arrow-right text-sm rotate-[-45deg]"></i>
            </button>
          </div>
        </div>

        {/* Product 1 */}
        <motion.div
          whileTap={{ scale: 0.95 }}
          className="flex gap-2 col-span-4 row-span-2 overflow-hidden py-2 rounded-2"
        >
          {/* Product Image */}
          <div className="bg-amber-500 aspect-square h-full rounded-2xl overflow-hidden">
            <img
              src="https://perenual.com/storage/species_image/152_acer_pseudosieboldianum/small/2560px-Acer_pseudosieboldianum_flowers.jpg"
              alt=""
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="font-semibold text-xl">Korean Maple</p>
              <div>
                <i className="fa-solid fa-star text-yellow-400"></i>
                <i className="fa-solid fa-star text-yellow-400"></i>
                <i className="fa-solid fa-star text-yellow-400"></i>
                <i className="fa-solid fa-star text-yellow-400"></i>
                <i className="fa-solid fa-star text-yellow-400"></i>
              </div>
            </div>
            <p className="px-5 py-1 w-fit text-white text-sm bg-darkGreen rounded-full text-center">
              $20.29
            </p>
          </div>
        </motion.div>

        {/* Product 2 */}
        <motion.div
          whileTap={{ scale: 0.95 }}
          className="flex gap-2 col-span-4 row-span-2 overflow-hidden py-2 rounded-2"
        >
          {/* Product Image */}
          <div className="bg-amber-500 aspect-square h-full rounded-2xl overflow-hidden">
            <img
              src="https://perenual.com/storage/species_image/159_acer_saccharum_legacy/small/Acer_saccharum_Legacy_5zz.jpg"
              alt=""
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="font-semibold text-xl">Legacy Sugar Maple</p>
              <div>
                <i className="fa-solid fa-star text-yellow-400"></i>
                <i className="fa-solid fa-star text-yellow-400"></i>
                <i className="fa-solid fa-star text-yellow-400"></i>
                <i className="fa-solid fa-star text-yellow-400"></i>
              </div>
            </div>
            <p className="px-5 py-1 w-fit text-white text-sm bg-darkGreen rounded-full text-center">
              $19.99
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default HeroSection;

// INNER COMPONENTS
