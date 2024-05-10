
import SearchBar from './components/SearchBar';
import CurrentMusic from './components/CurrentMusic';
import './App.css'
import Header from './components/Header';
import React, { useEffect, useState } from "react";
import MusicHeader from './components/MusicHeader';

const App = () => {
  const [songData, setSongData] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.spotify.com/v1/search?q=sweet%20child%20o%20mine%20artist:guns%20n%20roses&type=track&limit=1",
      {
      }
  )
      .then((response) => response.json())
      .then((data) => setSongData(data.tracks.items[0]));
  }, []);

  return (
    <div>
      {songData ? (
        <div>
          <h1>{songData.name}</h1>
          <p>{songData.artists[0].name}</p>
          <img src={songData.album.images[0].url} alt="Album Cover" />
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <SearchBar/>
      <CurrentMusic/>
      <Header/>
      <MusicHeader/>
    </div>
  );
}

export default App;
