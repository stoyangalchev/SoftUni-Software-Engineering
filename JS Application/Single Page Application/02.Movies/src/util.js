const views = [...document.querySelectorAll(".view-section")];

function hideAll() {
  views.forEach((section) => {
    section.style.display = "none";
  });
}

export function showView(section) {
  hideAll();
  section.style.display = "block";
}

export function updateNav() {
  
  const user = sessionStorage.getItem("user");
  const msgContainer = document.querySelector("#welcome-msg");

  if (user) {
    const { email } = JSON.parse(user);
    msgContainer.textContent = `Welcome, ${email}`;
    document
      .querySelectorAll(".user")
      .forEach((x) => (x.style.display = "block"));
    document
      .querySelectorAll(".guest")
      .forEach((x) => (x.style.display = "none"));
  } else {
    msgContainer.textContent = "";
    document
      .querySelectorAll(".user")
      .forEach((x) => (x.style.display = "none"));
    document
      .querySelectorAll(".guest")
      .forEach((x) => (x.style.display = "block"));
  }
}
