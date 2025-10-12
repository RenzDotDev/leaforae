import React, { useState } from "react";

import SearchResultList from "./SearchResultList";

function SearchBar({
  searchQuery,
  isResultListActive,
  onSetSearchQuery,
  onClearSearchQuery,
}) {
  return (
    <div className="flex gap-2 items-center justify-between w-full relative">
      {/* Search Bar */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex items-center justify-between gap-1 border-2 border-darkGreen grow p-2 rounded-lg"
      >
        <i className="fa-solid fa-search text-gray-500 text-sm"></i>
        <input
          onChange={(e) => onSetSearchQuery(e.target.value)}
          value={searchQuery}
          type="text"
          placeholder="Search something..."
          className="text-sm grow border-0 outline-0"
        />
        <i
          onClick={onClearSearchQuery}
          className="fa-solid fa-xmark text-gray-500 text-sm"
        ></i>
      </form>

      {/* Filter Button */}
      <section>
        <button className="bg-darkGreen aspect-square h-8 rounded-full flex items-center justify-center gap-1 sm:px-3 sm:py-1">
          <p className="text-white text-sm hidden sm:block">Filter</p>
          <i className="fa-solid fa-filter text-xs text-white"></i>
        </button>
      </section>

      <section className="absolute w-full top-[120%]">
        <SearchResultList
          isActive={isResultListActive}
          onSetSearchQuery={onSetSearchQuery}
        />
      </section>
    </div>
  );
}

export default SearchBar;
