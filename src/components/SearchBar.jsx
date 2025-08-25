import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        placeholder="Buscar por título o autor..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border rounded-lg px-4 py-2 w-full"
      />
      <button type="submit" className="btn primary">
        Buscar
      </button>
    </form>
  );
}
