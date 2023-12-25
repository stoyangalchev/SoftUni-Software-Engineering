import { html } from "../../node_modules/lit-html/lit-html.js";
import * as itemService from "../api/itemService.js";
import { createSubmitHandler } from "../utils.js";

const editTemplate = (bike, onSubmit) => html`<section id="edit">
  <div class="form form-auto">
    <h2>Edit Your Car</h2>
    <form class="edit-form" @submit=${onSubmit}>
      <input
        type="text"
        name="model"
        id="model"
        placeholder="Model"
        value=${bike.model}
      />
      <input
        type="text"
        name="imageUrl"
        id="car-image"
        placeholder="Your Car Image URL"
        value=${bike.imageUrl}
      />
      <input
        type="text"
        name="price"
        id="price"
        placeholder="Price in Euro"
        value=${bike.price}
      />
      <input
        type="number"
        name="weight"
        id="weight"
        placeholder="Weight in Kg"
        value=${bike.weight}
      />
      <input
        type="text"
        name="speed"
        id="speed"
        placeholder="Top Speed in Kmh"
        value=${bike.speed}
      />
      <textarea
        id="about"
        name="about"
        placeholder="More About The Car"
        rows="10"
        cols="50"
      >
${bike.about}</textarea
      >
      <button type="submit">Edit</button>
    </form>
  </div>
</section>`;
async function onSubmit(context, data, e) {
  const bikeID = context.params.id;
  if (Object.values(data).some((x) => x == "")) {
    return alert("All fields are required");
  }

  await itemService.updateBike(bikeID, {
    model: data.model,
    imageUrl: data.imageUrl,
    price: data.price,
    weight: data.weight,
    speed: data.speed,
    about: data.about,
  });

  e.target.reset();
  context.page.redirect(`/details/${bikeID}`);
}

export async function editView(context) {
  const bikeID = context.params.id;
  const bike = await itemService.getBikeById(bikeID);
  context.render(editTemplate(bike, createSubmitHandler(context, onSubmit)));
}
