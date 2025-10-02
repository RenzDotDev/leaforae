import React, { useState } from "react";

function Filters({ toggleFilter, isActive }) {
  const plantTypes = [
    "Indoor Plants",
    "Outdoor Plants",
    "Succulents & Cacti",
    "Flowering Plants",
    "Herbs",
    "Trees & Shrubs",
    "Air Plants",
  ];

  const placementOptions = [
    "Low Light",
    "Bright / Indirect Light",
    "Direct Sunlight",
    "Shade Tolerant",
    "Desk Plants",
    "Hanging Plants",
  ];

  const careOptions = [
    "Low Maintenance",
    "Easy to Grow",
    "Pet-Friendly",
    "Air Purifying",
  ];

  return (
    <div
      className={`${
        isActive ? "flex" : "hidden"
      } absolute flex justify-end h-full w-full top-0 left-0 z-50 backdrop-blur-[2px] bg-[#00000050]`}
    >
      <div className="w-[75%] h-full flex flex-col gap-5 bg-darkGreen text-white p-3 overflow-scroll">
        {/* Header */}
        <div className="flex w-full justify-between items-center">
          <p className="text-xl font-semibold">Filters</p>
          <button onClick={toggleFilter}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {/* Plang Type */}
        <div>
          <p className="font-semibold">Plant Type</p>
          <div className="flex flex-col gap-1">
            {plantTypes.map((filter, index) => {
              return <FilterItem key={index} filter={filter} />;
            })}
          </div>
        </div>

        {/* Plant Type */}
        <div>
          <p className="font-semibold">Placement Options</p>
          <div className="flex flex-col gap-1">
            {placementOptions.map((filter, index) => {
              return <FilterItem key={index} filter={filter} />;
            })}
          </div>
        </div>

        {/* Plang Type */}
        <div>
          <p className="font-semibold">Care Options</p>
          <div className="flex flex-col gap-1">
            {careOptions.map((filter, index) => {
              return <FilterItem key={index} filter={filter} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filters;

function FilterItem({ filter }) {
  return (
    <div className="flex items-center gap-1">
      <input type="checkbox" name="" id={filter} className="" />
      <label htmlFor={filter} className="text-sm">
        {filter}
      </label>
    </div>
  );
}
