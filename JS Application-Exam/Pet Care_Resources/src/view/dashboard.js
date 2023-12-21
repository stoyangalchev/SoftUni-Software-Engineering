import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllOffers } from "../api/data.js";

const dashboardTemplate = (offers) => html`<section id="dashboard">
            <h2 class="dashboard-title">Services for every animal</h2>
            <div class="animals-dashboard">
  ${
    offers.length == 0
      ? html` <div>
          <p class="no-pets">No pets in dashboard</p>
        </div>`
      : offers.map(
          (o) => html`<div class="animals-board">
            <article class="service-img">
              <img class="animal-image-cover" src=".${o.image}" />
            </article>
            <h2 class="name">${o.name}</h2>
            <h3 class="breed">${o.breed}</h3>
            <div class="action">
              <a class="btn" href="/details/${o._id}">Details</a>
            </div>
          </div>`
        )
  }
</section>`;

export async function dashboardPage(ctx) {
  const offers = await getAllOffers();
  console.log(offers);
  ctx.render(dashboardTemplate(offers));
}
