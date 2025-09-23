import React from "react";
import { motion } from "motion/react";
import Header from "../../Header/Header";

function HeroSection() {
  return (
    <div className="grid w-full h-screen grid-rows-auto max-h-[800px]">
      <Header />
      <section className="p-3 flex flex-col items-center text-center h-[90dvh]">
        <div className="w-full h-fit grow-1 flex items-center justify-center">
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            src="/plant-image2.png"
            alt="plant image"
            className="h-[50dvh]"
          />
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
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
          </div>

          <div className="flex gap-2 items-center just-center">
            <motion.button
              className="flex items-center justify-center gap-2 px-6 py-3 h-full rounded-lg bg-darkGreen grow-1"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-white text-xs">Shop Now</p>
              <i className="fa-solid fa-arrow-right text-white text-xs"></i>
            </motion.button>
            <motion.button
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg h-full grow-1 border-2 border-darkGreen"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-xs">Read Blogs</p>
              <i className="fa-solid fa-arrow-right text-xs"></i>
            </motion.button>{" "}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
