import { get } from "../services/requester.js";
import { userService } from "../services/userService.js";
import { updateNav } from "../app.js";
import page from "./../../node_modules/page/page.mjs";

export async function logoutPage() {
  await get("/users/logout"); //TO VERIFY
  userService.removeUserData();

  updateNav();
  page.redirect("/");
}
