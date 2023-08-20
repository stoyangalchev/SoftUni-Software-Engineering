function addItem() {
  let newItemTextElement = document.getElementById("newItemText");
  let newItemValue = document.getElementById("newItemValue");

  let fullName = newItemTextElement.value + " " + newItemValue.value;

  let optionElement = document.createElement("option");
  optionElement.textContent = fullName;

  let selectMenu = document.getElementById("menu");
  selectMenu.appendChild(optionElement);

  newItemTextElement.value = "";
  newItemValue.value = "";
}
