function weatherForecastPart2(input) {
  let t = Number(input.shift())

  if (t >= 26.0 && t <= 35.0) {
    console.log("Hot");
  } else if (t >= 20.1 && t <= 25.9) {
    console.log("Warm");
  }else if (t >= 15.00 && t <= 20.00) {
    console.log("Mild");
  }else if (t >= 12.00 && t <= 14.9) {
    console.log("Cool");
  }else if (t >= 5.00 && t <= 11.9) {
    console.log("Cold");
  }else {
    console.log("unknown");

  }
}

weatherForecastPart2([20]);

