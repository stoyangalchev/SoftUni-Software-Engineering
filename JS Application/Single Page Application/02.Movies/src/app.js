// Main file for the application
import { homePage } from "./home.js";
import { loginPage } from "./login.js";
import { registerPage } from "./register.js";
import { createPage } from "./create.js";
import { updateNav } from "./util.js";
import { detailsPage } from "./details.js";

const routes = {
  "/": homePage,
  "/login": loginPage,
  "/logout": logout,
  "/register": registerPage,
  "/create": createPage,
  "/details": detailsPage,
  // "/edit": editPage,
};

document.querySelector("nav").addEventListener("click", onNavigate);
document
  .querySelector("#add-movie-button")
  .addEventListener("click", onNavigate);

function onNavigate(e) {
  if (e.target.tagName == "A" && e.target.href) {
    e.preventDefault();
    const url = new URL(e.target.href);
    const view = routes[url.pathname];
    if (typeof view == "function") {
      view();
    }
  }
}

function logout() {
  sessionStorage.removeItem("user");
  updateNav();
  console.log("logout");
}

homePage();

