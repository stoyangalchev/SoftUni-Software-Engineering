window.addEventListener("load", solve);

function solve() {
  const firstName = document.querySelector("#first-name");
  const lastName = document.querySelector("#last-name");
  const age = document.querySelector("#age");
  const genderSelect = document.querySelector("#genderSelect");
  const dishDescription = document.querySelector("#task");
  const submitBtn = document.querySelector("#form-btn");
  const ulInProgress = document.querySelector("#in-progress");
  const ulFinished = document.querySelector("#finished");
  const spanProgressCount = document.querySelector("#progress-count");
  const clearBtn = document.querySelector("#clear-btn");
  let counter = 0;

  submitBtn.addEventListener("click", onSubmit);
  const inputFields = [firstName, lastName, age, genderSelect, dishDescription];

  function onSubmit(e) {
    e.preventDefault();
    const inputValues = ([
      firstNameValue,
      lastNameValue,
      ageValue,
      genderSelectValue,
      dishDescriptionValue,
    ] = inputFields.map((f) => f.value));
    let isInvalid = inputValues.some((v) => v === "") ? "invalid" : "";
    if (isInvalid) {
      return;
    }

    const liEachLine = createElement("li", "", "each-line");
    const article = createElement("article", "", "");
    const h4 = createElement("h4", `${firstNameValue} ${lastNameValue}`, "");
    const pGender = createElement("p", `${genderSelectValue}, ${ageValue}`, "");
    const pDishInfo = createElement(
      "p",
      `Dish description: ${dishDescriptionValue}`,
      ""
    );
    const editBtn = createElement("button", "Edit", "edit-btn");
    const completeBtn = createElement(
      "button",
      "Mark as complete",
      "complete-btn"
    );
    editBtn.addEventListener("click", editFn);
    completeBtn.addEventListener("click", completeFn);
    article.appendChild(h4);
    article.appendChild(pGender);
    article.appendChild(pDishInfo);
    liEachLine.appendChild(article);
    liEachLine.appendChild(editBtn);
    liEachLine.appendChild(completeBtn);
    counter++;
    ulInProgress.appendChild(liEachLine);
    spanProgressCount.textContent = counter;

    inputFields.forEach((f) => (f.value = ""));
    clearBtn.addEventListener("click", clearFn);

    function editFn() {
      inputFields.forEach((f, i) => (f.value = inputValues[i]));
      counter--;
      spanProgressCount.textContent = counter;
      liEachLine.remove();
    }
    function completeFn() {
      editBtn.remove();
      completeBtn.remove();
      ulFinished.appendChild(liEachLine);
      counter--;
      spanProgressCount.textContent = counter;
    }
    function clearFn() {
      liEachLine.remove();
    }
  }

  function createElement(type, content, className) {
    let el = document.createElement(type);
    className ? el.classList.add(className) : "";
    content ? (el.textContent = content) : "";
    return el;
  }
}
// function solve() {
//   let firstnameGetEl = document.getElementById("first-name");
//   let lastnameGetEl = document.getElementById("last-name");
//   let ageGetEl = document.getElementById("age");
//   let genderSelectGetEl = document.getElementById("genderSelect");
//   let taskGetEl = document.getElementById("task");
//   let submitButton = document.getElementById("form-btn");
//   // parent INprogres
//   let inprogressGetEl = document.getElementById("in-progress");
//   //parent counter
//   let progresscountGetEl = document.getElementById("progress-count");
//   //Parent id finished
//   let finishedGetEl = document.getElementById("finished");
//   //clear
//   let clearBtnGetEl = document.getElementById("clear-btn");
//   let sum = 0;
//   submitButton.addEventListener("click", (e) => {
//     e.preventDefault();
//     if (
//       firstnameGetEl.value == "" ||
//       lastnameGetEl.value == "" ||
//       ageGetEl.value == "" ||
//       genderSelectGetEl.value == "" ||
//       taskGetEl.value == ""
//     ) {
//       return;
//     }
//     const firstName = firstnameGetEl.value;
//     const lastName = lastnameGetEl.value;
//     const age = ageGetEl.value;
//     const gender = genderSelectGetEl.value;
//     const task = taskGetEl.value;
//     console.log(firstName); ////
//     let liClassEachLIstCreateEl = document.createElement("li");

//     let articleCreateEl = document.createElement("article");

//     let h4CreateEl = document.createElement("h4");
//     h4CreateEl.textContent = `${firstName} ${lastName}`;
//     let p1CreateEl = document.createElement("p");
//     p1CreateEl.textContent = `${gender}, ${age}`;
//     let p2CreateEl = document.createElement("p");
//     p2CreateEl.textContent = `Dish description: ${task}`;
//     let editBtnCreateEl = document.createElement("button");
//     editBtnCreateEl.classList.add("edit-btn");
//     editBtnCreateEl.textContent = "Edit";
//     ///log
//     console.log(h4CreateEl.textContent);
//     let markAsCompleteBtn = document.createElement("button");
//     markAsCompleteBtn.classList.add("complete-btn");
//     markAsCompleteBtn.textContent = "Mark as complete";

//     inprogressGetEl.appendChild(liClassEachLIstCreateEl);
//     liClassEachLIstCreateEl.appendChild(articleCreateEl);
//     articleCreateEl.appendChild(h4CreateEl);
//     articleCreateEl.appendChild(p1CreateEl);
//     articleCreateEl.appendChild(p2CreateEl);
//     liClassEachLIstCreateEl.appendChild(editBtnCreateEl);
//     liClassEachLIstCreateEl.appendChild(markAsCompleteBtn);

//     sum += 1;
//     progresscountGetEl.textContent = sum;

//     console.log(progresscountGetEl.textContent); ///
//     firstnameGetEl.value = "";
//     lastnameGetEl.value = "";
//     ageGetEl.value = "";
//     genderSelectGetEl.value = "";
//     taskGetEl.value = "";

//     editBtnCreateEl.addEventListener("click", (e) => {
//       e.preventDefault();
//       sum -= 1;
//       progresscountGetEl.textContent = sum;

//       inprogressGetEl.removeChild(liClassEachLIstCreateEl);

//       firstnameGetEl.value = firstName;
//       lastnameGetEl.value = lastName;
//       ageGetEl.value = age;
//       genderSelectGetEl.value = gender;
//       taskGetEl.value = task;
//     });

//     markAsCompleteBtn.addEventListener("click", (e) => {
//       e.preventDefault();
//       sum -= 1;
//       progresscountGetEl.textContent = sum;

//       liClassEachLIstCreateEl.removeChild(editBtnCreateEl);
//       liClassEachLIstCreateEl.removeChild(markAsCompleteBtn);
//       finishedGetEl.appendChild(liClassEachLIstCreateEl);
//     });
//     clearBtnGetEl.addEventListener("click", (e) => {
//       e.preventDefault();
//       while (finishedGetEl.firstChild) {
//         finishedGetEl.removeChild(finishedGetEl.firstChild);
//       }
//     });
//   });
// }
