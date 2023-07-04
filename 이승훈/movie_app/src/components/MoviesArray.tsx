import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Movie from "../pages/Movie";
import "./MoviesArray.css";
import useFetchMovies from "../hooks/useFetchMovies";
import { MoviesContext } from "../store/moviesContext";

interface MovieArrayPropsType {
  setMovieId: React.Dispatch<React.SetStateAction<string>>;
}

const MoviesArray = ({ setMovieId }: MovieArrayPropsType) => {
  const { movies, getMovieList, genre } = useContext(MoviesContext);
  const navigate = useNavigate();

  const [state, refetch] = useFetchMovies([], genre);

  useEffect(() => {
    if (state.data) {
      getMovieList(state.data);
    }
  }, [state.data]);

  const movieClickHandler = (e: React.MouseEvent<HTMLLIElement>) => {
    setMovieId(e.currentTarget.id);
    navigate("/detail");
  };
  return (
    <ul className="movieArrayList">
      {movies.map((movie) => {
        return (
          <li
            key={movie.id}
            id={movie.id + ""}
            onClick={movieClickHandler}
            className="movieArrayItem"
          >
            <Movie
              genres={movie.genres}
              title={movie.title}
              img_url={movie.large_cover_image}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default MoviesArray;
