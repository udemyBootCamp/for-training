import React from "react";

interface MoviePropsType {
  genres: string[];
  img_url: string;
  title: string;
}

const Movie = ({ img_url, title }: MoviePropsType) => {
  return (
    <>
      <img src={img_url} alt="영화 포스터" width="280px" height="400px" />
      <span>{title}</span>
    </>
  );
};

export default Movie;
