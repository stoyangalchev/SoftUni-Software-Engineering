import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { getUserData } from '../utils.js';

const main = document.querySelector('#main');
const header = document.querySelector(`#header`);

const navigationView = (user) => html`
    <a id="logo" href="/"
      ><img id="logo-img" src="./images/logo.png" alt=""
    /></a>

    <nav>
      <div>
        <a href="/catalog">Fruits</a>
        <a href="/search">Search</a>
      </div>

      ${
        user
          ? html`
              <div class="user">
                <a href="/create">Add Fruit</a>
                <a href="/logout">Logout</a>
              </div>
            `
          : html`
              <div class="guest">
                <a href="/login">Login</a>
                <a href="/register">Register</a>
              </div>
            `
      }
    </nav>
  </nav>
`;

function contextRender(content) {
	const user = getUserData();
	render(navigationView(user), header);
	render(content, main);
}

export function addRender(context, next) {
	context.render = contextRender;
	next();
}
