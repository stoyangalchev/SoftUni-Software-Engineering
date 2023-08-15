function toggle() {
  let buttonElement = document.getElementsByClassName("button")[0];

  let idExtraElement = document.querySelector("#extra");

  if (buttonElement.textContent == "More") {
    if ((idExtraElement.style.display = "none")) {
      idExtraElement.style.display = "block";
      buttonElement.textContent = "Less";
    }
  } else if (buttonElement.textContent == "Less") {
    idExtraElement.style.display = "none";
    buttonElement.textContent = "More";
  }

  
}
