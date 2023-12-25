import { html } from "../../node_modules/lit-html/lit-html.js";
import { editOfferById, getById } from "../api/data.js";

const editTamplate = (offer, onSubmit) =>
  html`<section id="edit-page" class="auth">
    <form id="edit" @submit=${onSubmit}>
      <div class="container">
        <h1>Edit Game</h1>
        <label for="leg-title">Legendary title:</label>
        <input type="text" id="title" name="title" value="${offer.tittle}" />

        <label for="category">Category:</label>
        <input
          type="text"
          id="category"
          name="category"
          value="${offer.category}"
        />

        <label for="levels">MaxLevel:</label>
        <input
          type="number"
          id="maxLevel"
          name="maxLevel"
          min="1"
          value="${offer.maxLevel}}"
        />

        <label for="game-img">Image:</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          value="${offer.imageUrl}}"
        />

        <label for="summary">Summary:</label>
        <textarea name="summary" id="summary">${offer.summary}</textarea>
        <input class="btn submit" type="submit" value="Edit Game" />
      </div>
    </form>
  </section>`;

export async function editPage(ctx) {
  const offerId = ctx.params.id;

  const offer = await getById(offerId);
  ctx.render(editTamplate(offer, onSubmit));

  async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const editOffer = {
      title: formData.get("title").trim(),
      category: formData.get("category").trim(),
      maxLevel: formData.get("maxLevel").trim(),
      imageUrl: formData.get("imageUrl").trim(),
      summary: formData.get("summary").trim(),
    };

    if (Object.values(editOffer).some((x) => !x)) {
      return alert("All fields are required!");
    }

    await editOfferById(offerId, editOffer);
    event.target.reset();
    ctx.page.redirect(`/details/${offerId}`);
  }
}
