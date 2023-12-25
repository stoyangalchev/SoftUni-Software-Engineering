import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllDashboard } from "../api/data.js";

const dashboardTemplate = (offers) => html`<section id="catalog-page">
  <h1>All Games</h1>
    ${
      offers.length == 0
        ? html`<h3 class="no-articles">No articles yet</h3>`
        : offers.map(
            (o) => html` <div class="allGames">
              <div class="allGames-info">
                <img src="${o.imageUrl}" />
                <h6>${o.category}</h6>
                <h2>${o.title}</h2>
                <a href="/details/${o._id}" class="details-button">Details</a>
              </div>
            </div>`
          )
    }
  </div>
</section>`;

export async function dashboardPage(ctx) {
  const offers = await getAllDashboard();

  ctx.render(dashboardTemplate(offers));
}
