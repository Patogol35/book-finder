import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBookById } from "../api/googleBooks";

export default function Detail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    getBookById(id).then(setBook);
  }, [id]);

  if (!book) return <p className="p-6">Cargando...</p>;

  const info = book.volumeInfo;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{info.title}</h1>
      <p className="text-gray-600">{info.authors?.join(", ")}</p>
      <img
        src={info.imageLinks?.thumbnail || "https://via.placeholder.com/150"}
        alt={info.title}
        className="my-4"
      />
      <p>{info.description || "Sin descripción"}</p>
    </div>
  );
}
