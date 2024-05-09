import React from "react";

function SearchBar() {
    const [query, setQuery] = useState('');

    return (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search for music..."
            value={query}
            onChange={handleChange}
          />
          <button type="submit">Search</button>
        </form>
    )
}