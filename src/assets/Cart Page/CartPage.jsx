import React from "react";

function CartPage() {
  return (
    <div className="grid grid-cols-1 grid-rows-[7%_auto] w-full h-full gap-1.5">
      <CartHeader />
      <section className="w-full grid grid-cols-1 h-fit max-h-full gap-2 py-3"></section>
    </div>
  );
}

export default CartPage;
