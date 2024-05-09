import React, { useState } from "react";

function handleSearch(query) {
    console.log('Searching for:', query);
    setSearchResults([]);
    
    return (
        <div>
          <h1>Music Search App</h1>
          <MusicSearchBar onSearch={handleSearch} />
          {/* Display search results here */}
        </div>
    );
}
