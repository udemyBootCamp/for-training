import React from 'react';

const movieModal = ({ movie, onClose }) => {
  return (
    <div className="modalOverlay">
      <div className="modal">
        <h2>{movie.title}</h2>
        <p>Year: {movie.year}</p>
        <p>Rating: {movie.rating}</p>
        <p>Summary: {movie.summary}</p>
        <button onClick={onClose}>X</button>
      </div>
    </div>
  );
};

export default movieModal;
