import React from "react";

function ReceiptCard({ totalPrice, onToggleReceiptCard }) {
  return (
    <div className="no-scrollbar fixed top-0 left-0 h-full w-full backdrop-blur-[2px] flex items-center justify-center p-3">
      <section className="w-[100%] max-w-[300px] h-fit rounded-xl p-4 text-white bg-darkGreen flex flex-col gap-5">
        {/* Header */}
        <header className="flex flex-col gap-1 items-center text-center">
          <img
            className="aspect-square w-[200px]"
            src="/success-receipt.png"
            alt="Order success image"
          />
          <p className="font-semibold text-[clamp(24px,2vw,28px)]">
            Order Success
          </p>
          <p className="text-[clamp(14px,2vw,16px)]">
            Your order will be delivered in 1 - 3 business days.
          </p>
        </header>

        {/* Total Price */}
        <div className="flex flex-col items-center">
          <p className="text-[clamp(14px,2vw,16px)]">Total Price</p>
          <p className="font-semibold text-[clamp(24px,2vw,28px)]">
            ${totalPrice}
          </p>
        </div>

        {/* Button */}
        <button
          className="bg-white p-3 rounded-xl text-text-color font-semibold"
          onClick={onToggleReceiptCard}
        >
          Done
        </button>
      </section>
    </div>
  );
}

export default ReceiptCard;
