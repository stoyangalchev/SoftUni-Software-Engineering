function extractText() {
  let items = document.querySelectorAll("#items li");
  let result = document.getElementById("result");
  for (let li of items) {
    result.value += li.textContent + "\n";
  }
}
