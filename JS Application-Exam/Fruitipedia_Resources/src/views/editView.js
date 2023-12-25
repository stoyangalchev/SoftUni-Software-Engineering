import { html } from "../../node_modules/lit-html/lit-html.js";
import * as itemService from "../api/itemService.js";
import { createSubmitHandler } from "../utils.js";

const editTemplate = (bike, onSubmit) =>
  html`<section id="edit">
    <div class="form">
      <h2>Edit Fruit</h2>
      <form class="edit-form" @submit=${onSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Fruit Name"
          value=${bike.name}
        />
        <input
          type="text"
          name="imageUrl"
          id="Fruit-image"
          placeholder="Fruit Image URL"
          value=${bike.imageUrl}
        />
        <textarea
          id="fruit-description"
          name="description"
          placeholder="Description"
          rows="10"
          cols="50"
        >
${bike.description}</textarea
        >
        <textarea
          id="fruit-nutrition"
          name="nutrition"
          placeholder="Nutrition"
          rows="10"
          cols="50"
        >
${bike.nutrition}"</textarea
        >
        <button type="submit">post</button>
      </form>
    </div>
  </section>`;

async function onSubmit(context, data, e) {
  const bikeID = context.params.id;
  if (Object.values(data).some((x) => x == "")) {
    return alert("All fields are required");
  }

  await itemService.updateBike(bikeID, {
    name: data.name,
    imageUrl: data.imageUrl,
    description: data.description,
    nutrition: data.nutrition,
  });
  
  e.target.reset();
  context.page.redirect(`/details/${bikeID}`);
}

export async function editView(context) {
  const bikeID = context.params.id;
  console.log(bikeID);
  const bike = await itemService.getBikeById(bikeID);
  console.log(bike);
  context.render(editTemplate(bike, createSubmitHandler(context, onSubmit)));
}
