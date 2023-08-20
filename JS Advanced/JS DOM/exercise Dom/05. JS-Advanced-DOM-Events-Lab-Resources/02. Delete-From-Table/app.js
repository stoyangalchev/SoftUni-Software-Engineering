function deleteByEmail() {
  let inputElememnt = document.getElementsByName("email")[0];
  let tableRowwElements = Array.from(document.querySelectorAll("tbody tr"));
  let resultElement = document.getElementById("result");

  for (let el of tableRowwElements) {
    if (!el.textContent.includes(inputElememnt.value)) {
      resultElement.textContent = "Not found.";
    }
  }
  for (let el of tableRowwElements) {
    if (el.textContent.includes(inputElememnt.value)) {
      el.textContent = "";
      resultElement.textContent = "Deleted.";
    }
  }

  inputElememnt.value = "";
}
