import "./App.css";
import MoviesArray from "./components/MoviesArray";
import TopRatedMovies from "./pages/TopRatedMovies";

function App() {
  const genre: string[] = [
    "Action",
    "adventure",
    "animation",
    "comedy",
    "crime",
    "Drama",
    "Family",
    "Fantasy",
    "Horror",
    "Music",
    "Romance",
    "Sport",
    "Thriller",
    "War",
  ];
  return (
    <div className="App">
      <header>Movies</header>
      <nav>
        <ul>
          {genre.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </nav>

      <section className="Top Rate"></section>
      <section className="sorted Movie"></section>
      <MoviesArray />

      <footer></footer>
    </div>
  );
}

export default App;
