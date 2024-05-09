import React from "react";

function SearchBar(props) {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    if(search !== ""){
      fetch(`https://itunes.apple.com/search?term=radiohead`)
    }
  })
  
  return (
    <div className='search-bar search-bar-sm-4'>
      <SearchBar onSearch={handleSearch} />
      <input
        className="search_input"     
        placeholder="Search for music..."
        value={query}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </div>
  );
}
