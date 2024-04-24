import "./App.css";
import MovieList from "./components/movieList/MovieList";
import Timer from "./components/timer/Timer";
import Spinner from "./components/spinner/Spinner";
import movies from "./movies";

function App() {



  return (
    <div>
      <MovieList movies={movies} />
      <Timer start={0} />
      <Spinner isSpinner={false} />
    </div>
  );
}

export default App;
