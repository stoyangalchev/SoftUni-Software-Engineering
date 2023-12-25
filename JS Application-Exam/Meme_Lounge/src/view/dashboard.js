import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllOffers } from "../api/data.js";

const dashboardTemplate = (offers) => html`<section id="meme-feed">
  <h1>All Memes</h1>
  <div id="memes">
    ${offers.length == 0
      ? html`<p class="no-memes">No memes in database.</p>`
      : offers.map(
          (o) => html`<div class="meme">
            <div class="card">
              <div class="info">
                <p class="meme-title">${o.title}</p>
                <img class="meme-image" alt="meme-img" src="${o.imageUrl}" />
              </div>
              <div id="data-buttons">
                <a class="button" href="/details/${o._id}">Details</a>
              </div>
            </div>
          </div>`
        )}
  </div>
</section>`;

export async function dashboardPage(ctx) {
  const offers = await getAllOffers();
  console.log(offers);
  ctx.render(dashboardTemplate(offers));
}
