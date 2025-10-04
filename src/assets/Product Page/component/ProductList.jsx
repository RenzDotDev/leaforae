import React from "react";

function ProductList() {
  return (
    <section className="no-scrollbar grid grid-cols-2 grid-rows-[auto] gap-1.5 gap-y-5 h-fit py-3">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </section>
  );
}

export default ProductList;

function ProductCard() {
  return (
    <div className="w-full aspect-[2/3] gap-1 flex flex-col">
      {/* Image Container */}
      <div className="flex justify-between items-start grow-1 bg-cover bg-center p-2 rounded-xl bg-[url('https://perenual.com/storage/species_image/858_antirrhinum_dulcineas_heart/medium/antirrhinum_majus_blossom_bloom_flower_pink_garden_lion_maul_plantain_greenhouse_plantaginaceae-1019032.jpg')]">
        {/* Discount Vouchers */}
        <div className="bg-darkGreen px-2 py-1 rounded-full">
          <p className="text-white text-xs">50% Off</p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col gap-2">
          <button className="bg-white aspect-square h-7 rounded-full flex items-center justify-center">
            <i className="fa-regular fa-heart text-xs"></i>
          </button>
          <button className="bg-white aspect-square h-7 rounded-full flex items-center justify-center">
            <i className="fa-solid fa-cart-plus text-xs"></i>
          </button>
        </div>
      </div>

      {/* Detail Container */}
      <div className="flex flex-col gap-0.5">
        <p className="text-sm font-semibold line-clamp-2 truncate">
          Produjkasdjjakshdkhakjsdhjkashdkahsdctkjhasdkjhajksdhjkhasdame
        </p>
        <div className="flex items-center gap-2">
          <p className="text-darkGreen text-xl font-semibold">$35.00</p>
          <p className="text-xs line-through text-gray-500 opacity-80">
            $70.00
          </p>
        </div>
      </div>
    </div>
  );
}
