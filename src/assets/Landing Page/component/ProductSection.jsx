import React from "react";

function ProductSection() {
  return (
    <div className="grid grid-cols-1 grid-rows-[10%_10%_auto] h-screen w-full min-h-screen gap-2 p-3">
      <HeaderText />
      <CategoryList />
      <ProductList />
    </div>
  );
}

export default ProductSection;

// Inner Components
function HeaderText() {
  return (
    <h1 className="text-center text-3xl font-semibold">
      Our <span className="text-darkGreen">Best</span> Quality Products
    </h1>
  );
}

function CategoryList() {
  return (
    <section className="no-scrollbar flex items-center gap-4 overflow-x-scroll h-full">
      <Category category={"Indoor"} />
      <Category category={"Outdoor"} />
      <Category category={"Flowers"} />
      <Category category={"Succulents"} />
      <Category category={"Trees"} />
    </section>
  );
}

function Category({ category }) {
  return (
    <section>
      <p className="border-2 border-darkGreen px-4 py-1 rounded-full">
        {category}
      </p>
    </section>
  );
}

function ProductList() {
  const indoorPlant = [
    {
      name: "Weeping Katsura Tree",
      url: "https://perenual.com/storage/species_image/212_cercidiphyllum_japonicum_rotfuchs/regular/27820882255_7e1702e940_b.jpg",
    },
    {
      name: "Eastern Redbud",
      url: "https://perenual.com/storage/species_image/213_cercis_canadensis/regular/52077203823_d377f9fa30_b.jpg",
    },
    {
      name: "White Redbud",
      url: "https://perenual.com/storage/species_image/215_cercis_canadensis_alba/medium/photo-67301.jpg",
    },
    {
      name: "Venus Flowering Dogwood",
      url: "https://perenual.com/storage/species_image/241_cornus_venus/og/51206617814_99263a098f_b.jpg",
    },
    {
      name: "Variegated Pagoda Dogwood",
      url: "https://perenual.com/storage/species_image/243_cornus_alternifolia_argentea/medium/21390477415_d07c2f4558_b.jpg",
    },
    {
      name: "Dove Tree",
      url: "https://perenual.com/storage/species_image/272_davidia_involucrata/regular/13974632906_00944d84ab_b.jpg",
    },
  ];
  return (
    <section className="grid grid-cols-1 gap-3 py-3">
      {indoorPlant.map((plant, index) => {
        return (
          <ProductCard
            key={index}
            plantUrl={plant.url}
            plantName={plant.name}
          />
        );
      })}
    </section>
  );
}

function ProductCard({ plantUrl, plantName }) {
  return (
    <div
      style={{ backgroundImage: `url(${plantUrl})` }}
      className="relative aspect-square w-ful rounded-2xl p-4 flex items-end z-10 overflow-hidden"
    >
      <div className="z-10 flex items-center justify-between w-full">
        <p className="text-white text-xl">{plantName}</p>
        <i className="fa-solid fa-arrow-right rotate-[-45deg] text-white text-sm"></i>
      </div>
      <div className="absolute w-full h-[50%] bg-linear-to-t from-darkGreen bottom-0 left-0 rounded-2xl z-1"></div>
    </div>
  );
}
