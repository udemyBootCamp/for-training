import React, { useEffect, useState } from "react";
import "./MovieDetail.css";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";

type infoType = {
  background_image: string;
  large_cover_image: string;
  description: string;
  genres: string[];
  rating: number;
  runtime: number;
  title: string;
  year: number;
};

interface MovieDetailPropsType {
  id: string;
}

const MovieDetail = ({ id }: MovieDetailPropsType) => {
  const [info, setInfo] = useState<infoType>({} as infoType);
  const [load, setLoad] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchData() {
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        .then((res) => res.json())
        .then((data) => {
          setInfo(data.data.movie);
          setLoad(false);
        })
        .catch((err) => {
          console.log(err);
          setLoad(false);
        });
    }
    setLoad(true);
    fetchData();
  }, [id]);

  const handleCloseClick = () => {
    navigate("/");
  };
  return (
    <>
      {load ? (
        <Loading />
      ) : (
        <>
          <img
            className="background_image"
            src={info.background_image}
            alt="배경이미지"
          />
          <section className="infoArea">
            <img
              className="poster"
              src={info.large_cover_image}
              alt="영화포스터"
            />
            <div>
              <h2>{info.title}</h2>
              <p className="description">{info.description}</p>
              <p className="genres">장르: {info.genres.join(", ")}</p>
              <p>별점: {info.rating}</p>
              <p>상영시간: {info.runtime}분</p>
              <p>개봉연도: {info.year}</p>
            </div>
          </section>{" "}
          <button onClick={handleCloseClick}>X</button>
        </>
      )}
    </>
  );
};

export default MovieDetail;
