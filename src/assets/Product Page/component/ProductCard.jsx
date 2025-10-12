import React from "react";

function ProductCard() {
  return (
    <div className="w-full aspect-3/6 flex flex-col gap-2">
      {/* Product Image */}
      <section className="p-1 flex justify-between grow rounded-lg bg-cover bg-center bg-[url('https://perenual.com/storage/species_image/295_fraxinus_pennsylvanica_patmore/medium/Fraxinus_pennsylvanica_28510748614729.jpg')]">
        {/* Discount Coupon */}
        <p className="bg-darkGreen w-fit h-fit text-xs text-white px-2 py-1 rounded-full">
          50% OFF!
        </p>

        {/* Action Button (Add to Favorite & Cart) */}
        <div className="flex flex-col gap-1">
          <button className="bg-darkGreen aspect-square h-8 rounded-full">
            <i className="fa-regular fa-heart text-white text-sm"></i>
          </button>
          <button className="bg-darkGreen aspect-square h-8 rounded-full">
            <i className="fa-solid fa-cart-plus text-white text-sm"></i>
          </button>
        </div>
      </section>

      {/* Product Detail */}
      <section>
        <p className="truncate line-clamp-1 font-semibold text-sm text-gray-400">
          Plant Name
        </p>
        <p className="font-semibold text-xl">$12.99</p>
      </section>
    </div>
  );
}

export default ProductCard;
