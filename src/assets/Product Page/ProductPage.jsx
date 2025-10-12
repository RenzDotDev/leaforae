import React, { useState, useEffect } from "react";
import axios from "axios";

import ProductHeader from "./component/ProductHeader";
import SearchBar from "./component/SearchBar";
import ProductList from "./component/ProductList";
import FilterContainer from "./component/FilterContainer";
import ViewProduct from "./component/ViewProduct";

function ProductPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [plantList, setPlantList] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState([]);
  const [limit, setLimit] = useState(20);
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [viewProduct, setViewProduct] = useState("");
  const [isViewProductActive, setIsViewProductAcitve] = useState(false);

  // Fetch data once
  useEffect(() => {
    axios.get("/PlantData.json").then((res) => {
      setPlantList(res.data.data);
      setFilteredPlants(res.data.data);
    });
  }, []);

  // Handle search logic
  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      setFilteredPlants(plantList);
      return;
    }

    const filtered = plantList.filter((plant) =>
      plant.common_name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredPlants(filtered);
    setLimit(10); // 👈 reset to 10 every new search
  };

  // Clear search input
  const clearSearchQuery = () => {
    setSearchQuery("");
    setFilteredPlants(plantList);
    setLimit(10); // 👈 also reset limit
  };

  // Handle show more button
  const handleShowMore = () => {
    setLimit((prevLimit) => prevLimit + 10); // 👈 load 10 more items each time
  };

  // Toggle for filter container
  const toggleFilterContainer = () => {
    setIsFilterActive((prev) => !prev);
  };

  return (
    <div className="relative w-full h-full grid grid-cols-1 grid-rows-[10%_7%_auto] gap-2">
      <section className="px-3">
        <ProductHeader />
      </section>

      <section className="px-3 flex items-center">
        <SearchBar
          searchQuery={searchQuery}
          onSetSearchQuery={setSearchQuery}
          onClearSearchQuery={clearSearchQuery}
          onSearch={handleSearch}
          onCloseFilterContainer={toggleFilterContainer}
        />
      </section>

      <section className="px-3">
        {/* ✅ Only show up to 'limit' items */}
        <ProductList
          plantList={filteredPlants}
          limit={limit}
          onShowMore={handleShowMore}
          searchQuery={searchQuery}
          setViewProduct={setViewProduct}
          toggleViewProduct={() => setIsViewProductAcitve((prev) => !prev)}
        />
      </section>

      {isFilterActive && (
        <section className="fixed top-0 left-0 w-full h-full z-100 bg-[#40404050] flex items-end justify-end">
          <FilterContainer onCloseFilterContainer={toggleFilterContainer} />
        </section>
      )}

      {isViewProductActive > 0 && (
        <ViewProduct
          plantName={viewProduct}
          setViewProduct={() => setIsViewProductAcitve((prev) => !prev)}
        />
      )}
    </div>
  );
}

export default ProductPage;
