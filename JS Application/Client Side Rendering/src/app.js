import { navbarTemplate } from "./templates/navbar.js";
import { getContacts } from "./api.js";

const rootElement = document.querySelector("#root");

const navBarTemplateResult = navbarTemplate();

render(navBarTemplateResult, rootElement);

const contacts = await getContacts();


function render(html, parent) {
  const template = document.createElement("template");
  template.innerHTML = html;
console.log("yee");
  parent.appendChild(template.content);
}
