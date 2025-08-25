import { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

  const updateSearch = (newQuery, newBooks) => {
    setQuery(newQuery);
    setBooks(newBooks);
  };

  return (
    <SearchContext.Provider value={{ query, books, updateSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
