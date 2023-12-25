import { html } from "../../node_modules/lit-html/lit-html.js";
import { editOfferById, getOfferById } from "../api/data.js";

const editTamplate = (offer, onSubmit) => html`<section id="edit-meme">
  <form id="edit-form" @submit=${onSubmit}>
    <h1>Edit Meme</h1>
    <div class="container">
      <label for="title">Title</label>
      <input
        id="title"
        type="text"
        placeholder="Enter Title"
        name="title"
        value="${offer.title}"
      />
      <label for="description">Description</label>
      <textarea
        id="description"
        placeholder="Enter Description"
        name="description"
      >
 ${offer.description}
                        </textarea
      >
      <label for="imageUrl">Image Url</label>
      <input
        id="imageUrl"
        type="text"
        placeholder="Enter Meme ImageUrl"
        name="imageUrl"
        value="${offer.imageUrl}"
      />
      <input type="submit" class="registerbtn button" value="Edit Meme" />
    </div>
  </form>
</section>`;

export async function editPage(ctx) {
  const offerId = ctx.params.id;

  const offer = await getOfferById(offerId);
  ctx.render(editTamplate(offer, onSubmit));

  async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const editOffer = {
      title: formData.get("title").trim(),
      description: formData.get("description").trim(),
      imageUrl: formData.get("imageUrl").trim(),
    };

    if (Object.values(editOffer).some((x) => !x)) {
      return alert("All fields are required!");
    }

    await editOfferById(offerId, editOffer);
    event.target.reset();
    ctx.page.redirect(`/details/${offerId}`);
  }
}
