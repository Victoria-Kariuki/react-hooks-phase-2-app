import React from 'react';

const MusicCard = ({ music }) => {
  return (
    <div className="music-card">
      <img src={music.thumbnail} alt="Music Thumbnail" />
      <div className="details">
        <p className="title">{music.title}</p>
        <p className="artist">{music.artist}</p>
      </div>
      <div className="timer">
        <span>00:00</span>
        <span>03:00</span>
      </div>
      <div className="controls">
        <i className="material-icons">repeat</i>
        <i className="material-icons" id="prev">skip_previous</i>
        <div className="play">
          <i className="material-icons">play_arrow</i>
        </div>
        <i className="material-icons" id="next">skip_next</i>
      </div>
    </div>
  );
};

export default MusicCard;

