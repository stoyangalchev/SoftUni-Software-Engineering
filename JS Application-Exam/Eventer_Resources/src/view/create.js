import { html } from "../../node_modules/lit-html/lit-html.js";
import { addFact } from "../api/data.js";

const createTamplate = (onSubmit) => html`<section id="create">
  <div class="form">
    <h2>Add Event</h2>
    <form class="create-form" @submit=${onSubmit}>
      <input type="text" name="name" id="name" placeholder="Event" />
      <input
        type="text"
        name="imageUrl"
        id="event-image"
        placeholder="Event Image URL"
      />
      <input
        type="text"
        name="category"
        id="event-category"
        placeholder="Category"
      />

      <textarea
        id="event-description"
        name="description"
        placeholder="Description"
        rows="5"
        cols="50"
      ></textarea>

      <input type="text" name="date" id="date" placeholder="When?" />

      <button type="submit">Add</button>
    </form>
  </div>
</section>`;

export async function createPage(ctx) {
  ctx.render(createTamplate(onSubmit));

  async function onSubmit(fact) {
    fact.preventDefault();
    const formData = new FormData(fact.target);

    const newFact = {
      name: formData.get("name").trim(),
      imageUrl: formData.get("imageUrl").trim(),
      category: formData.get("category").trim(),
      description: formData.get("description").trim(),
      date: formData.get("date").trim(),
    };
    console.log(newFact.category);
    if (Object.values(newFact).some((x) => !x)) {
      return alert("All fields are required!");
    }

    await addFact(newFact);
    fact.target.reset();
    ctx.page.redirect("/dashboard");
  }
}
