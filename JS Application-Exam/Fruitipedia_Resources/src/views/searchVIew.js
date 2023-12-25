import { html } from "../../node_modules/lit-html/lit-html.js";
import * as itemService from "../api/itemService.js";
import { login } from "../api/userService.js";

const bikeTemplate = (bike) => html`<div class="fruit">
  <img src="${bike.imageUrl}" alt="example1" />
  <h3 class="title">${bike.name}</h3>
  <p class="description">${bike.description}</p>
  <a class="details-btn" href="/details/${bike._id}">More Info</a>
</div>`;

const searchTemplate = (bikes, onSubmit) => html`
  <section id="search">
    <div class="form">
      <h2>Search</h2>
      <form class="search-form" @submit=${onSubmit}>
        <input type="text" name="search" id="search-input" />
        <button class="button-list">Search</button>
      </form>
    </div>
    <h4>Results:</h4>
    <div class="search-result">
      ${console.log("2")}
      ${bikes.length> 0
        ? bikes.map((x) => bikeTemplate(x))
        : html`<p class="no-result">No results.</p>`}
    </div>
  </section>
`;

async function onSubmit(context, e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const query = formData.get("search");
  if (!query) {
    return alert("Search input is required!");
  }

  const bikes = await itemService.searchBikes(query);
  context.render(searchTemplate(bikes, (e) => onSubmit(context, e)));
}

export async function searchView(context) {
  context.render(searchTemplate([], (e) => onSubmit(context, e)));
}
