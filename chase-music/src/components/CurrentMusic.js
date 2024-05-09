import React from "react";

const CurrentMusic = (props) => {
    return (
        <div className='current-music'>
            <h2 className='current-music-title'>Now Playing:</h2>
            <div className='current-music-info'>
                <p className='current-music-song'>{props.currentSong}</p> 
                <button className='play-pause-button' onClick={props.onPlayPause}>
                    {props.isPlaying ? "Pause" : "Play"}
                </button>
            </div>
        </div>
    );
}

export default CurrentMusic;
