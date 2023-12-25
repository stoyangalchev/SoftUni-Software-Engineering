import page from "./../../node_modules/page/page.mjs";
import { html, render } from "./../../node_modules/lit-html/lit-html.js";
import { userService } from "../services/userService.js";
import { post } from "../services/requester.js";
import { updateNav } from "../app.js";
const url = "/users/login";//Url change to login

function loginViewTemplate() {
  return html`
    <section id="login">
      <div class="form">
        <img class="border" src="./images/border.png" alt="" />
        <h2>Login</h2>
        <form class="login-form" @submit=${onLogin}>
          <input type="text" name="email" id="email" placeholder="email" />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
          <button type="submit">login</button>
          <p class="message">
            Not registered? <a href="/register">Create an account</a>
          </p>
        </form>
        <img class="border" src="./images/border.png" alt="" />
      </div>
    </section>
  `;
}   //Login page template Add Submit event @submit=${onLogin}
async function onLogin(e) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const email = formData.get("email");
  const password = formData.get("password");
  console.log(email, password);
  if (!email || !password) {
    return alert("All fields are required");
  }
  try {
    const response = await post(url, { email, password });
    userService.setUserData(response);
    updateNav();
    page.redirect("/");
  } catch (error) {
    return alert(error.message);
  }
}
export function loginView() {
  return render(loginViewTemplate(), document.querySelector("main"));
}

/*
{ "email": "peter@abv.bg", "password": "123456" }
{ "email": "john@abv.bg", "password": "123456" }
*/
