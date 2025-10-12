import React from "react";

import ProductHeader from "./component/ProductHeader";
import SearchBar from "./component/SearchBar";
import ProductList from "./component/ProductList";

function ProductPage() {
  return (
    <div className="w-full h-full grid grid-cols-1 grid-rows-[10%_7%_auto] gap-2">
      <section className="px-3">
        <ProductHeader />
      </section>
      <section className="px-3 flex items-center">
        <SearchBar />
      </section>
      <section className="px-3">
        <ProductList />
      </section>
    </div>
  );
}

export default ProductPage;
