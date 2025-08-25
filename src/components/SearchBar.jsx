import { useState, useEffect } from "react";

export default function SearchBar({ onSearch, query }) {
  const [localQuery, setLocalQuery] = useState(query || "");

  useEffect(() => {
    setLocalQuery(query);
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (localQuery.trim()) onSearch(localQuery);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        placeholder="Buscar por título o autor..."
        value={localQuery}
        onChange={(e) => setLocalQuery(e.target.value)}
        className="border rounded-lg px-4 py-2 w-full"
      />
      <button type="submit" className="btn primary">
        Buscar
      </button>
    </form>
  );
}
