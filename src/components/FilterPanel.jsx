import React from "react";

function FilterPanel({ onFilterChange }) {
  return (
    <div className="bg-white p-4 rounded">
      
      <div className="flex justify-center overflow-x-auto">
        <div className="flex gap-4 snap-x snap-mandatory">
        
          <div className="flex-shrink-0 w-48 snap-start">
            <h4 className="font-normal mb-1">Category</h4>
            <select
              onChange={(e) => onFilterChange("category", e.target.value)}
              className="w-full border px-2 py-1 rounded focus:outline-none focus:ring-0"
            >
              <option value="">All</option>
              <option value="Electronics">Electronics</option>
              <option value="Men's Clothing">Men's Clothing</option>
              <option value="Bags">Bags</option>
              <option value="Jewellery">Jewellery</option>
            </select>
          </div>

        
          <div className="flex-shrink-0 w-48 snap-start">
            <h4 className="font-normal mb-1">Price Range</h4>
            <select
              onChange={(e) => onFilterChange("price", e.target.value)}
              className="w-full border px-2 py-1 rounded focus:outline-none focus:ring-0"
            >
              <option value="">All</option>
              <option value="0-1000">₹0 - ₹1000</option>
              <option value="1001-3000">₹1001 - ₹3000</option>
              <option value="3001-6000">₹3001 - ₹6000</option>
            </select>
          </div>

        
          <div className="flex-shrink-0 w-48 snap-start">
            <h4 className="font-normal mb-1">Rating</h4>
            <select
              onChange={(e) => onFilterChange("rating", e.target.value)}
              className="w-full border px-2 py-1 rounded focus:outline-none focus:ring-0"
            >
              <option value="">All</option>
              <option value="4">4★ & up</option>
              <option value="3">3★ & up</option>
            </select>
          </div>

     
          <div className="flex-shrink-0 w-48 snap-start">
            <h4 className="font-normal mb-1">Sort By</h4>
            <select
              onChange={(e) => onFilterChange("sort", e.target.value)}
              className="w-full border px-2 py-1 rounded focus:outline-none focus:ring-0"
            >
              <option value="">None</option>
              <option value="low-to-high">Price: Low → High</option>
              <option value="high-to-low">Price: High → Low</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterPanel;
