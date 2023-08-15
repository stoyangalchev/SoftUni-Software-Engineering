function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);
  let inputField = document.getElementById("searchField");
  let tableRow = document.querySelectorAll("tbody tr");

  if (inputField === null || tableRow === null) {
    throw new Error("Missing HTML elements!");
  }
  function onClick() {
    for (let tr of tableRow) {
      tr.classList.remove("select");
    }
    if (inputField.value == "") {
      return "";
    }
    for (let tr of tableRow) {
      if (tr.textContent.includes(inputField.value)) {
        tr.classList.add("select");
      }
    }
    inputField.value = "";
  }
}
