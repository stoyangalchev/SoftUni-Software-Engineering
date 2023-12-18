import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as itemService from "../api/itemService.js";
import { createSubmitHandler, getUserData } from "../utils.js";

const bikeTemplate = (bike) =>
  html`
    <li class="card">
      <img src="${bike.imageUrl}" alt="travis" />
      <p><strong>Brand: </strong><span class="brand">${bike.brand}</span></p>
      <p><strong>Model: </strong><span class="model">${bike.model}</span></p>
      <p><strong>Value:</strong><span class="value">${bike.value}</span>$</p>

      ${getUserData()
        ? html`<a href="/details/${bike._id}" class="details-btn">Details</a>`
        : nothing}
    </li>
  `;

const searchTemplate = (bikes, onSubmit) => html`
 <section id="search">
          <h2>Search by Brand</h2>
       <form class="search-wrapper cf" @submit=${onSubmit}>
            <input
              id="#search-input"
              type="text"
              name="search"
              placeholder="Search here..."
              required
            />
             <button type="submit">Search</button>
             </form>
    
   <h3>Results:</h3>
   <div id="search-container">
    <ul class="card-wrapper">
      ${
        typeof bikes === "object" && bikes.length > 0
          ? bikes.map((x) => bikeTemplate(x))
          : html`<h2>There are no results found.</h2>`
      }
 
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
