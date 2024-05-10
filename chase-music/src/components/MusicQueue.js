import React from "react";

function List({ open, setOpen, musicNumber, setMusicNumber }) {
  const toggleList = () => {
    setOpen(!open);
  };

  return `
    <div class="list ${open ? 'open' : ''}">
      <div class="header" onclick="toggleList()">
        <i class="material-icons">queue_music</i>
        <span>Music List</span>
      </div>
      <div class="content">
        ${open ? musics.map((music, index) => `
          <div key="${index}" class="music-item">
            <span>${music.title}</span>
            <span>${music.artist}</span>
          </div>
        `).join('') : ''}
      </div>
      <i class="material-icons" onclick="setOpen(false)">close</i>
    </div>
  `;
}

export default MusicQueue;
