import { html, render } from "../node_modules/lit-html/lit-html.js";
import { createLi } from "./template.js";

const inputField = document.getElementById("towns");

const btnLoadTowns = document.getElementById("btnLoadTowns");

const root = document.getElementById("root");

btnLoadTowns.addEventListener("click", (e) => {
  e.preventDefault();
  root.innerHTML = "";

  const towns = inputField.value.split(", "); //['Sofia', 'Americ']
  const ul = document.createElement("ul");
  root.appendChild(ul);

  towns.forEach((town) => {
    ul.appendChild(createLi(town));
  });
});
