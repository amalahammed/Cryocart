import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

function ProductCard({ item }) {
  return (
    <div
      className="
        bg-[#f2f2f3] 
        rounded-md 
        p-4 
        flex flex-col 
        gap-2 
        w-full 
        hover:shadow-md 
        transition-shadow 
        relative 
        group
      "
    >
      {/* Badge */}
      {item.badge && (
        <span className="absolute top-2 left-2 bg-orange-400 text-white text-xs font-bold px-2 py-1 rounded">
          {item.badge}
        </span>
      )}

      {/* Product Image */}
      <div className="w-full flex items-center justify-center">
        <img
          src={item.image}
          alt={item.name}
          className="object-contain w-full h-32 sm:h-40 md:h-48 lg:h-56"
        />
      </div>

      {/* Product Info */}
      <h2 className="text-sm sm:text-base font-medium text-gray-800 line-clamp-2">
        {item.name}
      </h2>
      <p className="text-lg sm:text-xl font-bold text-gray-900">₹{item.price}</p>

      {/* Rating */}
      <div className="flex items-center text-yellow-400 text-sm">
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i}>{i < Math.round(item.rating) ? "★" : "☆"}</span>
        ))}
        <span className="text-gray-500 ml-2 text-xs">{item.reviews} reviews</span>
      </div>

      {/* Add to Cart Button */}
      <button
        className="
          absolute bottom-4 right-4
          bg-gray-100 hover:bg-gray-200 
          rounded-full
          px-3 py-2
          flex items-center gap-2
          overflow-hidden
          transition-all duration-300
          w-10 group-hover:w-32
        "
      >
        <div className="flex items-center">
          <ShoppingCartIcon className="h-5 w-5 text-gray-700 flex-shrink-0" />
        </div>
        <span
          className="
            text-gray-700 
            text-sm 
            opacity-0 
            group-hover:opacity-100 
            transition-opacity 
            duration-200 
            whitespace-nowrap
          "
        >
          Add to Cart
        </span>
      </button>
    </div>
  );
}

export default ProductCard;
