function notify(message) {
  let hidenTextEl = document.getElementById("notification");
  hidenTextEl.textContent = message;
  hidenTextEl.style.display = "block";

  hidenTextEl.addEventListener("click", (e) => {
    e.target.style.display = "none";
  });
}
