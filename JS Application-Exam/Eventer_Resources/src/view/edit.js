import { html } from "../../node_modules/lit-html/lit-html.js";
import { editFactById, getFactById } from "../api/data.js";

const editTamplate = (fact, onSubmit) => html`<section id="edit">
  <div class="form">
    <h2>Edit Event</h2>
    <form class="edit-form" @submit=${onSubmit}>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Event"
        value="${fact.name}}"
      />
      <input
        type="text"
        name="imageUrl"
        id="event-image"
        placeholder="Event Image"
        value="${fact.imageUrl}}"
      />
      <input
        type="text"
        name="category"
        id="event-category"
        placeholder="Category"
        value="${fact.category}}"
      />

      <textarea
        id="event-description"
        name="description"
        placeholder="Description"
        rows="5"
        cols="50"
      >
${fact.description}"</textarea
      >

      <label for="date-and-time">Event Time:</label>
      <input
        type="text"
        name="date"
        id="date"
        placeholder="When?"
        value="${fact.date}}"
      />

      <button type="submit">Edit</button>
    </form>
  </div>
</section>`;
export async function editPage(ctx) {
  const factId = ctx.params.id;

  const fact = await getFactById(factId);
  console.log(fact);
  ctx.render(editTamplate(fact, onSubmit));

  async function onSubmit(fact) {
    fact.preventDefault();
    const formData = new FormData(fact.target);

    const editFact = {
      name: formData.get("name").trim(),
      imageUrl: formData.get("imageUrl").trim(),
      category: formData.get("category").trim(),
      description: formData.get("description").trim(),
      date: formData.get("date").trim(),
    };

    if (Object.values(editFact).some((x) => !x)) {
      return alert("All fields are required!");
    }

    await editFactById(factId, editFact);
    fact.target.reset();
    ctx.page.redirect(`/details/${factId}`);
  }
}
