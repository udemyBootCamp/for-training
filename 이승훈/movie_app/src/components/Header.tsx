import React from "react";
import "./Header.css";
type headerpropsType = {
  setGenre: React.Dispatch<React.SetStateAction<string>>;
};

const Header = ({ setGenre }: headerpropsType) => {
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
  return (
    <header>
      <h2 className="title">Movies</h2>
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
