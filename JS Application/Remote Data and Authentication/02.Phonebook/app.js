const url = "http://localhost:3030/jsonstore/phonebook";
const ulphonebookGetEl = document.getElementById("phonebook");
const loadBtnGetEl = document.getElementById("btnLoad");
const personInputGetEl = document.getElementById("person");
const phoneInputGetEl = document.getElementById("phone");
const createBtnGetEl = document.getElementById("btnCreate");

async function attachEvents() {
  loadBtnGetEl.addEventListener("click", load);
  createBtnGetEl.addEventListener("click", create);
}

async function load() {
  ulphonebookGetEl.textContent = "";
  const response = await fetch(url);
  const data = await response.json();

  Object.entries(data).forEach(([k, v]) => {
    let createLiEl = document.createElement("li");
    createLiEl.textContent = `${v.person}: ${v.phone}`;
    let craeteDeleteBtn = document.createElement("button");
    craeteDeleteBtn.textContent = "Delete";
    ulphonebookGetEl.appendChild(createLiEl);
    createLiEl.appendChild(craeteDeleteBtn);

    craeteDeleteBtn.addEventListener("click", (e) => {
      e.preventDefault();

      fetch(url + `/${k}`, {
        method: "DELETE",
        "Content-Type": "application/json",
      }).then((data) => {
        createLiEl.remove();
        return data.json();
      });
    });
  });
}

async function create() {
  let bodysend = {
    person: personInputGetEl.value,
    phone: phoneInputGetEl.value,
  };
  if (bodysend.person == "" || bodysend.phone == "") {
    alert("You need to fill empty lines!!!");
    return;
  }
  const response = await fetch(url, {
    method: "POST",
    "Content-Type": "application/json",
    body: JSON.stringify(bodysend),
  });
  const data = await response.json();

  personInputGetEl.value = "";
  phoneInputGetEl.value = "";
  return data;
}

attachEvents();
