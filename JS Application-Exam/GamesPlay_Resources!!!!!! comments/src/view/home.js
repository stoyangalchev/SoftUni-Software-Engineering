import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllOffers } from "../api/data.js";
const homeTamplate = (offers) => html`<section id="welcome-world">
  <div class="welcome-message">
    <h2>ALL new games are</h2>
    <h3>Only in GamesPlay</h3>
  </div>
  <img src="./images/four_slider_img01.png" alt="hero" />

  <div id="home-page">
    <h1>Latest Games</h1>

    ${offers.length == 0
      ? html`<p class="no-articles">No games yet</p>`
      : offers.map(
          (o) => html`<div class="game">
            <div class="image-wrap">
              <img src="${o.imageUrl}" />
            </div>
            <h3>${o.title}</h3>
            <div class="rating">
              <span>☆</span><span>☆</span><span>☆</span><span>☆</span
              ><span>☆</span>
            </div>
            <div class="data-buttons">
              <a href="/details/${o._id}" class="btn details-btn">Details</a>
            </div>
          </div>`
        )}
  </div>
</section>`;

export async function homePage(ctx) {
  const offers = await getAllOffers();

  ctx.render(homeTamplate(offers));
}
