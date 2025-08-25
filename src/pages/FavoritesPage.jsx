import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import BookCard from "../components/BookCard";

export default function FavoritesPage() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="container">
      <h1>⭐ Mis Favoritos</h1>
      {favorites.length === 0 ? (
        <p className="empty">No tienes libros guardados aún.</p>
      ) : (
        <div className="books-grid">
          {favorites.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
}
