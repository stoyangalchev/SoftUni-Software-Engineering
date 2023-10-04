function solve() {
  let firstNameGetElement = document.getElementById("fname");
  let lastNameGetElement = document.getElementById("lname");
  let emailGetElement = document.getElementById("email");
  let birthGetElement = document.getElementById("birth");
  let positionGetElement = document.getElementById("position");
  let salaryGetElement = document.getElementById("salary");

  let hireWorkerButtonGetElement = document.querySelector("#add-worker");

  let sum = 0;
  hireWorkerButtonGetElement.addEventListener("click", handler);
  function handler(e) {
    e.preventDefault();

    if (
      firstNameGetElement.value == "" ||
      lastNameGetElement.value == "" ||
      emailGetElement.value == "" ||
      birthGetElement.value == "" ||
      positionGetElement.value == "" ||
      salaryGetElement.value == ""
    ) {
      return;
    }
    //Parrent Element

    let tbodyGetElement = document.getElementById("tbody");

    let tableRowCreateEl = document.createElement("tr");

    // InputFields
    let fNameTDCreateEl = document.createElement("td");
    fNameTDCreateEl.textContent = firstNameGetElement.value;

    let lnameTDCreateEl = document.createElement("td");
    lnameTDCreateEl.textContent = lastNameGetElement.value;

    let emailTDCreateEl = document.createElement("td");
    emailTDCreateEl.textContent = emailGetElement.value;

    let birthTDCreateEl = document.createElement("td");
    birthTDCreateEl.textContent = birthGetElement.value;

    let positionTDCreateEl = document.createElement("td");
    positionTDCreateEl.textContent = positionGetElement.value;

    let salaryTDCreateEl = document.createElement("td");
    salaryTDCreateEl.textContent = salaryGetElement.value;

    //Buttons Fired Edit
    let tableDataForButtond = document.createElement("td");

    let firedButtonCreateEl = document.createElement("button");
    firedButtonCreateEl.classList.add("fired");
    firedButtonCreateEl.textContent = "Fired";

    let editButtonCreateEl = document.createElement("button");
    editButtonCreateEl.classList.add("edit");
    editButtonCreateEl.textContent = "Edit";

    tbodyGetElement.appendChild(tableRowCreateEl);
    tableRowCreateEl.appendChild(fNameTDCreateEl);
    tableRowCreateEl.appendChild(lnameTDCreateEl);
    tableRowCreateEl.appendChild(emailTDCreateEl);
    tableRowCreateEl.appendChild(birthTDCreateEl);
    tableRowCreateEl.appendChild(positionTDCreateEl);
    tableRowCreateEl.appendChild(salaryTDCreateEl);
    tableRowCreateEl.appendChild(tableDataForButtond);
    tableDataForButtond.appendChild(firedButtonCreateEl);
    tableDataForButtond.appendChild(editButtonCreateEl);

    //Your budget for salary must be:

    let spanSumGetElement = document.getElementById("sum");
    sum += Number(salaryTDCreateEl.textContent);
    spanSumGetElement.textContent = `${sum.toFixed(2)}`;

    firstNameGetElement.value = "";
    lastNameGetElement.value = "";
    emailGetElement.value = "";
    birthGetElement.value = "";
    positionGetElement.value = "";
    salaryGetElement.value = "";

    editButtonCreateEl.addEventListener("click", (e) => {
      e.preventDefault();

      firstNameGetElement.value = fNameTDCreateEl.textContent;
      lastNameGetElement.value = lnameTDCreateEl.textContent;
      emailGetElement.value = emailTDCreateEl.textContent;
      birthGetElement.value = birthTDCreateEl.textContent;
      positionGetElement.value = positionTDCreateEl.textContent;
      salaryGetElement.value = salaryTDCreateEl.textContent;

      let parent = e.currentTarget.parentNode.parentNode;
      let child = Number(parent.querySelector(":nth-child(6)").textContent);

      sum -= child;
      spanSumGetElement.textContent = `${sum.toFixed(2)}`;

      tbodyGetElement.removeChild(parent);
    });

    firedButtonCreateEl.addEventListener("click", (e) => {
      e.preventDefault();
      let parent = e.currentTarget.parentNode.parentNode;
      let child = Number(parent.querySelector(":nth-child(6)").textContent);

      sum -= child;
      spanSumGetElement.textContent = `${sum.toFixed(2)}`;

      tbodyGetElement.removeChild(parent);
    });
  }
}
solve();
