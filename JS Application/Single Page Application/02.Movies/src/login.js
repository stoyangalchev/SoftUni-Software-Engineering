import { homePage } from "./home.js";
import { showView } from "./util.js";
import { updateNav } from "./util.js";

const loginSection = document.querySelector("#form-login");
const form = loginSection.querySelector("form");
form.addEventListener("submit", onLoginSubmit);
export function loginPage() {
  showView(loginSection);
}
async function onLoginSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);

  const email = formData.get("email");
  const password = formData.get("password");

  await login(email, password);
  form.reset();
  updateNav();
  homePage();
}

async function login(email, password) {
  try {
    const response = await fetch("http://localhost:3030/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok == false) {
      const error = await response.json();
      throw new Error(error.message);
    }

    const user = await response.json();
    sessionStorage.setItem("user", JSON.stringify(user));
  } catch (error) {
    alert(error.message);
    throw error;
  }
}
