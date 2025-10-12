import React from "react";

function NoResultMessage({ searchQuery }) {
  return (
    <div className="w-full h-full text-center flex flex-col items-center">
      <img
        src="/noSearchResultImage.png"
        alt=""
        className="h-80 aspect-square"
      />
      <p>
        There is no result for{" "}
        <span className="font-bold text-darkGreen">{searchQuery}</span>
      </p>
    </div>
  );
}

export default NoResultMessage;
