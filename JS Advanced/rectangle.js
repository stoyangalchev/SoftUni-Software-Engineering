function rectangle(x, y, z) {
  let recta = {};
  recta.width = x;
  recta.height = y;
  recta.color = z;
  recta.calcArea = calcArea;

  let firstUpper = recta.color;
  let string = "";
  for (let i = 0; i < firstUpper.length; i++) {
    if (i == 0) {
      string += firstUpper[i].toUpperCase();
    } else {
      string += firstUpper[i];
    }
  }
  recta.color = string;

  console.log(recta.width);
  console.log(recta.height);
  console.log(recta.color);
  console.log(recta.calcArea());

  function calcArea() {
    return Number(x) * Number(y);
  }
  return recta;
}
let rect = rectangle(4, 5, "red");

console.log(JSON.stringify(rect));
