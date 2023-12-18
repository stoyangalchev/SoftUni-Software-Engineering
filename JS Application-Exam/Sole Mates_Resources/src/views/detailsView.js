import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { getUserData } from "../utils.js";
import * as motorbikesService from "../api/itemService.js";

const detailsTemplate = (user, item, onDelete) =>
  html` <section id="details">
    <div id="details-wrapper">
      <p id="details-title">Shoe Details</p>
      <div id="img-wrapper">
        <img src="${item.imageUrl}" alt="example1" />
      </div>
      <div id="info-wrapper">
        <p>Brand: <span id="details-brand">${item.brand}</span></p>
        <p>Model: <span id="details-model">${item.model}</span></p>
        <p>Release date: <span id="details-release">${item.release}</span></p>
        <p>Designer: <span id="details-designer">${item.designer}</span></p>
        <p>Value: <span id="details-value">${item.value}</span></p>
      </div>

      <!--Edit and Delete are only for creator-->
      ${user && isLoggedInAndIsCreator(item) === "isCreator"
        ? html`<div id="action-buttons">
            <a href="/edit/${item._id}" id="edit-btn">Edit</a>
            <a @click=${onDelete} id="delete-btn">Delete</a>
          </div>`
        : nothing}
    </div>
  </section>`;

function isLoggedInAndIsCreator(bike) {
  const user = getUserData();

  if (user && user._id === bike._ownerId) {
    return "isCreator";
  }
  if (user) {
    return "isNotCreator";
  }
  return "isNotLoggedIn";
}

export async function detailsView(context) {
  const user = getUserData();
  const bikeID = context.params.id;
  const bike = await motorbikesService.getBikeById(bikeID);

  context.render(detailsTemplate(user, bike, onDelete));

  async function onDelete() {
    const choice = confirm("Are you sure you want to delete this bike?");
    if (choice) {
      await motorbikesService.deleteById(bikeID);
      context.page.redirect("/catalog");
    }
  }
}
