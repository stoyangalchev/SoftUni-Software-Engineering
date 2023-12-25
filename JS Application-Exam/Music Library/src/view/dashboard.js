import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllFacts } from "../api/data.js";

const dashboardTemplate = (facts) => html`<section id="dashboard">
  <h2>Albums</h2>
  <ul class="card-wrapper">
    ${facts.length == 0
      ? html`<h2>There are no albums added yet.</h2>`
      : facts.map(
          (e) => html`
            
              <li class="card">
                <img src="${e.imageUrl}" alt="travis" />
                <p>
                  <strong>Singer/Band: </strong
                  ><span class="singer">${e.singer}</span>
                </p>
                <p>
                  <strong>Album name: </strong
                  ><span class="album">${e.album}</span>
                </p>
                <p>
                  <strong>Sales:</strong><span class="sales">${e.sales}</span>
                </p>
                <a class="details-btn" href="/details/${e._id}">Details</a>
              </li>
            </ul>
          `
        )}
  </ul>
</section>`;

export async function dashboardPage(ctx) {
  const events = await getAllFacts();

  ctx.render(dashboardTemplate(events));
}
