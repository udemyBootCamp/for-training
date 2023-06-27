import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import MoviesArray from "./components/MoviesArray";
import MovieDetail from "./pages/MovieDetail";
import { Routes, Route } from "react-router-dom";

function App() {
  const [genre, setGenre] = useState("");
  const [movieId, setMovieId] = useState("");
  return (
    <div className="App">
      <Header setGenre={setGenre} />

      <Routes>
        <Route
          path="/"
          element={<MoviesArray genre={genre} setMovieId={setMovieId} />}
        />
        <Route path="/detail" element={<MovieDetail id={movieId} />} />
      </Routes>

      <footer></footer>
    </div>
  );
}

export default App;
