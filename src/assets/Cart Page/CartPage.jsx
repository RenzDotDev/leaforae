import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import CartProductCard from "./component/CartProductCard";
import ReceiptCard from "./component/ReceiptCard";

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isReceiptCardActive, setIsReceiptCardActive] = useState(false);

  // Fetch plant data and initialize cart with quantities
  useEffect(() => {
    axios.get("/PlantData.json").then((res) => {
      const plants = res.data.data.slice(0, 3).map((plant) => ({
        id: plant.id,
        plantName: plant.common_name,
        plantImage: plant.default_image.small_url,
        quantity: 1, // initialize per item
      }));
      setCartItems(plants);
    });
  }, []);

  // Add Quantity (per item)
  const handleAddQuantity = (index) => {
    setCartItems((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Subtract Quantity (per item)
  const handleSubtractQuantity = (index) => {
    setCartItems((prev) =>
      prev.map((item, i) =>
        i === index && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Remove Cart Product Card (per item)
  const handleRemoveCartProductCard = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  // Compute total price whenever cartItems changes
  useEffect(() => {
    let newTotal = 0;

    cartItems.forEach((item) => {
      const isDiscounted = item.plantName.length % 2 === 0;
      const originalPrice = ((item.plantName.length / 0.8) * 0.5).toFixed(2);
      const discount = (item.plantName.length * 0.1).toFixed(2) / 0.5;
      const discountedPrice = isDiscounted
        ? (originalPrice - (discount / 100) * 100).toFixed(2)
        : originalPrice;

      const priceToUse = isDiscounted ? discountedPrice : originalPrice;
      newTotal += parseFloat(priceToUse) * item.quantity;
    });

    setTotalPrice(newTotal.toFixed(2));
  }, [cartItems]);

  // Toggle Receipt Card
  const toggleReceiptCard = () => {
    setIsReceiptCardActive((prev) => !prev);
  };

  // Close Receipt Card and Remove Items in cart
  const closeReceiptCard = () => {
    setIsReceiptCardActive((prev) => !prev);
    setCartItems([]);
  };

  return (
    <div className="w-full h-full grid grid-cols-1 grid-rows-[7%_85%_8%] p-3">
      {/* Header */}
      <section className="flex justify-between items-center">
        <p className="text-[clamp(1.2rem,2vw,1.5rem)] font-semibold text-darkGreen">
          My Cart
        </p>
        <Link
          to={"/Product"}
          className="bg-darkGreen aspect-square h-8 rounded-full flex items-center justify-center"
        >
          <i className="fa-solid fa-home text-white text-sm"></i>
        </Link>
      </section>

      {/* Product List */}
      <section className="flex flex-col divide-y divide-darkGreen space-y-2 w-full overflow-y-auto">
        {cartItems.map((item, index) => {
          const isDiscounted = item.plantName.length % 2 === 0;
          const originalPrice = ((item.plantName.length / 0.8) * 0.5).toFixed(
            2
          );
          const discount = (item.plantName.length * 0.1).toFixed(2) / 0.5;
          const discountedPrice = isDiscounted
            ? (originalPrice - (discount / 100) * 100).toFixed(2)
            : originalPrice;

          return (
            <CartProductCard
              key={item.id || index}
              quantity={item.quantity}
              onAddQuantity={() => handleAddQuantity(index)}
              onSubtractQuantity={() => handleSubtractQuantity(index)}
              onRemoveCartProductCard={() => handleRemoveCartProductCard(index)}
              plantName={item.plantName}
              plantImage={item.plantImage}
              isShown={true}
              plantOriginalPrice={originalPrice}
              plantDiscountedPrice={discountedPrice}
              isDiscounted={isDiscounted}
            />
          );
        })}
      </section>

      {/* Total */}
      <section className="border-t border-darkGreen pt-2 flex justify-between items-center">
        <div className="flex flex-col">
          <p className="font-semibold text-darkGreen text-sm">Total Price:</p>
          <p className="text-darkGreen text-2xl font-bold">${totalPrice}</p>
        </div>

        <button
          className="bg-darkGreen px-3 py-2 rounded-lg"
          onClick={() => setIsReceiptCardActive((prev) => !prev)}
        >
          <p className="text-white text-sm">Place Order</p>
        </button>
      </section>

      {isReceiptCardActive && (
        <ReceiptCard
          totalPrice={totalPrice}
          onToggleReceiptCard={closeReceiptCard}
        />
      )}
    </div>
  );
}

export default CartPage;
