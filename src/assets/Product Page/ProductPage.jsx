import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence, easeIn, easeOut } from "motion/react";

import ProductPageHeader from "./component/ProductPageHeader";
import SearchBar from "./component/SearchBar";

function ProductPage() {
  return (
    <div className="w-full h-screen grid grid-cols-1 grid-rows-[7%_7%_auto] p-3 gap-2">
      <ProductPageHeader />
      <SearchBar />
    </div>
  );
}

export default ProductPage;
