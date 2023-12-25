import page from "../../node_modules/page/page.mjs";
import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { userService } from "../services/userService.js";
import { post } from "../services/requester.js";
import { updateNav } from "../app.js";
const url = "/users/register";

function registerView() {
  return html`
    <section id="register">
      <div class="form">
        <img class="border" src="./images/border.png" alt="" />
        <h2>Register</h2>
        <form class="register-form" @submit=${onRegister}>
          <input
            type="text"
            name="email"
            id="register-email"
            placeholder="email"
          />
          <input
            type="password"
            name="password"
            id="register-password"
            placeholder="password"
          />
          <input
            type="password"
            name="re-password"
            id="repeat-password"
            placeholder="repeat password"
          />
          <button type="submit">register</button>
          <p class="message">Already registered? <a href="/login">Login</a></p>
        </form>
        <img class="border" src="./images/border.png" alt="" />
      </div>
    </section>
  `;
}

async function onRegister(e) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const email = formData.get("email");
  const password = formData.get("password");
  const rePass = formData.get("re-password");
  if (!email || !password || !rePass) {
    return alert("All fields are required");
  } else if (rePass !== password) {
    return alert("The passwords are different");
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
export function registerPage() {
  return render(registerView(), document.querySelector("main"));
}
