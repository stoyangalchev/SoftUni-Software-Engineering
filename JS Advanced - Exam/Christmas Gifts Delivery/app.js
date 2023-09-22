function solution() {
  let input = document.querySelector(".card input");
  let button = document.querySelector(".card button");
  let ulElement = document.querySelector(".card ul");

  button.addEventListener("click", (e) => {
    e.preventDefault();

    let liElement = document.createElement("li");
    liElement.setAttribute("class", "gift");
    liElement.textContent = input.value;

    let btnSendElement = document.createElement("button");
    btnSendElement.setAttribute("id", "sendButton");
    btnSendElement.textContent = "Send";
    let btnDiscardElement = document.createElement("button");
    btnDiscardElement.setAttribute("id", "discardButton");
    btnDiscardElement.textContent = "Discard";

    liElement.appendChild(btnSendElement);
    liElement.appendChild(btnDiscardElement);
    ulElement.appendChild(liElement);

    input.value = "";

    let allLiElements = Array.from(ulElement.querySelectorAll("li"));

    let sortedLiElements = allLiElements.sort((a, b) =>
      a.innerText.localeCompare(b.innerText)
    );

    while (ulElement.firstChild) {
      ulElement.firstChild.remove();
    }

    for (const element of sortedLiElements) {
      ulElement.appendChild(element);
    }

    btnSendElement.addEventListener("click", (e) => {
      e.preventDefault();

      let ulSentElement = document.querySelector(
        "body > div > section:nth-child(3) > ul"
      );

      e.target.remove();
      btnDiscardElement.remove();
      ulSentElement.appendChild(liElement);
    });

    btnDiscardElement.addEventListener("click", (e) => {
      e.preventDefault();

      let ulDiscardElement = document.querySelector(
        "body > div > section:nth-child(4) > ul"
      );

      e.target.remove();
      btnSendElement.remove();
      ulDiscardElement.appendChild(liElement);
    });
  });
}
