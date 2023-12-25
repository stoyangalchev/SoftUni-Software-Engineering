import { html, render } from "./../../node_modules/lit-html/lit-html.js";

const url = "/data/characters?sortBy=_createdOn%20desc";
const host = "http://localhost:3030";

function productsTemplate(data) {
  if (data.length == 0) {
    return html`<h2>No added Heroes yet.</h2>`;
  } else {
    return html`
      <h2>Characters</h2>
      <section id="characters">${data.map((x) => productTemplate(x))}</section>
    `;
  }
}

export async function dashboardView() {
  const response = await fetch(host + url);
  const products = await response.json();
  return render(productsTemplate(products), document.querySelector("main"));
}

function productTemplate(x) {
  return html`
    <div class="character">
      <img src="${x.imageUrl}" alt="example1" />
      <div class="hero-info">
        <h3 class="category">${x.category}</h3>
        <p class="description">${x.description}</p>
        <a class="details-btn" href="/details/${x._id}">More Info</a>
      </div>
    </div>
  `;
}
