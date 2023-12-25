import { html } from "../../node_modules/lit-html/lit-html.js";
import { editFactById, getFactById } from "../api/data.js";

const editTamplate = (fact, onSubmit) => html`<section id="edit">
  <div class="form">
    <h2>Edit Album</h2>
    <form class="edit-form" @submit=${onSubmit}>
      <input
        type="text"
        name="singer"
        id="album-singer"
        placeholder="Singer/Band"
        value="${fact.singer}"
      />
      <input
        type="text"
        name="album"
        id="album-album"
        placeholder="Album"
        value="${fact.album}"
      />
      <input
        type="text"
        name="imageUrl"
        id="album-img"
        placeholder="Image url"
        value="${fact.imageUrl}"
      />
      <input
        type="text"
        name="release"
        id="album-release"
        placeholder="Release date"
        value="${fact.release}"
      />
      <input
        type="text"
        name="label"
        id="album-label"
        placeholder="Label"
        value="${fact.label}"
      />
      <input
        type="text"
        name="sales"
        id="album-sales"
        placeholder="Sales"
        value="${fact.sales}"
      />

      <button type="submit">post</button>
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
      singer: formData.get("singer").trim(),
      album: formData.get("album").trim(),
      imageUrl: formData.get("imageUrl").trim(),
      release: formData.get("release").trim(),
      label: formData.get("label").trim(),
      sales: formData.get("sales").trim(),
    };

    if (Object.values(editFact).some((x) => !x)) {
      return alert("All fields are required!");
    }

    await editFactById(factId, editFact);
    fact.target.reset();
    ctx.page.redirect(`/details/${factId}`);
  }
}
