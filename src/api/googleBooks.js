import axios from "axios";

const API_URL = "https://www.googleapis.com/books/v1/volumes";

export const searchBooks = async (query) => {
  try {
    const response = await axios.get(`${API_URL}?q=${query}&maxResults=20`);
    return response.data.items || [];
  } catch (error) {
    console.error("Error al buscar libros", error);
    return [];
  }
};

export const getBookById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener detalles del libro", error);
    return null;
  }
};
