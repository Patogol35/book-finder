import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import BookCard from "../components/BookCard";

export default function FavoritesPage() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Mis Favoritos</h1>
      {favorites.length === 0 ? (
        <p>No tienes libros guardados.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {favorites.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
}
