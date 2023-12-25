import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { getUserData } from "../utils.js";

const root = document.querySelector("#main-element");
const header = document.querySelector(`header`);

const navigationView = (user) => html`
  <a id="logo" href="/"
    ><img id="logo-car" src="./images/car-logo.png" alt="img"
  /></a>
  <nav>
    <div>
      <a href="/catalog">Our Cars</a>
      <a href="/search">Search</a>
    </div>

    ${user
      ? html`
          <!-- Logged-in users -->
          <div class="user">
            <a href="/create">Add Your Car</a>
            <a href="/logout">Logout</a>
          </div>
        `
      : html`
          <!-- Guest users -->
          <div class="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </div>
        `}
  </nav>
`;

function contextRender(content) {
  const user = getUserData();
  render(navigationView(user), header);
  render(content, root);
}

export function addRender(context, next) {
  context.render = contextRender;
  next();
}
