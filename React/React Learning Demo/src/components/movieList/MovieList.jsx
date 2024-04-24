import "./MovieList.css";
import Movie from "../movie/Movie";


function MovieList(props) {
  // console.log(props.movies);
  const array = [10, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="movieList">
      {props.movies.map((movie, index) => {
        return <Movie key={index} {...movie} {...array} />
      })}
    </div>
  );

}

export default MovieList;
