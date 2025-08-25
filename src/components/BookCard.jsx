import { Link } from "react-router-dom";
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

export default function BookCard({ book }) {
  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);
  const info = book.volumeInfo;

  // Verificar si ya está en favoritos
  const isFavorite = favorites.some(fav => fav.id === book.id);

  return (
    <div className="border rounded-lg shadow p-4 flex flex-col">
      <img
        src={info.imageLinks?.thumbnail || "https://via.placeholder.com/150"}
        alt={`Portada de ${info.title}`}
        className="mb-3 rounded"
      />
      <h3 className="font-bold text-lg">{info.title}</h3>
      <p className="text-sm text-gray-600">{info.authors?.join(", ")}</p>
      <div className="mt-auto flex gap-2">
        <Link to={`/book/${book.id}`} className="bg-green-500 text-white px-3 py-1 rounded">
          Ver más
        </Link>
        <button
          onClick={() => isFavorite ? removeFavorite(book.id) : addFavorite(book)}
          className={`${isFavorite ? "bg-red-500" : "bg-yellow-500"} text-white px-3 py-1 rounded`}
        >
          {isFavorite ? "Quitar" : "Favorito"}
        </button>
      </div>
    </div>
  );
}
