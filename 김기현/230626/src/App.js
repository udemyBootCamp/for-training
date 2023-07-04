import React, { useEffect, useState } from 'react';
import './movie.css';
import MovieModal from './movieModal';

const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year')
      .then((response) => response.json())
      .then((data) => setMovies(data.data.movies));
  }, []);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div>
      <h1>Movie Info List</h1>
      <div className="movieGallery">
        {movies.map((movie) => (
          <div key={movie.id} className="moviePoster" onClick={() => handleMovieClick(movie)}>
            <img src={movie.medium_cover_image} alt={movie.title} />
          </div>
        ))}
      </div>

      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default MoviePage;
