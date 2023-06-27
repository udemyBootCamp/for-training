import React, { useEffect } from "react";
const TopRatedMovies = () => {
  useEffect(() => {
    async function fetchData() {
      await fetch("https://yts.mx/api/v2/list_movies.json")
        .then((res) => res.json())
        .then((data) => {
          console.log(data.data);
        });
    }

    fetchData();
  }, []);

  return <div>TopRatedMovies</div>;
};

export default TopRatedMovies;
