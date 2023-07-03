import { useEffect, useReducer } from "react";

type dataType = {
  genres: string[];
  background_image: string;
  description_full: string;
  id: number;
  large_cover_image: string;
  rating: number;
  synopsis: string;
  title: string;
};

interface stateType {
  loading: boolean;
  data: dataType[] | null | undefined;
  error: null | false;
}

interface actionType {
  type: string;
  data?: dataType[];
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
  genre: string
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
        `https://yts.mx/api/v2/list_movies.json?genre=${genre}`
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
  }, [genre]);

  return [state, fetchData];
}

export default useFetchMovies;
