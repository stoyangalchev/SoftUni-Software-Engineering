    import page from "../../node_modules/page/page.mjs";
    import { html, render } from "./../../node_modules/lit-html/lit-html.js";
    import { post } from "../services/requester.js";

    const url = "/data/characters"; //Url change

    function createTemlate() {
      return html`
        <section id="create">
          <div class="form">
            <img class="border" src="./images/border.png" alt="" />
            <h2>Add Character</h2>
            <form
              class="create-form"
              @submit=${(e) => {
                e.preventDefault();
                onCreate();
              }}
            >
              <input
                type="text"
                name="category"
                id="category"
                placeholder="Character Type"
              />
              <input
                type="text"
                name="image-url"
                id="image-url"
                placeholder="Image URL"
              />
              <textarea
                id="description"
                name="description"
                placeholder="Description"
                rows="2"
                cols="10"
              ></textarea>
              <textarea
                id="additional-info"
                name="additional-info"
                placeholder="Additional Info"
                rows="2"
                cols="10"
              ></textarea>
              <button type="submit">Add Character</button>
            </form>
            <img class="border" src="./images/border.png" alt="" />
          </div>
        </section>
      `;
    }

    async function onCreate() {
      const formData = new FormData(document.querySelector(".create-form"));
      const category = formData.get("category");
      const imageUrl = formData.get("image-url");
      const description = formData.get("description");
      const moreInfo = formData.get("additional-info");

      if (!category || !imageUrl || !description || !moreInfo) {
        return alert("All fields are required");
      }
      try {
        const response = await post(url, {
          category,
          imageUrl,
          description,
          moreInfo,
        });
        page.redirect("/dashboard");
      } catch (error) {
        return alert(error.message);
      }
    }
    export function create() {
      return render(createTemlate(), document.querySelector("main"));
    }
