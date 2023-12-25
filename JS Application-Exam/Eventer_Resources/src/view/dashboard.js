import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllFacts } from "../api/data.js";

const dashboardTemplate = (facts) =>
  html`<h2>Current Events</h2>
    <section id="dashboard">
      ${facts.length > 0
        ? facts.map(
            (e) => html` <div class="event">
              <img src="${e.imageUrl}" alt="example1" />
              <p class="title">${e.name}</p>
              <p class="date">${e.date}</p>
              <a class="details-btn" href="/details/${e._id}">Details</a>
            </div>`
          )
        : html`<h2>No Fun Facts yet.</h2>`}
    </section>`;

export async function dashboardPage(ctx) {
  const events = await getAllFacts();

  ctx.render(dashboardTemplate(events));
}
