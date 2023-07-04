import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import MoviesArray from "./components/MoviesArray";
import MovieDetail from "./pages/MovieDetail";
import { Routes, Route } from "react-router-dom";
import Chat from "./components/Chat";
import Pagination from "./components/Pagination";

function App() {
  const [movieId, setMovieId] = useState("");
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<MoviesArray setMovieId={setMovieId} />} />
        <Route path="/detail" element={<MovieDetail id={movieId} />} />
      </Routes>

      <Chat />

      <footer>
        <Pagination />
      </footer>
    </div>
  );
}

export default App;
