import React from "react";

function CartProductCard({
  quantity,
  onAddQuantity,
  onSubtractQuantity,
  onRemoveCartProductCard,
  isShown,
  plantName,
  plantImage,
  plantOriginalPrice,
  plantDiscountedPrice,
  isDiscounted,
}) {
  return (
    <div
      className={`${
        isShown ? "flex" : "hidden"
      } gap-2 w-full h-30 items-start pb-3 sm:items-center`}
    >
      <img className="h-20 aspect-square rounded-lg" src={plantImage} alt="" />

      {/* Product Details */}
      <div className="w-full h-full flex flex-col sm:flex-row sm:items-center gap-2 ">
        <p className="text-sm truncate w-40 sm:w-[50%]">{plantName}</p>
        <div className="flex gap-2 items-center sm:w-[20%]">
          <p className="text-2xl text-darkGreen font-semibold">{`$${
            isDiscounted
              ? (plantDiscountedPrice * quantity).toFixed(2)
              : (plantOriginalPrice * quantity).toFixed(2)
          }`}</p>
          <p
            className={`${
              isDiscounted ? "block" : "hidden"
            } line-through text-xs text-gray-400`}
          >
            {(plantOriginalPrice * quantity).toFixed(2)}
          </p>
        </div>

        {/* Quantity Counter */}
        <div className="flex gap-2 grow items-end sm:w-[30%] sm:justify-end">
          <button
            className="bg-darkGreen aspect-square h-8 flex items-center justify-center rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={onSubtractQuantity}
            disabled={quantity <= 1 ? true : false}
          >
            <i className="fa-solid fa-minus text-white text-xs"></i>
          </button>
          <input
            type="text"
            readOnly
            value={quantity}
            className="outline-0 w-15 text-sm px-2 py-1 rounded-lg text-center border"
          />
          <button
            onClick={onAddQuantity}
            className="bg-darkGreen aspect-square h-8 flex items-center justify-center rounded-full"
          >
            <i className="fa-solid fa-plus text-white text-xs"></i>
          </button>
        </div>
      </div>

      {/* Remove Button */}
      <button
        onClick={onRemoveCartProductCard}
        className="bg-[#ac5b5b] aspect-square h-8 rounded-full flex items-center justify-center"
      >
        <i className="fa-solid fa-xmark text-white text-xs"></i>
      </button>
    </div>
  );
}

export default CartProductCard;
