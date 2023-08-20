function addItem() {
  let inputElement = document.getElementById("newItemText");
  let createLiElement = document.createElement("li");
  createLiElement.textContent = inputElement.value;
  document.getElementById("items").appendChild(createLiElement);
  inputElement.value = "";
}
