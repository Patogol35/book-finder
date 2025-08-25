import { useContext } from "react";
import SearchBar from "../components/SearchBar";
import BookCard from "../components/BookCard";
import { searchBooks } from "../api/googleBooks";
import { SearchContext } from "../context/SearchContext";

export default function Home() {
  const { query, books, updateSearch } = useContext(SearchContext);

  const handleSearch = async (searchQuery) => {
    const results = await searchBooks(searchQuery);
    updateSearch(searchQuery, results);
  };

  return (
    <div className="page-container">
      <SearchBar onSearch={handleSearch} query={query} />
      {books.length === 0 ? (
        <p className="empty">Busca libros para mostrarlos aquí.</p>
      ) : (
        <div className="books-grid">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
}
