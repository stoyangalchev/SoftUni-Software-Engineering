import "./MovieList.css";
import Movie from "../movie/Movie";
function MovieList(props) {
  return (
    <div>
      <Movie title={props.movies[0].title} cast={(props.movies[0].cast.join(", "))} />
      <Movie title={props.movies[1].title} cast={(props.movies[1].cast.join(", "))} />
      <Movie title={props.movies[2].title} cast={(props.movies[2].cast.join(", "))} />
    </div>
  );
}
export default MovieList;
