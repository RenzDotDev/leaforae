import React from "react";

import { motion } from "motion/react";

function Header() {
  return (
    <div className="flex items-center justify-between h-full">
      {/* Logo */}
      <motion.div whileTap={{ scale: 0.9 }} className="flex items-center gap-1">
        <img src="/Leaforae Logo.png" alt="" className="h-[50px]" />
        <p className="font-bold text-xl text-darkGreen">Leaforaé</p>
      </motion.div>

      {/* Hamburger Icon */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        className="bg-darkGreen aspect-square h-[30px] flex items-center justify-center rounded-full p-1"
      >
        <i className="fa-solid fa-bars text-xs text-white"></i>
      </motion.button>
    </div>
  );
}

export default Header;
