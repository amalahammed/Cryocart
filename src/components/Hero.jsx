import React from "react";
import jblImg from "../assets/jbl.png";

export default function EcommerceHero() {
  return (
    <section className="w-full bg-[#f2f2f3] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="relative bg-[#ededee] rounded-lg overflow-hidden flex flex-col md:flex-row items-center gap-8 p-6 md:p-10">
    
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111827] leading-tight">
              HEADSETS
              <span className="block">&amp; ACCESSORIES</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-md mx-auto md:mx-0">
              Shop laptops, desktops, monitors, tablets, PC gaming, hard drives and
              storage, accessories and more
            </p>
            <button
  className="
    mt-6 inline-flex items-center gap-3 px-5 py-2.5 
    border border-gray-300 rounded-full 
    bg-white text-sm font-medium text-gray-800
   
    transition 
    duration-300 
    ease-in-out
    hover:bg-orange-500 hover:text-white 
    
    transform hover:-translate-y-0.5 hover:scale-105
  "
  aria-label="view more"
>
  View more
</button>

          </div>

          <div className="w-full md:w-1/2 flex justify-center md:justify-end relative group">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md flex items-center justify-center">
              <img
                src={jblImg}
                alt="JBL T460BT Black Headphones"
                className="object-contain w-full h-auto drop-shadow-lg"
              />

              <div className="absolute left-2 sm:left-6 bottom-9 sm:bottom-4 bg-white rounded-xl cursor-pointer p-4 w-[85%] sm:w-[300px] shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-xs text-gray-500">Computer &amp; Accessories</div>
                <div className="mt-1 font-semibold">JBL T460BT Black Headphones</div>

                <div className="mt-3 flex items-baseline gap-3">
                  <div className="text-lg sm:text-xl font-bold">₹5025.00</div>
                  <div className="text-sm line-through text-gray-400">₹10250.00</div>
                </div>

                <div className="mt-2 text-xs text-gray-500">1,265 reviews</div>

                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-blue-600">
                  View more
                </div>
              </div>

         
              <div className="absolute -top-3 sm:-top-4 right-3 sm:right-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-yellow-400 flex items-center justify-center font-semibold text-xs sm:text-sm">
                  50%
                </div>
              </div>
            </div>
          </div>
        </div>

 
        <div className="mt-6 bg-white rounded-lg shadow-inner py-4 px-4 sm:px-6 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5.121 17.804A7 7 0 0112 15a7 7 0 016.879 2.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <div className="text-sm font-medium">Hi, Amcrazse</div>
              <div className="text-xs text-gray-500">recommendations for you</div>
            </div>
          </div>

          <div className="flex-1 flex flex-col sm:flex-row md:border-l md:border-r border-gray-100 md:px-6 gap-4 md:gap-6 justify-between text-sm text-gray-600">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center">📦</div>
              <div>
                <div className="font-medium">Your Orders</div>
                <div className="text-xs text-gray-500">View your orders</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center">🎧</div>
              <div>
                <div className="font-medium">Electronics</div>
                <div className="text-xs text-gray-500">Big Sale: 30%</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center">🍲</div>
              <div>
                <div className="font-medium">Home &amp; Kitchen</div>
                <div className="text-xs text-gray-500">Big Sale: 30%</div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end">
            <button className="p-2 rounded-full border">⟲</button>
          </div>
        </div>
      </div>
    </section>
  );
}
