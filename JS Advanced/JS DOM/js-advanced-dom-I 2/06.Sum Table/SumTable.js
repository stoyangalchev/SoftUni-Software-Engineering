function sumTable() {
  let elementPrice = document.querySelectorAll("tr td:nth-of-type(2)");
  let result = 0;

  for (let el of elementPrice) {
    let number = Number(el.textContent);
    result += number;
  }

  document.getElementById("sum").textContent = result;
}
