function search() {
  let inputElement = document.getElementById("searchText").value;
  let townsElement = Array.from(document.querySelectorAll("ul li"));
  let match = document.getElementById("result");
  let count = 0;

  for (let town of townsElement) {
    if (inputElement == "") {
      break;
    }
    if (town.textContent.includes(inputElement)) {
      town.style.fontWeight = "bold";
      town.style.textDecoration = "underline";
      count++;
    } else {
      town.style.fontWeight = "none";
      town.style.textDecoration = "none";
    }
  }
  match.textContent = `${count} matches found`;
}
