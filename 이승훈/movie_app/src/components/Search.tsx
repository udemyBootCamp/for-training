import React from "react";
import useSearchMovies from "../hooks/useSearchMovies";
import "./Search.css";

const Search = () => {
  const search = useSearchMovies();
  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = e.currentTarget.input.value;
    search(value);
  };
  return (
    <form onSubmit={handleSubmit} className="SearchArea">
      <input type="string" className="searchValue" name="input" />
      <input type="submit" value="영화찾기" />
    </form>
  );
};

export default Search;
