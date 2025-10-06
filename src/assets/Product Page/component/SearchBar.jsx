import React, { useEffect, useState } from "react";
import axios from "axios";

import Filters from "./Filters";
import ProductCard from "./ProductCard";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [plants, setPlants] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);

  const toggleFilter = () => {
    setIsFilterActive((prev) => !prev);
  };

  // Fetch plant data once
  useEffect(() => {
    axios.get("/PlantData.json").then((res) => {
      setPlants(res.data.data);
      setFilteredPlants(res.data.data); // show all plants initially
    });
  }, []);

  // Filter plants when searchQuery changes
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery.trim() === "") {
        setFilteredPlants(plants); // reset to all if search is empty
      } else {
        const results = plants.filter((plant) =>
          plant.common_name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredPlants(results);
      }
    }, 1000); // debounce delay

    return () => clearTimeout(timer);
  }, [searchQuery, plants]);

  return (
    <section className="grid w-full grid-cols-1 grid-rows-[auto_auto]">
      {/* Search Bar */}
      <section className="flex gap-2 w-full h-fit items-center relative">
        <div className="grow-1 flex items-center gap-1 p-2 rounded-lg border-2 border-darkGreen">
          <i className="fa-solid fa-search text-darkGreen"></i>
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
            placeholder="Search something..."
            className="grow-1 text-sm p-1 outline-0"
          />
          {searchQuery && (
            <i
              className="fa-solid fa-xmark text-darkGreen text-sm cursor-pointer"
              onClick={() => setSearchQuery("")}
            ></i>
          )}
        </div>

        {/* Filter Button */}
        <button
          onClick={toggleFilter}
          className="bg-darkGreen size-[30px] rounded-full flex items-center justify-center"
        >
          <i className="fa-solid fa-sliders text-white text-xs"></i>
        </button>
      </section>

      {/* Product List */}
      <section className="no-scrollbar grid grid-cols-2 gap-1.5 gap-y-5 w-full py-3 items-start sm:grid-cols-3 sm:gap-3 md:grid-cols-5">
        {filteredPlants.length > 0 ? (
          <>
            {filteredPlants.slice(0, visibleCount).map((plant, index) => (
              <ProductCard
                key={index}
                productName={plant.common_name}
                productUrl={plant.default_image.medium_url}
              />
            ))}

            {visibleCount < filteredPlants.length && (
              <div className="w-full flex justify-center mt-3 col-span-full">
                <button
                  onClick={() => setVisibleCount((prev) => prev + 10)}
                  className="text-white border bg-darkGreen px-3 py-1 rounded-md text-sm hover:bg-darkGreen hover:text-white transition"
                >
                  Show More
                </button>
              </div>
            )}
          </>
        ) : (
          <NoSearchResult searchQuery={searchQuery} />
        )}
      </section>

      {isFilterActive && (
        <Filters toggleFilter={toggleFilter} isActive={isFilterActive} />
      )}
    </section>
  );
}

export default SearchBar;

// No search results component
function NoSearchResult({ searchQuery }) {
  return (
    <div className="h-150 w-full flex flex-col items-center justify-center p-3">
      <img
        src="/noSearchResultImage.png"
        alt="No Result Illustration"
        className="aspect-square w-25"
      />
      <p className="text-sm text-center">
        No result found for{" "}
        <span className="text-darkGreen font-semibold">{searchQuery}</span>
      </p>
    </div>
  );
}
