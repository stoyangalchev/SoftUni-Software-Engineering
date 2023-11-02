onload = loadRecipes();

function loadRecipes() {
  console.log("ss");
  let url = "http://localhost:3030/jsonstore/cookbook/recipes";

  fetch(url)
    .then(handlerRespons)

    .then(handlerData)

    .catch(handleError);
}

function handlerRespons(response) {
  if (response.ok == false && response.status != 200) {
    throw new Error(`Error: ${response.status} ${response.statusText}`);
  }
  return response.json();
}

function handlerData(data) {
  console.log(data);
  let main = document.querySelector("body > main");
  for (let [k, v] of Object.entries(data)) {
    let articleCreateEl = document.createElement("article");
    articleCreateEl.classList.add("preview");
    let div1CreateEl = document.createElement("div");
    div1CreateEl.classList.add("title");
    let h2CreateEl = document.createElement("h2");
    h2CreateEl.textContent = v.name;
    let div2CreateEl = document.createElement("div");
    div2CreateEl.classList.add("small");
    let imgCreateEl = document.createElement("img");
    imgCreateEl.setAttribute("src", `${v.img}`);

    articleCreateEl.appendChild(div1CreateEl);
    div1CreateEl.appendChild(h2CreateEl);
    articleCreateEl.appendChild(div2CreateEl);
    div2CreateEl.appendChild(imgCreateEl);
    main.appendChild(articleCreateEl);

    articleCreateEl.addEventListener("click", (e) => {
      let clicked = e.currentTarget.querySelector(".title > h2").textContent;
      let image = e.currentTarget.querySelector(".small > img ");

      const url = "http://localhost:3030/jsonstore/cookbook/details/";
      fetch(url)
        .then(function (request) {
          return request.json();
        })
        .then((d) => {
          for (let [k, v] of Object.entries(d)) {
            if (clicked == v.name) {
              let articleCreateEls = document.createElement("article");
              articleCreateEls.classList.add("preview");
              let h2 = document.createElement("h2");
              h2.textContent = clicked;
              let div1CreateEl = document.createElement("div");
              div1CreateEl.classList.add("band");

              let div2CreateEl = document.createElement("div");
              div2CreateEl.classList.add("thumb");
              let imgCreateEl = document.createElement("img");
              imgCreateEl = image;

              let div3CreateEl = document.createElement("div");
              div3CreateEl.classList.add("ingredients");
              let h3 = document.createElement("h3");
              h3.textContent = "Ingredients:";

              let ul = document.createElement("ul");
              for (let el of v.ingredients) {
                let liCreateEl = document.createElement("li");
                liCreateEl.textContent = el;
                ul.appendChild(liCreateEl);
              }
              let div4CreateEl = document.createElement("div");
              div4CreateEl.classList.add("description");
              let h32 = document.createElement("h3");
              h32.textContent = "Preparation:";
              let p = document.createElement("p");
              p.textContent =
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, quaerat.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur officia ipsam nulla vitae nobis reprehenderit pariatur aut dolor exercitationem impedit.";
              main.appendChild(articleCreateEls);
              articleCreateEls.appendChild(h2);
              articleCreateEls.appendChild(div1CreateEl);
              div1CreateEl.appendChild(div2CreateEl);
              div2CreateEl.appendChild(imgCreateEl);
              div1CreateEl.appendChild(div3CreateEl);
              div3CreateEl.appendChild(h3);
              div3CreateEl.appendChild(ul);
              div4CreateEl.appendChild(h32);
              div4CreateEl.appendChild(p);

              main.addEventListener("click", () => {
                location.reload();
              });
            }
          }
        });
    });
  }
}


function handleError(error) {
  console.log(error.message);
}