import { html } from "../../node_modules/lit-html/lit-html.js";
import { editFactById, getFactById } from "../api/data.js";

const editTamplate = (fact, onSubmit) => html`
  <section id="edit">
    <div class="form">
      <h2>Edit Fact</h2>
      <form class="edit-form" @submit=${onSubmit}>
        <input
          type="text"
          name="category"
          id="category"
          placeholder="Category"
          value="${fact.category}"
        />
        <input
          type="text"
          name="image-url"
          id="image-url"
          placeholder="Image URL"
          value="${fact.imageUrl}"
        />

        <textarea
          id="description"
          name="description"
          placeholder="Description"
          rows="10"
          cols="50"
        >
${fact.description}</textarea
        >

        <textarea
          id="additional-info"
          name="additional-info"
          placeholder="Additional Info"
          rows="10"
          cols="50"
        >
${fact.moreInfo}</textarea
        >

        <button type="submit">Edit</button>
      </form>
    </div>
  </section>
`;
html` <section id="edit">
  <h2>Edit Motorcycle</h2>
  <div class="form">
    <h2>Edit Motorcycle</h2>
    <form class="edit-form" @submit=${onSubmit}>
      <input
        type="text"
        name="model"
        id="model"
        value="${fact.model}"
        placeholder="Model"
      />
      <input
        type="text"
        name="imageUrl"
        id="moto-image"
        placeholder="Moto Image"
        value="${fact.imageUrl}"
      />
      <input
        type="number"
        name="year"
        id="year"
        value="${fact.year}"
        placeholder="Year"
      />
      <input
        type="number"
        name="mileage"
        id="mileage"
        value="${fact.mileage}"
        placeholder="mileage"
      />
      <input
        type="number"
        name="contact"
        id="contact"
        value="${fact.contact}"
        placeholder="contact"
      />
      <textarea id="about" name="about" placeholder="about" rows="10" cols="50">
${fact.about}</textarea
      >
      <button type="submit">Edit Motorcycle</button>
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
      model: formData.get("model").trim(),
      imageUrl: formData.get("image-url").trim(),
      year: formData.get("year").trim(),
      mileage: formData.get("mileage").trim(),
      contact: formData.get("contact").trim(),
      about: formData.get("about").trim(),
    };

    if (Object.values(editFact).some((x) => !x)) {
      return alert("All fields are required!");
    }

    await editFactById(factId, editFact);
    fact.target.reset();
    ctx.page.redirect(`/details/${factId}`);
  }
}
