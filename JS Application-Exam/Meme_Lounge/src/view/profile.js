import { html } from "../../node_modules/lit-html/lit-html.js";
import { getTotalApplications } from "../api/data.js";

const profileTemplate = (offers, memeCount) => html`<section
  id="user-profile-page"
  class="user-profile"
>
  <article class="user-info">
    <img id="user-avatar-url" alt="user-profile" src="${offers.gender}" />
    <div class="user-content">
      <p>Username: ${offers.username}</p>
      <p>Email: ${offers.email}</p>
      <p>My memes count: ${memeCount}</p>
    </div>
  </article>
  <h1 id="user-listings-title">User Memes</h1>
  <div class="user-meme-listings">
    ${offers.length == 0
      ? html`<p class="no-memes">No memes in database.</p>`
      : offers.map(
          (o) => html`<div class="user-meme">
            <p class="user-meme-title">${o.title}</p>
            <img class="userProfileImage" alt="meme-img" src="${o.imageUrl}" />
            <a class="button" href="/details/${o._id}">Details</a>
          </div> `
        )}
  </div>
</section>`;

export async function profilePage(ctx) {
  const offers = await getTotalApplications();
  const memeCount = offers.length;
  console.log(offers);

  ctx.render(profileTemplate(offers, memeCount));
}
