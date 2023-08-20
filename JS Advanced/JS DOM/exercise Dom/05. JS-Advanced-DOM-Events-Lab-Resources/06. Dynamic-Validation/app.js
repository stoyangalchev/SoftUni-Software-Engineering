function validate() {
  let inputElement = document.getElementById("email");

  inputElement.addEventListener("change", () => {
    inputElement.classList.remove("error");
    let value = inputElement.value;

    if (value.match(/[A-Za-z]+@[A-Za-z]+.[A-Za-z]+/g)) {
      return;
    }
    inputElement.classList.add("error");
  });
}
