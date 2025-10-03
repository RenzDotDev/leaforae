import React, { useEffect, useState } from "react";
import axios from "axios";

import Filters from "./Filters";
import ProductList from "./ProductList";

function SearchBar() {
  const [isSearchResultActive, setIsSearchResultActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [plants, setPlants] = useState([]);

  const filteredPlants = plants.filter((plant) =>
    plant.common_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFilter = () => {
    setIsFilterActive((prev) => !prev);
  };

  const toggleSearchResultContainer = () => {
    setIsSearchResultActive((prev) => !prev);
  };

  useEffect(() => {
    axios.get("/PlantData.json").then((res) => {
      setPlants(res.data.data);
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery === "") {
        setIsSearchResultActive(false);
      } else {
        setIsSearchResultActive(true);
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  return (
    <section className="grid w-full h-full grid-rows-[10%_90%]">
      {/* Search Bar */}
      <section className="flex gap-2 w-full h-full items-center relative">
        {/* Search Bar */}
        <div className="grow-1 flex items-center gap-1 p-2 rounded-lg border-2 border-darkGreen">
          <i className="fa-solid fa-search text-darkGreen"></i>
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
            placeholder="Search something..."
            className="grow-1 text-sm p-1 outline-0"
          />
          <i
            className="fa-solid fa-xmark text-darkGreen text-sm"
            onClick={() => {
              setIsSearchResultActive(false), setSearchQuery("");
            }}
          ></i>
        </div>

        {/* Filter Button */}
        <button
          onClick={toggleFilter}
          className="bg-darkGreen size-[30px] rounded-full flex items-center justify-center"
        >
          <i className="fa-solid fa-sliders text-white text-xs"></i>
        </button>

        {isSearchResultActive && (
          <SearchResultContainer
            searchQuery={searchQuery}
            onSetSearchQuery={setSearchQuery}
            setIsSearchResultActive={toggleSearchResultContainer}
            filteredPlants={filteredPlants}
          />
        )}
      </section>

      {/* Product List */}
      <section>
        <ProductList />
      </section>

      {isFilterActive && (
        <Filters toggleFilter={toggleFilter} isActive={isFilterActive} />
      )}
    </section>
  );
}

export default SearchBar;

// Search Result Container
function SearchResultContainer({
  searchQuery,
  onSetSearchQuery,
  setIsSearchResultActive,
  filteredPlants,
}) {
  return (
    <section className="absolute top-[110%] z-30 border-2 px-2 border-darkGreen rounded-lg w-full flex flex-col max-h-[150px] overflow-y-auto bg-white no-scrollbar">
      {filteredPlants.length > 0 &&
        filteredPlants.map((plant, index) => {
          return (
            <SearchResultItem
              key={index}
              resultTxt={plant.common_name}
              onSetSearchQuery={onSetSearchQuery}
              setIsSearchResultActive={setIsSearchResultActive}
            />
          );
        })}

      {filteredPlants.length === 0 && (
        <NoSearchResult searchQuery={searchQuery} />
      )}
    </section>
  );
}

// Search Result Item
function SearchResultItem({
  resultTxt,
  onSetSearchQuery,
  setIsSearchResultActive,
}) {
  return (
    <div
      onClick={() => {
        onSetSearchQuery(resultTxt);
        setIsSearchResultActive(false);
      }}
      className="flex gap-2 items-center text-sm hover:bg-lightGreen sm:p-2 px-2 rounded-lg cursor-pointer"
    >
      <i className="fa-solid fa-search"></i>
      <p className="py-1.5 text-sm">{resultTxt}</p>
    </div>
  );
}

// No search results
function NoSearchResult({ searchQuery }) {
  return (
    <div className="h-150 w-full flex flex-col items-center justify-center p-3">
      <img
        src="/noSearchResultImage.png"
        alt="No Result Illustration"
        className="aspect-square w-25"
      />
      <p className="text-sm">
        No result found! for{" "}
        <span className="text-darkGreen">{searchQuery}</span>
      </p>
    </div>
  );
}
