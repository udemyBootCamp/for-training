import React, { useEffect, useState } from "react";
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
const MoviesArray = () => {
  const [movies, setMovies] = useState<movieType[]>([]);

  useEffect(() => {
    async function fetchData() {
      await fetch("https://yts.mx/api/v2/list_movies.json")
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.data.movies);
        });
    }

    fetchData();
  }, []);

  const clickHandler = () => {};

  return (
    <ul>
      {movies.map((movie) => {
        return (
          <li key={movie.id}>
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
