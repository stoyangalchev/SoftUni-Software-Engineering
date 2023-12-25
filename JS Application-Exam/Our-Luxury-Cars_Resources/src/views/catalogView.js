import { html } from '../../node_modules/lit-html/lit-html.js';
import * as itemService from '../api/itemService.js';

const itemTemplate = (bike) => html`<div class="car">
  <img src="${bike.imageUrl}" alt="example1" />
  <h3 class="model">${bike.model}</h3>
  <div class="specs">
    <p class="price">Price: €${bike.price}</p>
    <p class="weight">Weight: ${bike.weight} kg</p>
    <p class="top-speed">Top Speed: ${bike.speed} kph</p>
  </div>
  <a class="details-btn" href="/details/${bike._id}">More Info</a>
</div>`;

const catalogTemplate = (bikes) => html`
  <h3 class="heading">Our Cars</h3>
  <section id="dashboard">
    ${bikes.length > 0
      ? bikes.map((bike) => itemTemplate(bike))
      : html`<h3 class="nothing">Nothing to see yet</h3>`}
  </section>
`;

export async function catalogView(context) {
	const bikes = await itemService.getDashboardBikes();
	context.render(catalogTemplate(bikes));
}
