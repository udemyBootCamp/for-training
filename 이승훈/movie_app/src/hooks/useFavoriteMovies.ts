import { useContext } from "react";
import { MoviesContext } from "../store/moviesContext";
import { movieType } from "../types/Movie";

function useFavoriteMovies(favorite: boolean, movie: movieType) {
  const { addFavoriteMovie, removeMovie } = useContext(MoviesContext);

  return () => {
    if (!favorite) {
      addFavoriteMovie(movie);
    } else {
      removeMovie(movie.id);
    }
  };
}

export default useFavoriteMovies;
