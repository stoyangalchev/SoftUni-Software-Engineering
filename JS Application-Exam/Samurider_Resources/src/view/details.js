import { html } from "../../node_modules/lit-html/lit-html.js";
import { deleteFactById, getFactById } from "../api/data.js";

const detailsTamplate = (fact, isOwner, onDelete, isLoggedIn) => html` <section
  id="details"
>
  <div id="details-wrapper">
    <img id="details-img" src="${fact.imageUrl}" alt="example1" />
    <p id="details-title">${fact.model}</p>
    <div id="info-wrapper">
      <div id="details-description">
        <p class="year">Year: ${fact.year}</p>
        <p class="mileage">Mileage: ${fact.mileage} km.</p>
        <p class="contact">Contact Number: ${fact.contact}</p>
        <p id="motorcycle-description">${fact.about}</p>
      </div>
      <div id="action-buttons">
        ${isOwner
          ? html`<a href="/edit/${fact._id}" id="edit-btn">Edit</a>
              <a href="javascript:void(0)" id="delete-btn" @click=${onDelete}
                >Delete</a
              >`
          : ""}
        ${(() => {
         
            if (isLoggedIn && !isOwner) {
              return html` <a
                href="javascript:void(0)"
                @click=${onClickLike}
                id="like-btn"
                >Like</a
              >`;
            }
          
        })()}
      </div>
    </div>
  </div>
</section>`;

export async function detailsPage(ctx) {
  const factId = ctx.params.id;
  const fact = await getFactById(factId);
  const user = ctx.user;
  // const user = getUserData();
  let userId;

  if (user != null) {
    userId = user._id;
  }

  const isOwner = user && fact._ownerId == user._id;
  const isLoggedIn = user !== undefined;

  ctx.render(detailsTamplate(fact, isOwner, onDelete, isLoggedIn));

  async function onDelete() {
    const confirmed = confirm("Are you sure?");
    if (confirmed) {
      await deleteFactById(factId);
      ctx.page.redirect("/dashboard");
    }
  }
}
