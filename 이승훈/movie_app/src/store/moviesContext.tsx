import React, { useState, useEffect } from "react";
import { movieType } from "../types/Movie";

type MoviesContextType = {
  movies: movieType[];
  favoriteMovies: movieType[];
  pageNum: number;
  genre: string;
  setGenre: React.Dispatch<React.SetStateAction<string>>;
  searchMovie: (value: string) => void;
  getMovieList: (movies: movieType[]) => void;
  addFavoriteMovie: (movie: movieType) => void;
  removeMovie: (id: number) => void;
  handlePageNum: (num: number) => void;
};

export const MoviesContext = React.createContext<MoviesContextType>({
  movies: [],
  favoriteMovies: [],
  pageNum: 1,
  genre: "",
  setGenre: () => {},
  searchMovie: () => {},
  getMovieList: () => {},
  addFavoriteMovie: () => {},
  removeMovie: () => {},
  handlePageNum: () => {},
});

const MoviesContextProvider = (props: {
  children: React.ReactNode;
}): JSX.Element => {
  const [movielist, setMovielist] = useState<movieType[]>([]);
  const [favoriteMovies, setFavoriteMovies] = useState<movieType[]>([]);
  const [pageNum, setPageNum] = useState(1);
  const [genre, setGenre] = useState("");

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

  const handlePageNum = (num: number) => {
    setPageNum(num);
  };

  const contextValue: MoviesContextType = {
    movies: movielist,
    favoriteMovies: favoriteMovies,
    pageNum: pageNum,
    genre: genre,
    setGenre: setGenre,
    searchMovie: searchMovieHandler,
    getMovieList: getMovieListHandler,
    addFavoriteMovie: addFavoriteMovieHandler,
    removeMovie: removeFavoriteMovieHandler,
    handlePageNum: handlePageNum,
  };

  return (
    <MoviesContext.Provider value={contextValue}>
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
