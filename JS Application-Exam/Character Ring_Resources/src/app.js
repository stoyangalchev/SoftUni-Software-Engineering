console.log("Hello World");
import page from "./../node_modules/page/page.mjs";
import { render, html } from "./../node_modules/lit-html/lit-html.js";
import { userService } from "./services/userService.js";

import { homeView } from "./views/homeView.js";
import { loginView } from "./views/loginView.js";
import { registerPage } from "./views/registerView.js";
import { logoutPage } from "./views/logout.js";
import { dashboardView } from "./views/dashboardView.js";
import { create } from "./views/createView.js";

import { detailsView } from "./views/detailsView.js";
import { editView } from "./views/editView.js";
import { deleteView } from "./views/deleteView.js";

page.start(); //Start the page
updateNav(); //Update the navigation bar
page.redirect("/"); //Redirect to home page Allways

page("/", homeView); //Home page
page("/login", loginView); //Login page
page("/register", registerPage); //Register page
page("/logout", logoutPage ); //  Logout page
page("/dashboard", dashboardView); //    Dashboard page
page("/create", create); //    Create page

page("/details/:id", detailsView); //  Details page
page("/edit/:id", editView); //  Edit page
page("/delete/:id", deleteView); //  Delete page

export function updateNav() {
  const userData = userService.getUserData();
  if (userData) {
    document.querySelector(".user").style.display = "inline-block";
    document.querySelector(".guest").style.display = "none";
  } else {
    document.querySelector(".user").style.display = "none";
    document.querySelector(".guest").style.display = "inline-block";
  }
}
