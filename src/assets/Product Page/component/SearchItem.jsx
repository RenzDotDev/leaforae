import React from "react";

function SearchItem({ searchItem, onSetSearchQuery }) {
  return (
    <div
      onClick={() => onSetSearchQuery(searchItem)}
      className="flex w-full justify-between gap-2.5 hover:bg-lightGreen p-2 rounded-lg cursor-pointer"
    >
      <p className="text-sm truncate line-clamp-1">{searchItem}</p>
      <i className="fa-solid fa-arrow-up rotate-320 text-sm"></i>
    </div>
  );
}

export default SearchItem;
