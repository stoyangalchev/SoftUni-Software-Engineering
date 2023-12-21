import { html } from "../../node_modules/lit-html/lit-html.js";
import { editOfferById, getOfferById } from "../api/data.js";

const editTamplate = (offer, onSubmit) =>
  html`<section id="editPage">
    <form class="editForm" @submit=${onSubmit}>
      <img src="./images/editpage-dog.jpg" />
      <div>
        <h2>Edit PetPal</h2>
        <div class="name">
          <label for="name">Name:</label>
          <input name="name" id="name" type="text" value="${offer.name}" />
        </div>
        <div class="breed">
          <label for="breed">Breed:</label>
          <input name="breed" id="breed" type="text" value="${offer.breed}" />
        </div>
        <div class="Age">
          <label for="age">Age:</label>
          <input name="age" id="age" type="text" value="${offer.age}" />
        </div>
        <div class="weight">
          <label for="weight">Weight:</label>
          <input
            name="weight"
            id="weight"
            type="text"
            value="${offer.weight}"
          />
        </div>
        <div class="image">
          <label for="image">Image:</label>
          <input name="image" id="image" type="text" value="${offer.image}" />
        </div>
        <button class="btn" type="submit">Edit Pet</button>
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
      name: formData.get("name").trim(),
      breed: formData.get("breed").trim(),
      age: formData.get("age").trim(),
      weight: formData.get("weight").trim(),
      image: formData.get("image").trim(),
    };

    if (Object.values(editOffer).some((x) => !x)) {
      return alert("All fields are required!");
    }

    await editOfferById(offerId, editOffer);
    event.target.reset();
    ctx.page.redirect(`/details/${offerId}`);
  }
}
