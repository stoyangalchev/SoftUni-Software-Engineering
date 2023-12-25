import { html } from '../../node_modules/lit-html/lit-html.js';
import * as itemService from "../api/itemService.js";
import { createSubmitHandler } from '../utils.js';

const createTemplate = (onSubmit) => html`
  <section id="create">
    <div class="form">
      <h2>Add Fruit</h2>
      <form class="create-form" @submit=${onSubmit}>
        <input type="text" name="name" id="name" placeholder="Fruit Name" />
        <input
          type="text"
          name="imageUrl"
          id="Fruit-image"
          placeholder="Fruit Image"
        />
        <textarea
          id="fruit-description"
          name="description"
          placeholder="Description"
          rows="10"
          cols="50"
        ></textarea>
        <textarea
          id="fruit-nutrition"
          name="nutrition"
          placeholder="Nutrition"
          rows="10"
          cols="50"
        ></textarea>
        <button type="submit">Add Fruit</button>
      </form>
    </div>
  </section>
`;

export async function createView(context) {
	context.render(createTemplate(createSubmitHandler(context, onSubmit)));
}

async function onSubmit(context, data, e) {
	if (Object.values(data).some((x) => x == '')) {
		return alert('All fields are required!');
	}

	await itemService.create({
    name: data.name,
    imageUrl: data.imageUrl,
    description: data.description,
    nutrition: data.nutrition,
  });

	e.target.reset();
	context.page.redirect('/catalog');
}
