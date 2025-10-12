import React from "react";

import SearchItem from "./SearchItem";

function SearchResultList({ isActive, onSetSearchQuery }) {
  return (
    <section
      className={`${
        isActive ? "flex" : "hidden"
      } no-scrollbar border-2 border-darkGreen w-full bg-white p-3 flex-col rounded-lg max-h-100 h-50 overflow-scroll`}
    >
      <SearchItem
        searchItem={"Search Item 2"}
        onSetSearchQuery={onSetSearchQuery}
      />
      <SearchItem
        searchItem={"Search Item 3"}
        onSetSearchQuery={onSetSearchQuery}
      />
      <SearchItem
        searchItem={"Search Item 2"}
        onSetSearchQuery={onSetSearchQuery}
      />
    </section>
  );
}

export default SearchResultList;
