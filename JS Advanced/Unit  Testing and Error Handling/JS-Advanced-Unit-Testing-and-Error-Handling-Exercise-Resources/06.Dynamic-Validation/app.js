function validate() {
  let idElement = document.getElementById("email");

  idElement.addEventListener("change", (e) => {
    let regex = /^[a-z]+\@[a-z]+\.[a-z]+$/gm;
    if (regex.test(e.target.value)) {
      e.currentTarget.classList.remove("error");
    } else {
      e.currentTarget.classList.add("error");
    }
  });
}
