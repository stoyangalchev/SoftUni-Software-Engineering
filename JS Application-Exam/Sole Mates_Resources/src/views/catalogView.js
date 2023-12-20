import { html } from "../../node_modules/lit-html/lit-html.js";
import * as itemService from "../api/itemService.js";

const itemTemplate = (item) =>
  html`<li class="card">
    <img src="${item.imageUrl}" alt="travis" />
    <p><strong>Brand: </strong><span class="brand">${item.brand}</span></p>
    <p><strong>Model: </strong><span class="model">${item.model}</span></p>
    <p><strong>Value:</strong><span class="value">${item.value}</span>$</p>
    <a class="details-btn" href="/details/${item._id}">Details</a>
  </li>`;

const catalogTemplate = (items) => html`
  <section id="dashboard">
    <h2>Collectibles</h2>
    <ul class="card-wrapper">
      ${items.length > 0
        ? items.map((bike) => itemTemplate(bike))
        : html`<h2>There are no items added yet.</h2>`}
    </ul>
  </section>
`;

export async function catalogView(context) {
  const bikes = await itemService.getDashboardBikes();
  context.render(catalogTemplate(bikes));
}



