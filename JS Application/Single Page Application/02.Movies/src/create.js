import { homePage } from "./home.js";
import { showView } from "./util.js";

const createSection = document.querySelector("#add-movie");
const form = createSection.querySelector("form");

form.addEventListener("submit", onCreateSubmit);
export function createPage() {
  showView(createSection);
}

async function onCreateSubmit(event) {
  event.preventDefault();
  const formData = new FormData(form);

  const title = formData.get("title");
  const description = formData.get("description");
  const img = formData.get("img");

  if (!title || !description || !img) {
    return alert("All fields are required!");
  }

  const movie = {
    title,
    description,
    img,
  };

  await createMovie(movie);
  form.reset();
  homePage();
}

async function createMovie(movie) {
  const user = JSON.parse(sessionStorage.getItem("user"));

  if (!user) {
    return alert("You're not logged in!");
  }

  const token = user.accessToken;
  if (!token) {
    return alert("You're not logged in!");
  }

  const response = await fetch("http://localhost:3030/data/movies", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": user.accessToken,
    },
    body: JSON.stringify(movie),
  });

  if (response.ok) {
    const movie = await response.json();
    return movie;
  } else {
    const error = await response.json();
    alert(error.message);
    throw new Error(error.message);
  }
}
