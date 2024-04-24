
import "./Movie.css";

function Movie({ title, cast, 0: firstEl, second, ...rest }) {

  console.log(firstEl)

  return (
    <div className="movie">
      <p>
        <span className="bold">Movie Name:</span> {title}

      </p>

      <p>
        <span className="bold">Cast:</span> {cast.join(", ") + "."}
      </p>
    </div>
  );

}

export default Movie;
