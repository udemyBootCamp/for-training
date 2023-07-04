import React, { useContext } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import Search from "./Search";
import useFetchMovies from "../hooks/useFetchMovies";
import { MoviesContext } from "../store/moviesContext";

const Header = () => {
  const navigate = useNavigate();
  const { getMovieList, setGenre, handlePageNum } = useContext(MoviesContext);
  const [state, refetch] = useFetchMovies([], "");

  const genre: string[] = [
    "Action",
    "Adventure",
    "Animation",
    "Comedy",
    "Crime",
    "Drama",
    "Family",
    "Fantasy",
    "Horror",
    "Music",
    "Romance",
    "Sport",
    "Thriller",
    "War",
  ];

  const handleClick = (e: React.FormEvent<HTMLLIElement>) => {
    setGenre(e.currentTarget.id);
  };

  const titleClickHandler = (e: React.MouseEvent<HTMLHRElement>) => {
    navigate("/");
    setGenre("");
    if (state.data) {
      getMovieList(state.data);
    }
    handlePageNum(1);
  };
  return (
    <header>
      <h2 className="title" onClick={titleClickHandler}>
        Movies
      </h2>
      <nav>
        <ul className="movieNavList">
          {genre.map((item, index) => {
            return (
              <li
                id={item}
                key={index}
                onClick={handleClick}
                className="header-nav-bar"
              >
                {item}
              </li>
            );
          })}
        </ul>
      </nav>
      <Search />
    </header>
  );
};

export default Header;
