function transportPrice(input) {
  let km = Number(input[0]);
  let array = input[1];
  let price = 0;
  if (km < 20) {
    if (array === "day") {
      price = 0.7 + km * 0.79;
    } else if (array === "night") {
      price = 0.7 + km * 0.9;
    }
  } else if (km >= 20 && km < 100) {
    price = km * 0.09;
  }
else if (km>=100){
    price = km*0.06
}
console.log(price.toFixed(2));
}
transportPrice([180, "day"]);
