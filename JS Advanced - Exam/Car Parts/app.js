window.addEventListener("load", solve);

function solve() {
  let carmodelGetEl = document.getElementById("car-model");
  let caryearGetEl = document.getElementById("car-year");
  let partnameGetEl = document.getElementById("part-name");
  let partnumberGetEl = document.getElementById("part-number");
  let conditionGetEl = document.getElementById("condition");

  let nextbtnGetEl = document.getElementById("next-btn");
  //Parent INfo LISt
  let infolistGetEl = document.getElementsByClassName("info-list")[0];
  //Parent confirm-list
  let confirmlistGetEl = document.getElementsByClassName("confirm-list")[0];

  //complete IMG
  let completeimgGetEl = document.getElementById("complete-img");
  //Complete text
  let completetextGetEl = document.getElementById("complete-text");
  completetextGetEl.textContent = "";
  nextbtnGetEl.addEventListener("click", (e) => {
    e.preventDefault();

    if (
      carmodelGetEl.value == "" ||
      caryearGetEl.value == "" ||
      partnameGetEl.value == "" ||
      partnumberGetEl.value == "" ||
      conditionGetEl.value == "" ||
      Number(caryearGetEl.value) <= 1980 ||
      Number(caryearGetEl.value) >= 2023
    ) {
      return;
    }
    completetextGetEl.textContent = "";
    completeimgGetEl.style.visibility = "hidden";

    let carmodel = carmodelGetEl.value;
    let caryear = caryearGetEl.value;
    let partname = partnameGetEl.value;
    let partnumber = partnumberGetEl.value;
    let condition = conditionGetEl.value;

    carmodelGetEl.value = "";
    caryearGetEl.value = "";
    partnameGetEl.value = "";
    partnumberGetEl.value = "";
    conditionGetEl.value = "";

    nextbtnGetEl.disabled = true;
    let liCreateEl = document.createElement("li");
    liCreateEl.classList.add("part-content");
    let articleCreateEl = document.createElement("article");
    let p1CreateEl = document.createElement("p");
    p1CreateEl.textContent = `Car Model: ${carmodel}`;
    let p2CreateEl = document.createElement("p");
    p2CreateEl.textContent = `Car Year: ${caryear}`;
    let p3CreateEl = document.createElement("p");
    p3CreateEl.textContent = `Part Name: ${partname}`;
    let p4CreateEl = document.createElement("p");
    p4CreateEl.textContent = `Part Number: ${partnumber}`;
    let p5CreateEl = document.createElement("p");
    p5CreateEl.textContent = `Condition: ${condition}`;
    //Edit btn
    let editButtonCreateEl = document.createElement("button");
    editButtonCreateEl.textContent = "Edit";
    editButtonCreateEl.classList.add("edit-btn");
    //Continue btn
    let continueButtonCreateEl = document.createElement("button");
    continueButtonCreateEl.textContent = "Continue";
    continueButtonCreateEl.classList.add("continue-btn");

    infolistGetEl.appendChild(liCreateEl);
    liCreateEl.appendChild(articleCreateEl);
    articleCreateEl.appendChild(p1CreateEl);
    articleCreateEl.appendChild(p2CreateEl);
    articleCreateEl.appendChild(p3CreateEl);
    articleCreateEl.appendChild(p4CreateEl);
    articleCreateEl.appendChild(p5CreateEl);
    liCreateEl.appendChild(editButtonCreateEl);
    liCreateEl.appendChild(continueButtonCreateEl);

    editButtonCreateEl.addEventListener("click", (e) => {
      e.preventDefault();

      carmodelGetEl.value = carmodel;
      caryearGetEl.value = caryear;
      partnameGetEl.value = partname;
      partnumberGetEl.value = partnumber;
      conditionGetEl.value = condition;

      nextbtnGetEl.disabled = false;
      liCreateEl.remove();
    });

    continueButtonCreateEl.addEventListener("click", (e) => {
      e.preventDefault();
      confirmlistGetEl.appendChild(liCreateEl);
      editButtonCreateEl.remove();
      continueButtonCreateEl.remove();

      let confirmButtonCreateEl = document.createElement("button");
      confirmButtonCreateEl.textContent = "Confirm";
      confirmButtonCreateEl.classList.add("confirm-btn");

      let cancelButtonCreateEl = document.createElement("button");
      cancelButtonCreateEl.textContent = "Cancel";
      cancelButtonCreateEl.classList.add("cancel-btn");
      liCreateEl.appendChild(confirmButtonCreateEl);
      liCreateEl.appendChild(cancelButtonCreateEl);

      confirmButtonCreateEl.addEventListener("click", (e) => {
        e.preventDefault();
        liCreateEl.remove();
        nextbtnGetEl.disabled = false;
        completeimgGetEl.style.visibility = "visible";
        completetextGetEl.textContent = "Part is Ordered!";
      });

      cancelButtonCreateEl.addEventListener("click", (e) => {
        e.preventDefault();
        liCreateEl.remove();
        nextbtnGetEl.disabled = false;
      });
    });
  });
}
