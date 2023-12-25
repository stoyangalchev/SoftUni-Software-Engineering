import { html } from "../../node_modules/lit-html/lit-html.js";
import {
  deleteOfferById, //delete
  getOfferById, //get
 
} from "../api/data.js";

const detailsTamplate = (
  offer,
  isOwner,
  onDelete,
  
) => html` <section id="meme-details">
  <h1>Meme Title: ${offer.title}</h1>
  <div class="meme-details">
    <div class="meme-img">
      <img alt="meme-alt" src="${offer.imageUrl}" />
    </div>
    <div class="meme-description">
      <h2>Meme Description</h2>
      <p>${offer.description}</p>
      ${isOwner
        ? html`<a href="/edit/${offer._id}" class="button warning">Edit</a>
            <a
              href="javascript:void(0)"
              class="button danger"
              @click=${onDelete}
              >Delete</a
            >`
        : ""}
    </div>
  </div>
</section>`;
debugger;
export async function detailsPage(ctx) {
  const offerId = ctx.params.id;
  const offer = await getOfferById(offerId);
  console.log(offer);
  const user = ctx.user; //user from context

  let userId;

  if (user != null) {
    userId = user._id;
  }

  const isOwner = user && offer._ownerId == user._id;

  ctx.render(detailsTamplate(offer, isOwner, onDelete));

  async function onDelete() {
    const confirmed = confirm("Are you sure?");
    if (confirmed) {
      await deleteOfferById(offerId);
      ctx.page.redirect("/");
    }
  }
}
