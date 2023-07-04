import React, { useState, useContext, useEffect } from "react";
import "./Pagination.css";
import { MoviesContext } from "../store/moviesContext";
import useFetchMovies from "../hooks/useFetchMovies";

const Pagination = () => {
  const { pageNum, handlePageNum, genre, getMovieList } =
    useContext(MoviesContext);

  const [state, refetch] = useFetchMovies([], genre, pageNum);

  useEffect(() => {
    if (state.data) {
      getMovieList(state.data);
    }
  }, [pageNum, state.data]);

  const [pageArray, setPageArray] = useState<number[]>(
    new Array(9).fill(0).map((num, index) => index + 1)
  );

  const prevClickHandler = () => {
    if (pageNum <= 1) {
      return;
    }
    if (pageArray[0] === pageNum) {
      setPageArray(pageArray.map((num) => num - 1));
    }
    handlePageNum(pageNum - 1);
  };

  const nextClickHandler = () => {
    if (pageNum >= 9) {
      setPageArray(pageArray.map((num) => num + 1));
    }
    handlePageNum(pageNum + 1);
  };

  const numberClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    const stringNum = e.currentTarget.textContent;

    handlePageNum(Number(stringNum));
  };

  return (
    <div className="paginationArea">
      <span onClick={prevClickHandler}>&lt;</span>
      {pageArray.map((num) => {
        if (pageNum === num) {
          return (
            <span id={num + ""} className="number">
              <strong>{num}</strong>
            </span>
          );
        }
        return (
          <span onClick={numberClick} id={num + ""} className="number">
            {num}
          </span>
        );
      })}
      <span onClick={nextClickHandler}>&gt;</span>
    </div>
  );
};

export default Pagination;
