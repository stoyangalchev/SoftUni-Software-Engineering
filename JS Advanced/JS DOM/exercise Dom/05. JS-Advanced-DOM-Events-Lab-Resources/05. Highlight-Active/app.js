function focused() {
  Array.from(document.querySelectorAll("input")).forEach((el) => {
    el.addEventListener("focus", onFocus);
    el.addEventListener("blur", onBlur);
  });

  function onFocus(e) {
    e.target.parentElement.className = "focused";
  }
  
  function onBlur(e) {
    e.target.parentElement.className = "";
  }
}


