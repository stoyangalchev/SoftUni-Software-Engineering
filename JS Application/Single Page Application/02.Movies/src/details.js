import { showView } from "./util.js";

const detailsSection = document.querySelector("#movie-details");

export function detailsPage() {
  showView(detailsSection);
  displayMovie()
}

async function displayMovie(id) {
  const movie = await getMovieById(id);
  detailsSection.replaceChildren();
}

function createMovieCard(movie) {
  const element = document.createElement("div");
  element.className = "container";
  element.innerHTML = ` <div class="row bg-light text-dark">
          <h1>Movie title: ${movie.title}</h1>

          <div class="col-md-8">
            <img class="img-thumbnail" src="${movie.img}" alt="Movie" />
          </div>
          <div class="col-md-4 text-center">
            <h3 class="my-3">Movie Description</h3>
            <p>
             ${movie.description}
            </p>
            <a class="btn btn-danger" href="#">Delete</a>
            <a class="btn btn-warning" href="#">Edit</a>
            <a class="btn btn-primary" href="#">Like</a>
            <span class="enrolled-span">Liked 1</span>
          </div>
        </div>`;
}
async function getMovieById(id) {
  const response = await fetch(`http://localhost:3030/data/movies/${id}`);
  const movie = await response.json();

  return movie;
}
