import React, { useEffect, useState } from "react";
import axios from "axios";

import Filters from "./Filters";

function SearchBar() {
  const [isSearchResultActive, setIsSearchResultActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterActive, setIsFilterActive] = useState(false);

  const toggleFilter = () => {
    setIsFilterActive((prev) => !prev);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(searchQuery);
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
    <>
      <section className="flex gap-2 w-full h-full items-center relative">
        <div className="grow-1 flex items-center gap-1 p-2 rounded-lg border-2 border-darkGreen">
          <i className="fa-solid fa-search text-darkGreen"></i>
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
            placeholder="Search something..."
            className="grow-1 text-sm p-1 outline-0"
          />
        </div>
        <button
          onClick={toggleFilter}
          className="bg-darkGreen size-[30px] rounded-full flex items-center justify-center"
        >
          <i className="fa-solid fa-sliders text-white text-xs"></i>
        </button>

        {isSearchResultActive && (
          <SearchResultContainer searchQuery={searchQuery} />
        )}
      </section>

      {isFilterActive && (
        <Filters toggleFilter={toggleFilter} isActive={isFilterActive} />
      )}
    </>
  );
}

export default SearchBar;

// Search Result Container
function SearchResultContainer({ searchQuery }) {
  const [plants, setPlants] = useState([]);
  const [isFound, setIsFound] = useState(false);

  useEffect(() => {
    axios.get("/PlantData.json").then((res) => {
      setPlants(res.data.data);
    });
  }, []);

  const filteredPlants = plants.filter((plant) =>
    plant.common_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="absolute top-[110%] z-30 border-2 border-darkGreen rounded-lg w-full flex flex-col max-h-[150px] overflow-y-auto">
      {filteredPlants.length > 0 &&
        filteredPlants.map((plant, index) => {
          return <SearchResultItem key={index} resultTxt={plant.common_name} />;
        })}

      {filteredPlants.length === 0 && <NoSearchResult />}
    </section>
  );
}

// Search Result Item
function SearchResultItem({ resultTxt }) {
  return (
    <div className="flex gap-2 items-center text-sm hover:bg-lightGreen sm:p-2 px-2 rounded-lg cursor-pointer">
      <i className="fa-solid fa-search"></i>
      <p className="py-1.5 text-sm">{resultTxt}</p>
    </div>
  );
}

// No search results
function NoSearchResult() {
  return (
    <div>
      <p>No result found!</p>
    </div>
  );
}
