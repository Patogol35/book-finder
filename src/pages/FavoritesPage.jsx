import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import BookCard from "../components/BookCard";

export default function FavoritesPage() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="p-6 container">
      <h1 className="text-2xl font-bold mb-4">Mis Favoritos</h1>
      {favorites.length === 0 ? (
        <p className="empty">No tienes libros guardados.</p>
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
