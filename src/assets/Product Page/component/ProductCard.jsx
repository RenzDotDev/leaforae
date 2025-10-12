import React from "react";
import { Link } from "react-router-dom";

function ProductCard({
  plantName,
  plantImage,
  setViewProduct,
  toggleViewProduct,
}) {
  let isDiscounted = plantName.length % 2 == 0 ? true : false;
  let originalPrice = ((plantName.length / 0.8) * 0.5).toFixed(2);
  let discount = (plantName.length * 0.1).toFixed(2) / 0.5;
  let discountedPrice = isDiscounted
    ? (originalPrice - (discount / 100) * 100).toFixed(2)
    : originalPrice;

  return (
    <div className="w-full aspect-3/6 flex flex-col gap-2 sm:aspect-[3/5]">
      {/* Product Image */}
      <section
        className="p-1 flex justify-between grow rounded-lg bg-cover bg-center"
        style={{
          backgroundImage: `url(${plantImage})`,
        }}
      >
        {/* Discount Coupon */}
        <p
          className={`${
            isDiscounted ? "block" : "opacity-0"
          } bg-darkGreen w-fit h-fit text-xs text-white px-2 py-1 rounded-full`}
        >
          {`${discount}% Off`}
        </p>

        {/* Action Button (Add to Favorite & Cart) */}
        <div className="flex flex-col gap-1">
          <button className="bg-darkGreen aspect-square h-8 rounded-full">
            <i className="fa-regular fa-heart text-white text-sm"></i>
          </button>
          <button className="bg-darkGreen aspect-square h-8 rounded-full">
            <i className="fa-solid fa-cart-plus text-white text-sm"></i>
          </button>
          <button
            onClick={() => {
              setViewProduct(plantName);
              toggleViewProduct(true);
            }}
            className="flex items-center justify-center bg-darkGreen aspect-square h-8 rounded-full"
          >
            <i className="fa-solid fa-eye text-white text-sm"></i>
          </button>
        </div>
      </section>

      {/* Product Detail */}
      <section>
        <p className="truncate line-clamp-1 text-sm">{plantName}</p>
        <section className="flex items-center gap-2">
          <p className="font-semibold text-xl">{`$${
            isDiscounted ? discountedPrice : originalPrice
          }`}</p>
          <p
            className={`${
              isDiscounted ? "block" : "hidden"
            } text-gray-500 text-xs line-through`}
          >{`$${isDiscounted ? discountedPrice : ""}`}</p>
        </section>
      </section>
    </div>
  );
}

export default ProductCard;
