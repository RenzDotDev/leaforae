import React from "react";
import { motion } from "motion/react";
import Header from "../../Header/Header";

function HeroSection() {
  return (
    <div className="grid w-full h-full grid-rows-auto">
      <Header />
      <section className="p-3 flex flex-col items-center justify-between text-center h-[90dvh]">
        <motion.img
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          src="/plant-image2.png"
          alt="plant image"
          className="h-[60%]"
        />
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl font-semibold"
        >
          Bring Home the <span className="text-darkGreen">Green</span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="text-sm"
        >
          Fresh plants, happy spaces, and a touch of nature for every home.
        </motion.p>

        <div className="flex gap-2 items-center just-center">
          <motion.button
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-darkGreen"
          >
            <p className="text-white text-sm">Shop Now</p>
            <i className="fa-solid fa-arrow-right text-white"></i>
          </motion.button>
          <motion.button
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg"
          >
            <p className="text-sm">Read Blogs</p>
            <i className="fa-solid fa-arrow-right"></i>
          </motion.button>{" "}
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
