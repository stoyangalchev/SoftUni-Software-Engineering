import page from "../../node_modules/page/page.mjs";
import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { del } from "../services/requester.js";
import { userService } from "../services/userService.js";
const url = "/data/characters/";

export async function deleteView(ctx) {
  const id = ctx.params.id;
  console.log("delete");
  if (confirm("Are you sure you want to delete this character ?")) {
    await del(url + id);
    page.redirect("/dashboard");
  }
}
