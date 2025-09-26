import React from "react";

function ProductSection() {
  return (
    <div className="h-screen w-full p-3 flex flex-col gap-3 items-center ">
      <HeaderText />
      <CategoryList />
    </div>
  );
}

export default ProductSection;

function HeaderText() {
  return <h1 className="text-text-color">Our Best Quality Products</h1>;
}

function CategoryList() {
  return (
    <section className="flex gap-5 w-full overflow-scroll py-3">
      <CategoryItem category={"Indoor"} />
      <CategoryItem category={"Outdoor"} />
      <CategoryItem category={"Succulents"} />
      <CategoryItem category={"Flowers"} />
      <CategoryItem category={"Trees"} />
    </section>
  );
}

function CategoryItem({ category }) {
  return <p className="border-2 px-5 py-1 rounded-full">{category}</p>;
}
