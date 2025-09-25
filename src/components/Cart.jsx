import React, { useState } from "react";
import products from "../data/products.json";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const initialItems = [
    { ...products[0], qty: 1 },
    { ...products[1], qty: 2 },
  ];

  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(initialItems);
  const [shipping, setShipping] = useState("pickup");

  const updateQty = (id, type) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, qty: type === "inc" ? item.qty + 1 : Math.max(item.qty - 1, 1) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shippingCost = shipping === "delivery" ? 9.9 : 0;
  const total = subtotal + shippingCost;

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center p-4 sm:p-8">
      <div className="bg-white w-full max-w-5xl rounded-lg p-6 sm:p-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold">My Cart</h1>
          <button
            onClick={() => navigate("/")}
            className="text-gray-500 hover:text-black text-sm sm:text-base"
          >
            ← Continue shopping
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex flex-col gap-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4"
            >
              <div className="flex items-start sm:items-center gap-4 w-full sm:w-1/2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 sm:w-16 sm:h-16 object-contain"
                />
                <div className="flex flex-col gap-1">
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-gray-400 text-xs sm:text-sm">#{item.id}</p>
                  <p className="text-gray-500 text-xs sm:text-sm">
                    Category: {item.category}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 mt-4 sm:mt-0 w-full sm:w-auto">
                <p className="font-medium">{item.price} ₹</p>
                <div className="flex items-center border rounded-lg overflow-hidden">
                  <button
                    onClick={() => updateQty(item.id, "dec")}
                    className="px-3 py-1 text-lg"
                  >
                    -
                  </button>
                  <span className="px-4">{item.qty}</span>
                  <button
                    onClick={() => updateQty(item.id, "inc")}
                    className="px-3 py-1 text-lg"
                  >
                    +
                  </button>
                </div>
                <p className="font-semibold">{(item.price * item.qty).toLocaleString()} ₹</p>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-gray-400 hover:text-red-500 text-xl"
                >
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Shipping Options */}
        <div className="bg-gray-100 rounded-lg p-4 sm:p-6 my-6">
          <h3 className="font-semibold mb-3">Choose shipping mode:</h3>
          <div className="flex flex-col sm:flex-row gap-3">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={shipping === "pickup"}
                onChange={() => setShipping("pickup")}
              />
              <span>Store pickup (≤ 30 min) — <b>FREE</b></span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={shipping === "delivery"}
                onChange={() => setShipping("delivery")}
              />
              <span>Delivery at home (1–2 days) — <b>9.90 ₹</b></span>
            </label>
          </div>
        </div>

        {/* Totals & Checkout */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
          <div className="flex flex-col gap-1 text-sm sm:text-base w-full sm:w-auto">
            <p className="flex justify-between">
              <span className="text-gray-500">Subtotal:</span>
              <span className="font-medium">{subtotal.toLocaleString()} ₹</span>
            </p>
            <p className="flex justify-between">
              <span className="text-gray-500">Shipping:</span>
              <span className="font-medium">{shippingCost === 0 ? "Free" : `${shippingCost} ₹`}</span>
            </p>
            <p className="flex justify-between mt-1 text-lg font-semibold">
              <span>Total:</span>
              <span>{total.toLocaleString()} ₹</span>
            </p>
          </div>
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 sm:px-8 py-3 rounded-lg shadow-lg font-semibold text-lg">
            Checkout — {total.toLocaleString()} ₹
          </button>
        </div>
      </div>
    </div>
  );
}
