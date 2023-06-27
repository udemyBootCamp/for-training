import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Movie from "../pages/Movie";
import "./MoviesArray.css";

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

  useEffect(() => {
    async function fetchData() {
      await fetch(`https://yts.mx/api/v2/list_movies.json?genre=${genre}`)
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.data.movies);
        });
    }

    fetchData();
  }, [genre]);

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
