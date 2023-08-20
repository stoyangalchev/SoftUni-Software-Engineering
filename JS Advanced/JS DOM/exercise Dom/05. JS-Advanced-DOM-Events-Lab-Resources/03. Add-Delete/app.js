function addItem() {
  let itemsElement = document.getElementById("items");
  let inputelement = document.getElementById("newItemText");

  let createdLiElemtent = document.createElement("li");
  createdLiElemtent.textContent = inputelement.value;
  itemsElement.appendChild(createdLiElemtent);

  let deleteElement = document.createElement("a");
  deleteElement.href = "#";
  deleteElement.textContent = "[Delete]";

  deleteElement.addEventListener("click", (e) => {
    e.currentTarget.parentElement.remove();
  });

  createdLiElemtent.appendChild(deleteElement);
}
