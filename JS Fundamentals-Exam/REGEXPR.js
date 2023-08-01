function regexpr(str) {
  const myRe = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

  let myArray;
  while ((myArray = myRe.exec(str)) !== null) {
    let msg = myArray[0];

    console.log(myArray);
  }

  ///////////////////////////////////////////
  const regex = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

  const found = str.match(regex);
  console.log(found);
}
regexpr("Test Testov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Ivan Ivanov");
//////////////////////////////

function solve(input) {
  input = input.toString();

  let regex =
    /\b(?<Day>\d{2})(?<separator>[- .\/])(?<Date>\w{3})\2(?<Year>\d{4})/g;

  let myArray = [];

  while ((myArray = regex.exec(input)) !== null) {
    let day = myArray.groups["Day"];
    let date = myArray.groups["Date"];
    let year = myArray.groups["Year"];
    console.log(`Day: ${day}, Month: ${date}, Year: ${year}`);
  }
}
solve([
  "|13/Jul/1928, 10-Nov-1934, 01/Jan-1951, 25.Dec.1937, 23/09/1973, 1/Feb/2016",
]);
