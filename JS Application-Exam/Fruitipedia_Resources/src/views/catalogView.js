import { html } from "../../node_modules/lit-html/lit-html.js";
import * as itemService from "../api/itemService.js";

const itemTemplate = (bike) => html`<div class="fruit">
  <img src="${bike.imageUrl}" alt="example1" />
  <h3 class="title">${bike.name}</h3>
  <p class="description">${bike.description}</p>
  <a class="details-btn" href="/details/${bike._id}">More Info</a>
</div>`;

const catalogTemplate = (bikes) => html`
  <h2>Fruits</h2>
  <section id="dashboard">
    ${bikes.length > 0
      ? bikes.map((bike) => itemTemplate(bike))
      : html`<h2>No fruit info yet.</h2>`}
  </section>
`;

export async function catalogView(context) {
  const bikes = await itemService.getDashboardBikes();
  context.render(catalogTemplate(bikes));
}
