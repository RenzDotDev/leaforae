import React, { useState } from "react";

function ProductCard({ productName, productUrl }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const isDiscounted = productName.length % 2 !== 0;

  return (
    <div className="w-full aspect-[2/3] gap-1 flex flex-col">
      {/* Image Container */}
      <div
        className="flex justify-between items-start grow-1 bg-cover bg-center p-2 rounded-xl"
        style={{ backgroundImage: `url('${productUrl}')` }}
      >
        {/* Discount Vouchers */}
        <div
          className={`${
            isDiscounted
              ? "bg-darkGreen px-2 py-1 rounded-full opacity-0"
              : "bg-darkGreen px-2 py-1 rounded-full opacity-100"
          }`}
        >
          <p className="text-white text-xs">{`${
            (productName.length / 2) * 5
          }% Off`}</p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col gap-2">
          <button
            onClick={() => setIsFavorite((prev) => !prev)}
            className="bg-white aspect-square h-7 rounded-full flex items-center justify-center"
          >
            <i
              className={`${
                isFavorite
                  ? "fa-solid fa-heart text-[#bc4749]"
                  : "fa-regular fa-heart"
              } text-xs`}
            ></i>
          </button>
          <button className="bg-white aspect-square h-7 rounded-full flex items-center justify-center">
            <i className="fa-solid fa-cart-plus text-xs"></i>
          </button>
        </div>
      </div>

      {/* Detail Container */}
      <div className="flex flex-col gap-0.5">
        <p className="text-sm font-semibold line-clamp-2 truncate">
          {productName}
        </p>
        <div className="flex items-center gap-2">
          <p className="text-darkGreen text-xl font-semibold">
            {`$${(
              ((productName.length * 10) / 0.55 / 100) *
              ((productName.length / 2) * 5)
            ).toFixed(2)}`}
          </p>
          <p
            className={`${
              isDiscounted
                ? "text-xs line-through text-gray-500 opacity-0"
                : "text-xs line-through text-gray-500 opacity-80"
            }`}
          >
            {((productName.length * 10) / 0.55).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
