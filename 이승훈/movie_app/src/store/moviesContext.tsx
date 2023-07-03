import React, { useState } from "react";
import { movieType } from "../types/Movie";

type MoviesContextType = {
  movies: movieType[];
  favoriteMovies: movieType[];
  searchMovie: (value: string) => void;
  getMovieList: (movies: movieType[]) => void;
  addFavoriteMovie: (movie: movieType) => void;
  removeMovie: (id: number) => void;
};

export const MoviesContext = React.createContext<MoviesContextType>({
  movies: [],
  favoriteMovies: [],
  searchMovie: () => {},
  getMovieList: () => {},
  addFavoriteMovie: () => {},
  removeMovie: () => {},
});

const MoviesContextProvider = (props: {
  children: React.ReactNode;
}): JSX.Element => {
  const [movielist, setMovielist] = useState<movieType[]>([]);
  const [favoriteMovies, setFavoriteMovies] = useState<movieType[]>([]);

  const getMovieListHandler = (movies: movieType[]) => {
    setMovielist(movies);
  };

  const searchMovieHandler = (value: string) => {
    const newList = movielist.filter((movie) => movie.title.includes(value));
    setMovielist(newList);
  };

  const addFavoriteMovieHandler = (movie: movieType) => {
    setFavoriteMovies([...favoriteMovies, movie]);
  };

  const removeFavoriteMovieHandler = (id: number) => {
    const newList = favoriteMovies.filter((movie) => movie.id !== id);
    setFavoriteMovies(newList);
  };

  const contextValue: MoviesContextType = {
    movies: movielist,
    favoriteMovies: favoriteMovies,
    searchMovie: searchMovieHandler,
    getMovieList: getMovieListHandler,
    addFavoriteMovie: addFavoriteMovieHandler,
    removeMovie: removeFavoriteMovieHandler,
  };

  return (
    <MoviesContext.Provider value={contextValue}>
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
