import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence, easeIn, easeOut } from "motion/react";

function ProductPage() {
  return (
    <div className="w-full grid grid-cols-1 grid-rows-[10dvh_90dvh] border gap-5">
      <Header />
    </div>
  );
}

export default ProductPage;

function Header() {
  const [isSearchActive, setIsSearchActive] = useState(false);

  return (
    <header className="flex justify-between items-center gap-5 p-3">
      {/* Search Bar */}
      <AnimatePresence>
        <motion.section
          initial={false}
          animate={{ width: isSearchActive ? "100%" : "0%" }}
          exit={{ width: ["100%"] }}
          transition={{ animationTimingFunction: easeOut, duration: 0.5 }}
          className={`w-fit ${
            isSearchActive ? "border-2 border-darkGreen" : "border-0"
          } rounded-lg p-1`}
        >
          <motion.div
            initial={{ width: "fit" }}
            animate={{ width: "100%" }}
            exit={{ width: "fit" }}
            className="w-auto flex items-center gap-1"
          >
            {/* Search Button */}
            <motion.button
              onClick={() => setIsSearchActive(true)}
              className={`${
                isSearchActive ? "bg-transparent" : "bg-darkGreen"
              } aspect-square h-[30px] rounded-full flex items-center justify-center transition`}
            >
              <i
                className={`fa-solid fa-search ${
                  isSearchActive
                    ? "text-darkGreen text-sm"
                    : "text-white text-xs"
                }`}
              ></i>
            </motion.button>

            {/* Input Field */}
            <input
              type="text"
              className={`${
                isSearchActive ? "inline" : "hidden"
              } w-full text-sm outline-0`}
            />

            {/* Close Button */}
            <button
              onClick={() => setIsSearchActive(false)}
              className={`${
                isSearchActive ? "bg-transparent" : "bg-darkGreen hidden"
              } aspect-square h-[30px] rounded-full flex items-center justify-center`}
            >
              <i
                className={`fa-solid fa-xmark ${
                  isSearchActive
                    ? "text-darkGreen text-sm"
                    : "text-white text-xs"
                }`}
              ></i>
            </button>
          </motion.div>
        </motion.section>
      </AnimatePresence>

      {/* Icons (cart & favorites) */}
      <section className="flex items-center justify-end gap-1">
        <button className="relative bg-darkGreen size-[30px] rounded-full flex items-center justify-center">
          <i className="fa-solid fa-heart text-white text-xs"></i>
          <p className="absolute top-[-2px] right-[-2px] bg-green text-xs size-3 rounded-full flex items-center justify-center text-white"></p>
        </button>
        <button className="relative bg-darkGreen size-[30px] rounded-full flex items-center justify-center">
          <i className="fa-solid fa-cart-shopping text-white text-xs"></i>
          <p className="absolute top-[-2px] right-[-2px] bg-green text-xs size-3 rounded-full flex items-center justify-center text-white"></p>
        </button>
        {/* <img
          src="/profileImage.jpg"
          alt=""
          className="h-[35px] rounded-full border-2 border-darkGreen p-0.5"
        /> */}
      </section>
    </header>
  );
}
