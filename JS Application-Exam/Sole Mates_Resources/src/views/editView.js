import { html } from '../../node_modules/lit-html/lit-html.js';
import * as motorbikesService from '../api/itemService.js';
import { createSubmitHandler } from '../utils.js';

const editTemplate = (item, onSubmit) =>
html` <section id="edit">
  <div class="form">
    <h2>Edit item</h2>
    <form class="edit-form" @submit=${onSubmit}>
      <input
        type="text"
        name="brand"
        id="shoe-brand"
        placeholder="Brand"
        value=${item.brand}
      />
      <input
        type="text"
        name="model"
        id="shoe-model"
        placeholder="Model"
        value=${item.model}
      />
      <input
        type="text"
        name="imageUrl"
        id="shoe-img"
        placeholder="Image url"
        value=${item.imageUrl}
      />
      <input
        type="text"
        name="release"
        id="shoe-release"
        placeholder="Release date"
        value=${item.release}
      />
      <input
        type="text"
        name="designer"
        id="shoe-designer"
        placeholder="Designer"
        value=${item.designer}
      />
      <input
        type="text"
        name="value"
        id="shoe-value"
        placeholder="Value"
        value=${item.value}
      />

      <button type="submit">post</button>
    </form>
  </div>
</section>`;

async function onSubmit(context, data, e) {
	const bikeID = context.params.id;
	if (Object.values(data).some((x) => x == '')) {
		return alert('All fields are required');
	}

	await motorbikesService.updateBike(bikeID, {
    brand: data.brand,
    model: data.model,
    imageUrl: data.imageUrl,
    release: data.release,
    designer: data.designer,
    value: data.value,
  });

	e.target.reset();
	context.page.redirect(`/details/${bikeID}`);
}

export async function editView(context) {
	const bikeID = context.params.id;
	const bike = await motorbikesService.getBikeById(bikeID);
	context.render(editTemplate(bike, createSubmitHandler(context, onSubmit)));
}
