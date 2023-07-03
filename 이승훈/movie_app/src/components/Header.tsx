import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
type headerpropsType = {
  setGenre: React.Dispatch<React.SetStateAction<string>>;
};

const Header = ({ setGenre }: headerpropsType) => {
  const navigate = useNavigate();
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
  };
  return (
    <header>
      <h2 className="title" onClick={titleClickHandler}>
        Movies
      </h2>
      <nav>
        <ul>
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
    </header>
  );
};

export default Header;
