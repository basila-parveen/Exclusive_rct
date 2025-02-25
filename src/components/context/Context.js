import React, { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const [products1, setProducts1] = useState([]);
  return (
    <SearchContext.Provider
      value={{ searchTerm, setSearchTerm, products1, setProducts1 }}
    >
      {children}
    </SearchContext.Provider>
  );
};
