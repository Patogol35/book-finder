import { useState } from "react";
import SearchBar from "../components/SearchBar";
import BookCard from "../components/BookCard";
import { searchBooks } from "../api/googleBooks";

export default function Home() {
  const [books, setBooks] = useState([]);

  const handleSearch = async (query) => {
    const results = await searchBooks(query);
    setBooks(results);
  };

  return (
    <div className="p-6 container">
      <SearchBar onSearch={handleSearch} />
      <div className="books-grid">
        {books.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
