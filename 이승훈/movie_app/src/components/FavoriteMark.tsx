import React, { useState } from "react";
import "./FavoriteMark.css";
import Star from "../assests/star-symbol-icon.svg";
import EmptyStar from "../assests/star-empty-icon.svg";
import { movieType } from "../types/Movie";
import useFavoriteMovies from "../hooks/useFavoriteMovies";

type markProps = {
  movie: movieType;
};

const FavoriteMark = (props: markProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const favoriteHandler = useFavoriteMovies(isFavorite, props.movie);

  const clickHandler = () => {
    favoriteHandler();
    setIsFavorite(!isFavorite);
  };

  return (
    <span onClick={clickHandler} className="star">
      {isFavorite ? (
        <img src={Star} alt="star" width="25px" height="25px" />
      ) : (
        <img src={EmptyStar} alt="emptyStar" width="25px" height="25px" />
      )}
    </span>
  );
};

export default FavoriteMark;
