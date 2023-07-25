import React from "react";
import useSearchMovies from "../hooks/useSearchMovies";

const Search = () => {
  const search = useSearchMovies();
  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = e.currentTarget.input.value;
    search(value);
    console.log("hi");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="string" className="searchValue" name="input" />
      <input type="submit" />
    </form>
  );
};

export default Search;
