const url = `http://localhost:3030/jsonstore/advanced/dropdown`;
const select = document.getElementById("menu");

function loadOptions() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      Object.values(data).forEach((x) => {
        const option = document.createElement("option");
        option.value = x._id;
        option.textContent = x.text;
        select.appendChild(option);
      });
    })
    .catch((err) => console.log(err));
}
loadOptions();

function addItem() {}
const input = document.getElementById("itemText");

const btn = document.querySelector(
  "body > article > form > input[type=submit]:nth-child(3)"
);

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let bodyObject = {
    text: input.value,
  };

  select.innerHTML = "";
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyObject),
  })
    .then((res) => res.json())
    .then((data) => {
      const option = document.createElement("option");
      option.value = data._id;
      option.textContent = data.text;
      select.appendChild(option);
      input.value = "";
    })
    .then(loadOptions())

    .catch((err) => console.log(err));
});
