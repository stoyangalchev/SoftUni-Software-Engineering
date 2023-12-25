import page from "./../../node_modules/page/page.mjs";
import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { get } from "./../services/requester.js";
import { userService } from "../services/userService.js";
const url = "/data/characters/";

function detailsTemplate(data) {
  // console.log(data._id);

  async function getLikes() {
    let id = data._id;
  
    const url = `/data/useful?where=characterId%3D%22${id}%22&distinct=_ownerId&count`;
    const response = await get(url);
 console.log(response);
    return Number(response);
  }
  return html` <section id="details">
    <div id="details-wrapper">
      <img id="details-img" src="${data.imageUrl}" alt="example1" />
      <div>
        <p id="details-category">${data.category}</p>
        <div id="info-wrapper">
          <div id="details-description">
            <p id="description">${data.description}</p>
            <p id="more-info">${data.moreInfo}</p>
          </div>
        </div>
        <h3>Is This Useful:<span id="likes">${getLikes()}</span></h3>
        <div id="action-buttons">${checker(data)}</div>
      </div>
    </div>
  </section>`;
}
function checker(data) {
  const userData = userService.getUserData();
  if (userData) {
   
    if (userData._id == data._ownerId) {
      return html`<a href="/edit/${data._id}" id="edit-btn">Edit</a>
        <a href="/delete/${data._id}" id="delete-btn">Delete</a>`;
    }
    return html`<a href="" id="like-btn">Like</a>`;
  }
}

export async function detailsView(ctx) {
  const id = ctx.params.id;
  // console.log(id);
  const data = await get(url + id);
    // console.log(data);
  render(detailsTemplate(data), document.querySelector("main"));
}
///////////\



