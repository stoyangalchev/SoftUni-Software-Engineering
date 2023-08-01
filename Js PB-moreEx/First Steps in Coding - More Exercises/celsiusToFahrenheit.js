function celsiusToFahrenheit(input) {
  let celsius = Number(input[0]);
  let farenheit = (celsius / 5) * 9 + 32;
  console.log(farenheit.toFixed(2));
}
celsiusToFahrenheit([25]);
