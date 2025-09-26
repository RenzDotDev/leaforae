import React from "react";
import { useState } from "react";

function ProductSection() {
  return (
    <div className="w-full h-full p-3 flex flex-col gap-">
      <HeaderText />
      <CategoryList />
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

function CategoryList() {
  const [activeCategory, setActiveCategory] = useState("Indoor");
  const categories = ["Indoor", "Outdoor", "Flower", "Succulent", "Tree"];

  const handleSetActiveCategory = (category) => {
    setActiveCategory(category);
  };

  return (
    <section className="no-scrollbar flex gap-2 w-ful overflow-scroll py-4">
      {categories.map((category, index) => {
        return (
          <p
            className={`cursor-pointer px-4 py-1 rounded-full ${
              activeCategory === category
                ? "text-white font-semibold border-2 bg-darkGreen"
                : ""
            }`}
            onClick={() => handleSetActiveCategory(category)}
            key={index}
          >
            {category}
          </p>
        );
      })}
    </section>
  );
}
