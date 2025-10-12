import React from "react";
import { useState, useEffect } from "react";

import ProductHeader from "./component/ProductHeader";
import SearchBar from "./component/SearchBar";
import ProductList from "./component/ProductList";

function ProductPage() {
  const [isResultListActive, setIsResultListActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Debouncing Search Query Results
  useEffect(() => {
    if (searchQuery !== "") {
      const timer = setTimeout(() => {
        setIsResultListActive(true);
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      setIsResultListActive(false);
    }
  }, [searchQuery]);

  const clearSearchQuery = () => {
    setSearchQuery("");
  };

  return (
    <div className="w-full h-full grid grid-cols-1 grid-rows-[10%_7%_auto] gap-2">
      <section className="px-3">
        <ProductHeader />
      </section>
      <section className="px-3 flex items-center">
        <SearchBar
          searchQuery={searchQuery}
          isResultListActive={isResultListActive}
          onSetSearchQuery={setSearchQuery}
          onClearSearchQuery={clearSearchQuery}
        />
      </section>
      <section className="px-3">
        <ProductList />
      </section>
    </div>
  );
}

export default ProductPage;
