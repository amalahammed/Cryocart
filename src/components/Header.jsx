import React, { useState } from "react";
import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import CryoCart from "../assets/pngs/Cryo Cart.png";

export default function AmazonHeader() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
    
          <div className="flex items-center space-x-2 flex-shrink-0">
            <img className="h-12 w-auto" src={CryoCart} alt="Cryo Cart Logo" />
            <span className="text-xl font-bold text-gray-800">Cryocart</span>
          </div>

          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-orange-600 font-medium">
              BB
            </a>
            <a href="#" className="text-gray-700 hover:text-orange-600 font-medium">
              Today's Deals
            </a>
            <a href="#" className="text-gray-700 hover:text-orange-600 font-medium">
              Gift Cards
            </a>
            <a href="#" className="text-gray-700 hover:text-orange-600 font-medium">
              Registry & Gifting
            </a>
          </nav>

 
          <div className="flex items-center space-x-4">
  
            <div className="hidden md:flex items-center space-x-4">
              <AiOutlineSearch className="w-6 h-6 text-gray-700 hover:text-orange-600 cursor-pointer" />
              <AiOutlineUser className="w-6 h-6 text-gray-700 hover:text-orange-600 cursor-pointer" />
              <AiOutlineHeart className="w-6 h-6 text-gray-700 hover:text-orange-600 cursor-pointer" />
            </div>

         
            <AiOutlineShoppingCart
              onClick={() => navigate("/cart")}
              className="w-6 h-6 text-gray-700 hover:text-orange-600 cursor-pointer"
            />

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden focus:outline-none"
            >
              {mobileMenuOpen ? (
                <AiOutlineClose className="w-6 h-6 text-gray-700" />
              ) : (
                <AiOutlineMenu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="flex flex-col space-y-2 p-4">
            <a href="#" className="text-gray-700 hover:text-orange-600 font-medium">
              BB
            </a>
            <a href="#" className="text-gray-700 hover:text-orange-600 font-medium">
              Today's Deals
            </a>
            <a href="#" className="text-gray-700 hover:text-orange-600 font-medium">
              Gift Cards
            </a>
            <a href="#" className="text-gray-700 hover:text-orange-600 font-medium">
              Registry & Gifting
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
