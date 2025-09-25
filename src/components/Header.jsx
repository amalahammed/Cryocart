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

export default function CrayoHeader() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    
    {
      label: "Today's Deals",
      content: ["Electronics Sale", "Home Deals", "Fashion Discounts"],
    },
    {
      label: "Gift Cards",
      content: ["Birthday", "Anniversary", "Corporate", "Festive"],
    },
    {
      label: "Registry & Gifting",
      content: ["Wedding Registry", "Baby Registry", "Housewarming"],
    },
  ];

  return (
    <header className="bg-white shadow-md w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            <img className="h-12 w-auto" src={CryoCart} alt="Cryo Cart Logo" />
            <span className="text-xl font-bold text-gray-800">Cryocart</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 items-center">
            {menuItems.map((item, idx) => (
              // Parent is the hover "group" — button + dropdown are inside, so no gap between them
              <div
                key={idx}
                className="relative group inline-block"
                tabIndex={0} // allow focus-within on keyboard
              >
                <button
                  type="button"
                  className="px-2 py-1 text-gray-700 hover:text-orange-600 font-medium cursor-pointer focus:outline-none"
                >
                  {item.label}
                </button>

                {/* Dropdown panel: invisible & non-interactive by default, becomes visible and interactive on group hover/focus-within */}
                <div
                  className="
                    absolute left-0 top-full w-56 bg-white border rounded-md shadow-lg p-2 z-50
                    opacity-0 scale-95 pointer-events-none
                    group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto
                    group-focus-within:opacity-100 group-focus-within:scale-100 group-focus-within:pointer-events-auto
                    transition-all duration-150 origin-top
                  "
                >
                  {item.content.map((sub, i) => (
                    <a
                      key={i}
                      href="#"
                      className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600 rounded cursor-pointer"
                    >
                      {sub}
                    </a>
                  ))}
                </div>
              </div>
            ))}
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
              onClick={() => setMobileMenuOpen((s) => !s)}
              className="md:hidden focus:outline-none"
              aria-label="Open mobile menu"
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

      {/* Mobile Menu (accordion style) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="flex flex-col space-y-2 p-4">
            {menuItems.map((item, idx) => (
              <details key={idx} className="group">
                <summary className="cursor-pointer text-gray-700 hover:text-orange-600 font-medium list-none">
                  {item.label}
                </summary>
                <div className="pl-4 mt-1 space-y-1">
                  {item.content.map((sub, i) => (
                    <a
                      key={i}
                      href="#"
                      className="block text-sm text-gray-600 hover:text-orange-600"
                    >
                      {sub}
                    </a>
                  ))}
                </div>
              </details>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
