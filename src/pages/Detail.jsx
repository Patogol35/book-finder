import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBookById } from "../api/googleBooks";

export default function Detail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    getBookById(id).then(setBook);
  }, [id]);

  if (!book) return <p className="container">Cargando...</p>;

  const info = book.volumeInfo;

  return (
    <div className="detail-container">
      <h1>{info.title}</h1>
      <p className="author">{info.authors?.join(", ")}</p>
      <img
        src={info.imageLinks?.thumbnail || "https://via.placeholder.com/200"}
        alt={info.title}
      />
      <p className="description">{info.description || "Sin descripción disponible."}</p>
    </div>
  );
}
