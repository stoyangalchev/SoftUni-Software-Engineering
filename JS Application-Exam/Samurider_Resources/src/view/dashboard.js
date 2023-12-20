import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllFacts } from "../api/data.js";

const dashboardTemplate = (facts) =>
  html`<h2>Available Motorcycles</h2>
    <section id="dashboard">
      ${facts.length == 0
        ? html`<h2 class="no-avaliable">No avaliable motorcycles yet.</h2>`
        : facts.map(
            (e) => html` <div class="motorcycle">
              <img src="${e.imageUrl}" alt="example1" />
              <h3 class="model">${e.model}</h3>
              <p class="year">Year: ${e.year}</p>
              <p class="mileage">Mileage: ${e.mileage} km.</p>
              <p class="contact">Contact Number: ${e.contact}</p>
              <a class="details-btn" href="/details/${e._id}">More Info</a>
            </div>`
          )}
    </section>`;

export async function dashboardPage(ctx) {
  const events = await getAllFacts();
console.log("s");
  ctx.render(dashboardTemplate(events));
}
