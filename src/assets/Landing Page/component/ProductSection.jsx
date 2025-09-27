import React from "react";
import { easeIn, motion } from "motion/react";
import { useState } from "react";

function ProductSection() {
  return (
    <div className="w-full h-full p-3 flex flex-col gap-">
      <HeaderText />
      <ProductList />
    </div>
  );
}

export default ProductSection;

function HeaderText() {
  return (
    <h1 className="text-center text-[clamp(2rem,calc(3vw+1rem),3rem)] font-semibold">
      Our Best Quality Plants
    </h1>
  );
}

function ProductList() {
  const [activeCategory, setActiveCategory] = useState("Indoor");
  const categories = [
    {
      category: "Indoor",
      url: "/indoorPlant.jpg",
    },
    {
      category: "Outdoor",
      url: "/outdoorPlant.jpg",
    },
    {
      category: "Flowers",
      url: "/flowerPlant.jpg",
    },
    {
      category: "Trees",
      url: "/treePlant.jpg",
    },
  ];

  const handleSetActiveCategory = (category) => {
    setActiveCategory(category);
  };

  return (
    <>
      {/* Category List */}
      <section className="no-scrollbar grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 w-full py-4 justify-center">
        {categories.map((category, index) => {
          return (
            <motion.section
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.1 * index,
                duration: 0.4,
                animationTimingFunction: easeIn,
              }}
              className="relative aspect-[9/12] rounded-2xl p-3 w-full bg-cover bg-center flex items-end justify-end"
              key={index}
              style={{ backgroundImage: `url(${category.url})` }}
            >
              <div className="absolute bottom-0 left-0 bg-gradient-to-t rounded-2xl z-[0] from-darkGreen via-[#3a5a4030] to-[#00000010] h-full w-full "></div>
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="flex items-center gap-1 bg-white py-2 px-5 rounded-full z-[10] cursor-pointer"
              >
                <p className="text-sm">{category.category}</p>
                <i className="fa-solid fa-arrow-right rotate-[-45deg] text-sm"></i>
              </motion.button>
            </motion.section>
          );
        })}
      </section>
    </>
  );
}

function ProductCard() {
  return <section></section>;
}
