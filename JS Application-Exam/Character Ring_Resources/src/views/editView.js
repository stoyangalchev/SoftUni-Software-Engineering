import page from "../../node_modules/page/page.mjs";
import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { get, put } from "../services/requester.js";
import { userService } from "./../services/userService.js";
const url = "/data/characters/";

function detailsTemplate(data) {
  return html` <section id="edit">
    <div class="form">
      <img class="border" src="./images/border.png" alt="" />
      <h2>Edit Character</h2>
      <form
        class="edit-form"
        @submit=${(e) => {
          e.preventDefault();
          onEdit(data);
        }}
      >
        <input
          type="text"
          name="category"
          value="${data.category}"
          id="category"
          placeholder="Character Type"
        />
        <input
          type="text"
          name="image-url"
          value="${data.imageUrl}"
          id="image-url"
          placeholder="Image URL"
        />
        <textarea
          id="description"
          name="description"
          placeholder="Description"
          rows="2"
          cols="10"
        >
${data.description}</textarea
        >
        <textarea
          id="additional-info"
          name="additional-info"
          placeholder="Additional Info"
          rows="2"
          cols="10"
        >
${data.moreInfo}</textarea
        >
        <button type="submit">Edit</button>
      </form>
      <img class="border" src="./images/border.png" alt="" />
    </div>
  </section>`;
}

async function onEdit(data) {
  const formData = new FormData(document.querySelector("form"));
  const category = formData.get("category");
  const imageUrl = formData.get("image-url");
  const description = formData.get("description");
  const moreInfo = formData.get("additional-info");
  if (!category || !imageUrl || !description || !moreInfo) {
    return alert("All fields are required");
  }
  try {
    const response = await put(url + data._id, {
      category,
      imageUrl,
      description,
      moreInfo,
    });
    page.redirect("/details/" + data._id);
  } catch (error) {
    return alert(error.message);
  }
}
export async function editView(ctx) {
    console.log(ctx);
  const id = ctx.params.id;
  const data = await get(url + id);
  console.log(data);
  render(detailsTemplate(data), document.querySelector("main"));
}
