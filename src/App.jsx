import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // ✅ import router
import "./App.css";

import Header from "./components/Header";
import FilterPanel from "./components/FilterPanel";
import ProductCard from "./components/ProductCard";
import products from "./data/products";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import CartPage from "./components/Cart";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedRating, setSelectedRating] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const handleFilterChange = (type, value) => {
    if (type === "category") setSelectedCategory(value);
    if (type === "price") setSelectedPrice(value);
    if (type === "rating") setSelectedRating(value);
    if (type === "sort") setSortOrder(value);
  };

  const filteredProducts = products
    .filter((item) => {
      const matchesSearch = item.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory
        ? item.category === selectedCategory
        : true;
      const matchesPrice = (() => {
        if (!selectedPrice) return true;
        const [min, max] = selectedPrice.split("-").map(Number);
        return item.price >= min && item.price <= max;
      })();
      const matchesRating = selectedRating
        ? item.rating >= parseFloat(selectedRating)
        : true;

      return matchesSearch && matchesCategory && matchesPrice && matchesRating;
    })
    .sort((a, b) => {
      if (sortOrder === "low-to-high") return a.price - b.price;
      if (sortOrder === "high-to-low") return b.price - a.price;
      return 0;
    });

  return (
    <Router>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />

              {/* Filter panel horizontal at the top */}
              <div className="bg-white px-6 py-4">
                <FilterPanel onFilterChange={handleFilterChange} />
              </div>

              {/* Products grid */}
              <div className="px-6 pt-4 pb-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((item) => (
                      <ProductCard key={item.id} item={item} />
                    ))
                  ) : (
                    <p className="text-gray-500 col-span-full text-center">
                      No products found.
                    </p>
                  )}
                </div>
              </div>

              <Footer />
            </>
          }
        />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
