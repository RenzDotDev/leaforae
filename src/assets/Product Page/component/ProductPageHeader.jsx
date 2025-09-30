import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Filters from "./Filters";

function ProductPageHeader() {
  const [isSearchActive, setIsSearchActive] = useState(false);

  return (
    <>
      <header className="w-full flex justify-between">
        {/* Search Bar */}
        <Link to={"/Profile"} className="flex items-center gap-1">
          {/* Profile Image */}
          <div>
            <img
              src="/profileImage.jpg"
              alt="Profile Image"
              className="aspect-square object-cover h-10 rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-xs text-gray-400">Hello John</p>
            <p className="text-sm font-semibold">Welcome back</p>
          </div>
        </Link>

        {/* Icons (cart & favorites) */}
        <section className="flex items-center justify-end gap-1">
          <Link
            to={"/Favorite"}
            className="relative bg-darkGreen size-[30px] rounded-full flex items-center justify-center"
          >
            <i className="fa-solid fa-heart text-white text-xs"></i>
            <p className="absolute top-[-2px] right-[-2px] bg-green text-xs size-3 rounded-full flex items-center justify-center text-white"></p>
          </Link>

          <Link
            to={"/Cart"}
            className="relative bg-darkGreen size-[30px] rounded-full flex items-center justify-center"
          >
            <i className="fa-solid fa-cart-shopping text-white text-xs"></i>
            <p className="absolute top-[-2px] right-[-2px] bg-green text-xs size-3 rounded-full flex items-center justify-center text-white"></p>
          </Link>
          {/* <img
          src="/profileImage.jpg"
          alt=""
          className="h-[35px] rounded-full border-2 border-darkGreen p-0.5"
        /> */}
        </section>
      </header>
    </>
  );
}

export default ProductPageHeader;
