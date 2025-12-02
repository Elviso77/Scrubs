// src/context/SearchContext.jsx
import React, { createContext, useContext, useState } from "react";
import { MEN_SCRUBS, WOMEN_SCRUBS, TOP_TRENDING_STYLES } from "../data/productsData";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const allProducts = [...MEN_SCRUBS, ...WOMEN_SCRUBS, ...TOP_TRENDING_STYLES];

  const handleSmartSearch = (term) => {
    setSearchTerm(term);
    const keyword = term.toLowerCase();

    // ✅ Section-based navigation (Smart Scroll)
    let targetId = null;
    if (keyword.includes("men")) targetId = "menproducts";
    else if (keyword.includes("women")) targetId = "womenproducts";
    else if (keyword.includes("top") || keyword.includes("trend")) targetId = "trendingproducts";
    else if (keyword.includes("testimonial")) targetId = "testimonials";

    if (targetId) {
      setTimeout(() => {
        const section = document.getElementById(targetId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }

    // ✅ Product filtering (Search Results)
    if (keyword.trim() !== "") {
      const results = allProducts.filter((product) =>
        product.title.toLowerCase().includes(keyword) ||
        product.color?.toLowerCase().includes(keyword) ||
        product.description?.toLowerCase().includes(keyword)
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts([]); // Clear when input is empty
    }
  };

  return (
    <SearchContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        filteredProducts,
        handleSmartSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
