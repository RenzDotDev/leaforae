import React, { useEffect, useState } from "react";
import axios from "axios";

function ViewProduct({ plantName, setViewProduct }) {
  const [plantList, setPlantList] = useState([]);
  const [quantity, setQuantity] = useState(0);

  let plantToShow;

  let isDiscounted = plantName.length % 2 == 0 ? true : false;
  let originalPrice = ((plantName.length / 0.8) * 0.5).toFixed(2);
  let discount = (plantName.length * 0.1).toFixed(2) / 0.5;
  let discountedPrice = isDiscounted
    ? (originalPrice - (discount / 100) * 100).toFixed(2)
    : originalPrice;

  useEffect(() => {
    axios.get("/PlantData.json").then((res) => {
      setPlantList(res.data.data);
    });
  }, []);

  plantToShow = plantList.filter((plant) => plant.common_name === plantName);

  console.log(plantToShow);

  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-[#40404050]">
      <section className="no-scrollbar w-[90%] sm:max-w-[50%] lg:max-w-[30%] h-fit bg-darkGreen rounded-2xl p-3 text-white overflow-scroll">
        {plantToShow.slice(0, 1).map((plant, index) => (
          <div key={index} className="no-scrollbar flex flex-col gap-3">
            <button
              onClick={() => setViewProduct((prev) => !prev)}
              className="h-10 aspect-square bg-green w-fit rounded-full self-end cursor-pointer"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            <img
              src={plant.default_image.original_url}
              className="aspect-square w-full object-cover rounded-2xl"
              alt=""
            />

            <section className="flex flex-col gap-1">
              <p className="text-lg">{plant.common_name}</p>
              <p className="text-xs text-[#adadadd5]">{`Scientific Name: ${plant.scientific_name}`}</p>

              <div className="bg-green w-fit flex items-center gap-1 text-xs px-3 py-1 rounded-sm">
                <i class="fa-solid fa-tag"></i>
                <p>{`${discount}% Off!`}</p>
              </div>

              <div className="flex items-center gap-2">
                <p className="font-semibold text-3xl">{`$${
                  isDiscounted ? discountedPrice : originalPrice
                }`}</p>
                <p
                  className={`${
                    isDiscounted ? "block" : "hidden"
                  } text-sm line-through`}
                >
                  {originalPrice}
                </p>
              </div>
            </section>

            <section className="flex items-center h-fit w-full gap-1">
              {/* Quantity Counter */}
              <div className="grow flex gap-2 mr-5">
                <button
                  onClick={() => setQuantity(quantity - 1)}
                  disabled={quantity === 0 ? true : false}
                  className="flex items-center justify-center gap-1 bg-green h-8 aspect-square rounded-full cursor-pointer disabled:opacity-50 disabled:bg-gray-500 disabled:cursor-not-allowed"
                >
                  <i className="fa-solid fa-minus"></i>
                </button>
                <input
                  value={quantity}
                  type="text"
                  className="w-[20px] grow bg-white text-black rounded-2xl outline-0 text-center px-2"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="flex items-center justify-center gap-1 bg-green h-8 aspect-square rounded-full cursor-pointer"
                >
                  <i className="fa-solid fa-plus"></i>
                </button>
              </div>

              {/* Button Container */}
              <button className="flex items-center justify-center gap-1 bg-green h-10 aspect-square rounded-full">
                <i className="fa-solid fa-cart-plus"></i>
              </button>
              <button className="flex items-center justify-center gap-1 bg-green h-10 aspect-square rounded-full">
                <i className="fa-regular fa-heart"></i>
              </button>
            </section>
          </div>
        ))}
      </section>
    </div>
  );
}

export default ViewProduct;
