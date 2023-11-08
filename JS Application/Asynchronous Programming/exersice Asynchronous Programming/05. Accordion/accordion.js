window.addEventListener("load", solution);
function solution() {
  let url = "http://localhost:3030/jsonstore/advanced/articles/list";
  let mainGetEl = document.getElementById("main");

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.ok == false) {
        throw new Error(data.status);
      }
    

      Object.values(data).forEach((el) => {
        mainGetEl.appendChild(createElements(el));
      });
    })
    .catch((error) => console.log(error));
}

function createElements(datas) {
  let divel = document.createElement("div");
  divel.classList.add("accordion");
  let divHead = document.createElement("div");
  divHead.classList.add("head");
  let spanEl = document.createElement("span");
  spanEl.textContent = datas.title;
  let buttonEl = document.createElement("button");
  buttonEl.classList.add("button");
  buttonEl.id = datas._id;
  buttonEl.textContent = "More";
  divHead.appendChild(spanEl);
  divHead.appendChild(buttonEl);
  divel.appendChild(divHead);

  let divExtra = document.createElement("div");
  divExtra.classList.add("extra");
  let pEl = document.createElement("p");
  pEl.textContent = datas.content;
  divExtra.appendChild(pEl);
  divel.appendChild(divExtra);

  buttonEl.addEventListener("click", (e) => {
    let currentButton = e.target;
    let currentDiv = currentButton.parentNode.parentNode;
    let currentExtra = currentDiv.querySelector(".extra");
    if (currentExtra.style.display == "block") {
      currentExtra.style.display = "none";
      currentButton.textContent = "More";
    } else {
      currentExtra.style.display = "block";
      currentButton.textContent = "Less";
    }

    fetch(
      `http://localhost:3030/jsonstore/advanced/articles/details/${datas._id}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.ok == false) {
          throw new Error(data.status);
        }
        pEl.textContent = data.content;
      })
      .catch((error) => console.log(error));
  });

  return divel;
}
