import { useContext } from "react";
import { MoviesContext } from "../store/moviesContext";
import { movieType } from "../types/Movie";
import useFetchMovies from "./useFetchMovies";

const useSearchMovies = () => {
  const { searchMovie, getMovieList } = useContext(MoviesContext);
  const [state, refetch] = useFetchMovies([], "");

  return (value: string) => {
    searchMovie(value);

    if (value === "") {
      if (state.data) {
        getMovieList(state.data);
      }
    }
  };
};

export default useSearchMovies;
