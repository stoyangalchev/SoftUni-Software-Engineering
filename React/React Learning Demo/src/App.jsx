import "./App.css";
import MovieList from "./components/movieList/MovieList";
import Timer from "./components/timer/Timer";
import Spinner from "./components/spinner/Spinner";

function App() {
  const movies = [
    { title: "The Godfather", cast: ["Stoyan", "Stanislava"] },
    { title: "The Dark Knight", cast: ["Stoyan", "Veni"] },
    { title: "Pulp Fiction", cast: ["Tacho", "Stanislava"] },
  ];

  return (
    <div>
      <MovieList movies={movies} />
      <Timer start={0} />
      <Spinner isSpinner={false} />
    </div>
  );
}

export default App;
