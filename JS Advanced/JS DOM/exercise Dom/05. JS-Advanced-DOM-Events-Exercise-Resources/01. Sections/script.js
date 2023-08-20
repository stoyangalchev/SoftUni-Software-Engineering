function create(words) {
  let divParent = document.getElementById("content");
  words.forEach((element) => {
    let paragraph = document.createElement("p");
    paragraph.textContent = element;
    paragraph.style.display = "none";

    let currentDiv = document.createElement("div");

    currentDiv.appendChild(paragraph);
    currentDiv.addEventListener("click", function displayChildren() {
      paragraph.style.display = "inline";
    });

    divParent.appendChild(currentDiv);
  });
}
