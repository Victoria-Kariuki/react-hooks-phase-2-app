import React from 'react';

const Card = ({ title, artist, album, imageUrl, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-image">
        <img src={imageUrl} alt="Album Cover" />
      </div>
      <div className="card-info">
        <h2 className="card-title">{title}</h2>
        <p className="card-artist">Artist: {artist}</p>
        <p className="card-album">Album: {album}</p>
      </div>
    </div>
  );
};

export default Card;
