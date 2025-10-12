import React from "react";

import ProductCard from "./ProductCard";

function ProductList() {
  return (
    <div className="w-full grid grid-cols-2 grid-rows-[auto] gap-2 py-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />

      <section className="mt-3 w-full col-span-full flex items-center justify-center">
        <button className="bg-darkGreen w-fit h-fit px-5 py-2 text-white rounded-lg">
          Show More
        </button>
      </section>
    </div>
  );
}

export default ProductList;
