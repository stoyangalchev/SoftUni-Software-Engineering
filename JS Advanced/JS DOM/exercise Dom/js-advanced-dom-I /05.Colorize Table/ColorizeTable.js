// function colorize() {
//   let elementQuerry = document.querySelectorAll("tr:nth-of-type(2n) td");

//   elementQuerry.forEach((x) => {
//     x.style.backgroundColor = "teal";
//   });
// }
function colorize() {
  let rowElements = document.getElementsByTagName("tr");

  let rows = Array.from(rowElements);
  console.log(rows);
  rows.forEach((x, i) => {
    if (i % 2 != 0) {
      x.style.backgroundColor = "teal";
    }
  });
}
