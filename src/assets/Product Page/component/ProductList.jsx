import React from "react";
import ProductCard from "./ProductCard";

import NoResultMessage from "../NoResultMessage";

function ProductList({
  plantList,
  limit,
  onShowMore,
  searchQuery,
  setViewProduct,
  toggleViewProduct,
}) {
  return (
    <div className="w-full grid grid-cols-2 grid-rows-[auto] gap-2 py-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {plantList.length > 0 ? (
        plantList.slice(0, limit).map((plant, index) => {
          if (plant.default_image) {
            return (
              <ProductCard
                key={index}
                plantName={plant.common_name}
                plantImage={plant.default_image.original_url}
                setViewProduct={setViewProduct}
                toggleViewProduct={toggleViewProduct}
              />
            );
          } else {
            return null; // skip if no image
          }
        })
      ) : (
        <section className="col-span-full">
          <NoResultMessage searchQuery={searchQuery} />
        </section>
      )}

      {plantList.length > limit && ( // ✅ only show if more items exist
        <section className="mt-3 w-full col-span-full flex items-center justify-center">
          <button
            onClick={onShowMore}
            className="bg-darkGreen text-sm w-fit h-fit px-5 py-2 text-white rounded-lg"
          >
            Show More
          </button>
        </section>
      )}
    </div>
  );
}

export default ProductList;
