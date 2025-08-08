import { Link } from "react-router-dom";
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

export default function BookCard({ book }) {
  const { addFavorite } = useContext(FavoritesContext);
  const info = book.volumeInfo;

  return (
    <div className="border rounded-lg shadow p-4 flex flex-col">
      <img
        src={info.imageLinks?.thumbnail || "https://via.placeholder.com/150"}
        alt={info.title}
        className="mb-3 rounded"
      />
      <h3 className="font-bold text-lg">{info.title}</h3>
      <p className="text-sm text-gray-600">{info.authors?.join(", ")}</p>
      <div className="mt-auto flex gap-2">
        <Link to={`/book/${book.id}`} className="bg-green-500 text-white px-3 py-1 rounded">
          Ver más
        </Link>
        <button
          onClick={() => addFavorite(book)}
          className="bg-yellow-500 text-white px-3 py-1 rounded"
        >
          Favorito
        </button>
      </div>
    </div>
  );
}
