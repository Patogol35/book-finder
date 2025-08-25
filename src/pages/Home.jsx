import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import BookCard from "../components/BookCard";
import { searchBooks } from "../api/googleBooks";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");

  // Cargar búsqueda guardada al iniciar
  useEffect(() => {
    const savedQuery = localStorage.getItem("lastQuery");
    const savedBooks = localStorage.getItem("lastBooks");
    if (savedQuery) setQuery(savedQuery);
    if (savedBooks) setBooks(JSON.parse(savedBooks));
  }, []);

  const handleSearch = async (searchQuery) => {
    const results = await searchBooks(searchQuery);
    setBooks(results);
    setQuery(searchQuery);

    // Guardar en localStorage
    localStorage.setItem("lastQuery", searchQuery);
    localStorage.setItem("lastBooks", JSON.stringify(results));
  };

  return (
    <div className="page-container">
      <SearchBar onSearch={handleSearch} query={query} setQuery={setQuery} />
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
