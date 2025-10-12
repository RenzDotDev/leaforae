import React from "react";

function FilterContainer({ onCloseFilterContainer }) {
  const plantTypeFilter = [
    "Indoor Plants",
    "Outdoor Plants",
    "Succulents",
    "Cacti",
    "Herbs",
    "Trees",
    "Shrubs",
    "Air Plants",
  ];

  const lightRequirementFilter = [
    "Low Light",
    "Bright / Indirect Light",
    "Direct Sunlight",
    "Shade Tolerant",
  ];

  const wateringNeedsFilter = [
    "Low Maintenance",
    "Moderate Watering",
    "Frequent Watering",
  ];

  return (
    <div className="relative w-[80%] h-full bg-darkGreen p-3 flex flex-col gap-5 sm:w-[30%]">
      {/* Close Filter Button */}
      <button
        onClick={onCloseFilterContainer}
        className="ml-[-30px] w-fit bg-green aspect-square h-10 rounded-full"
      >
        <i className="fa-solid fa-angle-right text-white"></i>
      </button>

      {/* Plant Type Filter Section */}
      <section className="text-white">
        <p className="text-lg font-semibold">Plant Type</p>
        <div className="flex flex-col gap-1.5">
          {plantTypeFilter.map((filter, index) => {
            return (
              <div key={index} className="flex gap-1 items-center text-white">
                <input
                  type="checkbox"
                  name={filter}
                  id={filter}
                  className="cursor-pointer"
                />
                <label htmlFor={filter} className="text-sm cursor-pointer">
                  {filter}
                </label>
              </div>
            );
          })}
        </div>
      </section>

      {/* Light Requirement Filter Section */}
      <section className="text-white">
        <p className="text-lg font-semibold">Light Requirements</p>
        <div className="flex flex-col gap-1.5">
          {lightRequirementFilter.map((filter, index) => {
            return (
              <div key={index} className="flex gap-1 items-center text-white">
                <input
                  type="checkbox"
                  name={filter}
                  id={filter}
                  className="cursor-pointer"
                />
                <label htmlFor={filter} className="text-sm cursor-pointer">
                  {filter}
                </label>
              </div>
            );
          })}
        </div>
      </section>

      {/* Watering Needs Filter Section */}
      <section className="text-white">
        <p className="text-lg font-semibold">Watering Needs</p>
        <div className="flex flex-col gap-1.5">
          {wateringNeedsFilter.map((filter, index) => {
            return (
              <div key={index} className="flex gap-1 items-center text-white">
                <input
                  type="checkbox"
                  name={filter}
                  id={filter}
                  className="cursor-pointer"
                />
                <label htmlFor={filter} className="text-sm cursor-pointer">
                  {filter}
                </label>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default FilterContainer;
