// MovieRow.js

import React from 'react';
import './MovieRow.css';

function MovieRow({ title, movies }) {
  return (
    <>
    <center>
    <div className="movie-row">
      <h2>{title}</h2>
      <div className="movie-thumbnails">
        {movies.map((movie, index) => (
          <div key={index} className="movie-thumbnail">
            <div className='image_div'>
            <img src={movie.image} alt={movie.name} className="movie-image" />

            </div>
            <div className="movie-details">
              <h3>{movie.name}</h3>
              <button className="watch-now-button">Watch Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </center>
    </>
  );
}

export default MovieRow;
