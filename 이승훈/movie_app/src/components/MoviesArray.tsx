import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Movie from "../pages/Movie";
import "./MoviesArray.css";
import useFetchMovies from "../hooks/useFetchMovies";

type movieType = {
  genres: string[];
  background_image: string;
  description_full: string;
  id: number;
  large_cover_image: string;
  rating: number;
  synopsis: string;
  title: string;
};

interface MovieArrayPropsType {
  genre: string;
  setMovieId: React.Dispatch<React.SetStateAction<string>>;
}

const MoviesArray = ({ genre, setMovieId }: MovieArrayPropsType) => {
  const [movies, setMovies] = useState<movieType[]>([]);
  const navigate = useNavigate();

  const [state, refetch] = useFetchMovies([], genre);

  useEffect(() => {
    if (state.data) {
      setMovies(state.data);
    }
  }, [state.data]);

  const movieClickHandler = (e: React.MouseEvent<HTMLLIElement>) => {
    setMovieId(e.currentTarget.id);
    navigate("/detail");
  };
  return (
    <ul>
      {movies.map((movie) => {
        return (
          <li key={movie.id} id={movie.id + ""} onClick={movieClickHandler}>
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
