
import "./Movie.css";

function Movie(props) {
  return (
    <div className="movie">
      <p>
        <span className="bold">Movie Name:</span> {props.title}
      </p>

      <p>
        <span className="bold">Cast:</span> {props.cast}
      </p>
    </div>
  );
}

export default Movie;
