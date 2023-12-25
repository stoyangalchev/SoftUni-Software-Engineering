import { html } from "../../node_modules/lit-html/lit-html.js";
import { createOffer } from "../api/data.js";

const createTamplate = (onSubmit) =>
  html`<section id="create-meme">
    <form id="create-form" @submit=${onSubmit}>
      <div class="container">
        <h1>Create Meme</h1>
        <label for="title">Title</label>
        <input id="title" type="text" placeholder="Enter Title" name="title" />
        <label for="description">Description</label>
        <textarea
          id="description"
          placeholder="Enter Description"
          name="description"
        ></textarea>
        <label for="imageUrl">Meme Image</label>
        <input
          id="imageUrl"
          type="text"
          placeholder="Enter meme ImageUrl"
          name="imageUrl"
        />
        <input type="submit" class="registerbtn button" value="Create Meme" />
      </div>
    </form>
  </section>`;

export async function createPage(ctx) {
  ctx.render(createTamplate(onSubmit));

  async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const offer = {
      title: formData.get("title").trim(),
      imageUrl: formData.get("imageUrl").trim(),
      description: formData.get("description").trim(),
    };

    if (Object.values(offer).some((x) => !x)) {
      return alert("All fields are required!");
    }

    await createOffer(offer);
    event.target.reset();
    ctx.page.redirect("/dashboard");
  }
}
