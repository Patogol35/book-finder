import { Link } from "react-router-dom";
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

export default function BookCard({ book }) {
  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);
  const info = book.volumeInfo;

  // Verificar si ya está en favoritos
  const isFavorite = favorites.some(fav => fav.id === book.id);

  return (
    <div className="book-card">
      <p className="author">{info.authors?.join(", ") || "Autor desconocido"}</p>
      <h3>{info.title}</h3>
      <img
        src={info.imageLinks?.thumbnail || "https://via.placeholder.com/150"}
        alt={`Portada de ${info.title}`}
      />
      <div className="actions">
        <Link to={`/book/${book.id}`}>Ver más</Link>
        <button
          onClick={() =>
            isFavorite ? removeFavorite(book.id) : addFavorite(book)
          }
          className={isFavorite ? "remove" : ""}
        >
          {isFavorite ? "Quitar" : "Favorito"}
        </button>
      </div>
    </div>
  );
}
