async function students() {
  let url = "http://localhost:3030/jsonstore/collections/students";

  const tableBodyGetEl = document.querySelector("#results > tbody");
  const inputsClassGetEl = document.querySelectorAll(".inputs input");
  const titleInputEl=document.getElementsByName("title")[0]
  console.log(titleInputEl);
  pageIsLoaded(url, tableBodyGetEl);

  let formGetEl = document.getElementById("form");

  formGetEl.addEventListener("submit", (e) => {
    e.preventDefault();

    let formdata = new FormData(formGetEl);

    let firstNameInput = formdata.get("firstName");
    let lastNameInput = formdata.get("lastName");
    let facultyNumberInput = formdata.get("facultyNumber");
    let gradeInput = formdata.get("grade");
    if (
      firstNameInput == "" ||
      lastNameInput == "" ||
      facultyNumberInput == "" ||
      gradeInput == "" ||
      isNaN(gradeInput)
    ) {
      return;
    }
    let tableRowCrEl = document.createElement("tr");

    let firstNameCell = tableRowCrEl.insertCell();
    firstNameCell.textContent = firstNameInput;

    let lastNameCell = tableRowCrEl.insertCell();
    lastNameCell.textContent = lastNameInput;

    let facultyNumberCell = tableRowCrEl.insertCell();
    facultyNumberCell.textContent = facultyNumberInput;

    let gradeCell = tableRowCrEl.insertCell();
    gradeCell.textContent = Number(gradeInput);

    tableBodyGetEl.appendChild(tableRowCrEl);

    Array.from(inputsClassGetEl).forEach((el) => {
      el.value = "";
    });
  });
}

async function pageIsLoaded(url, tableBodyGetEl) {
  const response = await fetch(url);
  const data = await response.json();
  Object.values(data).forEach((el) => {
    let firstName = el.firstName;
    let lastName = el.lastName;
    let facultyNumber = el.facultyNumber;
    let grade = Number(el.grade);

    let tableRowCrEl = document.createElement("tr");

    let firstNameCell = tableRowCrEl.insertCell();
    firstNameCell.textContent = firstName;

    let lastNameCell = tableRowCrEl.insertCell();
    lastNameCell.textContent = lastName;

    let facultyNumberCell = tableRowCrEl.insertCell();
    facultyNumberCell.textContent = facultyNumber;

    let gradeCell = tableRowCrEl.insertCell();
    gradeCell.textContent = Number(grade);

    tableBodyGetEl.appendChild(tableRowCrEl);
  });
}

students();
