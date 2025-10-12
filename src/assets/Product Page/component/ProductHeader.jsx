import React from "react";
import { Link } from "react-router-dom";

function ProductHeader() {
  return (
    <div className="w-full h-full flex justify-between items-center">
      {/* Profile Button Container */}
      <Link to={"/Profile"} className="flex items-center gap-1 h-full">
        <img
          src="/isabellaFlores.jpg"
          className="h-12 object-cover aspect-square rounded-full"
          alt=""
        />
        <div className="">
          <p className="text-xs">Hello!</p>
          <p className="text-lg font-semibold">John Doe</p>
        </div>
      </Link>

      {/* Button Container */}
      <section className="flex gap-0.5">
        <Link
          to={"/Favorite"}
          className="bg-darkGreen aspect-square h-8 rounded-full flex items-center justify-center"
        >
          <i className="fa-solid fa-heart text-xs text-white"></i>
        </Link>
        <Link
          to={"/Cart"}
          className="bg-darkGreen aspect-square h-8 rounded-full flex items-center justify-center"
        >
          <i className="fa-solid fa-shopping-cart text-xs text-white"></i>
        </Link>
      </section>
    </div>
  );
}

export default ProductHeader;
