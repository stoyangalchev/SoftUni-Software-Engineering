import { html } from "../../node_modules/lit-html/lit-html.js";

import { login, register } from "../api/api.js";

const loginTamplate = (onSubmit) =>
  html`<section id="login">
    <form id="login-form" @submit=${onSubmit}>
      <div class="container">
        <h1>Login</h1>
        <label for="email">Email</label>
        <input id="email" placeholder="Enter Email" name="email" type="text" />
        <label for="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter Password"
          name="password"
        />
        <input type="submit" class="registerbtn button" value="Login" />
        <div class="container signin">
          <p>Dont have an account?<a href="/register">Sign up</a>.</p>
        </div>
      </div>
    </form>
  </section>`;

export async function loginPage(ctx) {
  ctx.render(loginTamplate(onSubmit));

  async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");

    if (!password || !email) {
      return alert("All fields are required!");
    }

    await login(email, password);
    event.target.reset();
    ctx.setUserNav();
      document.querySelector(".active").style.display = "none";
    ctx.page.redirect("/home");
  }
}

const registerTamplate = (onSubmit) =>
  html`<section id="register">
    <form id="register-form" @submit=${onSubmit}>
      <div class="container">
        <h1>Register</h1>
        <label for="username">Username</label>
        <input
          id="username"
          type="text"
          placeholder="Enter Username"
          name="username"
        />
        <label for="email">Email</label>
        <input id="email" type="text" placeholder="Enter Email" name="email" />
        <label for="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter Password"
          name="password"
        />
        <label for="repeatPass">Repeat Password</label>
        <input
          id="repeatPass"
          type="password"
          placeholder="Repeat Password"
          name="repeatPass"
        />
        <div class="gender">
          <input type="radio" name="gender" id="female" value="female" />
          <label for="female">Female</label>
          <input type="radio" name="gender" id="male" value="male" checked />
          <label for="male">Male</label>
        </div>
        <input type="submit" class="registerbtn button" value="Register" />
        <div class="container signin">
          <p>Already have an account?<a href="/login">Sign in</a>.</p>
        </div>
      </div>
    </form>
  </section>`;

export async function registerPage(ctx) {
  ctx.render(registerTamplate(onSubmit));

  async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const username = formData.get("username");
    const password = formData.get("password");
    const repeatPass = formData.get("repeatPass");
    const gender = formData.get("gender");

    if (!password || !email || !username || !repeatPass || !gender) {
      return alert("All fields are required!");
    } else if (password != repeatPass) {
      return alert("Password don't match");
    }

    await register(email, password);
    event.target.reset();
    ctx.setUserNav();
    document.querySelector(".active").style.display = "none";
    ctx.page.redirect("/home");
  }
}
