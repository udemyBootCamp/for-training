import { useEffect, useReducer } from "react";
import { movieType } from "../types/Movie";

interface stateType {
  loading: boolean;
  data: movieType[] | null | undefined;
  error: null | false;
}

interface actionType {
  type: string;
  data?: movieType[];
  error?: any;
}

const reducer = (state: stateType, action: actionType): stateType => {
  switch (action.type) {
    case "LOADING":
      return {
        loading: true,
        data: null,
        error: null,
      };
    case "SUCCESS":
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case "ERROR":
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

function useFetchMovies(
  deps: any[] = [],
  genre: string,
  page: number = 1
): [stateType, () => Promise<void>] {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: false,
  });

  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    try {
      const data = await fetch(
        `https://yts.mx/api/v2/list_movies.json?genre=${genre}&page=${page}`
      )
        .then((res) => res.json())
        .then((res) => res.data.movies);
      dispatch({ type: "SUCCESS", data });
    } catch (e) {
      dispatch({ type: "ERROR", error: e });
    }
  };

  useEffect(() => {
    fetchData();
  }, [genre, page]);

  return [state, fetchData];
}

export default useFetchMovies;
