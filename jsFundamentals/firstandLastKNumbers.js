function firstandLastKNumbers(arr) {
  let kDigit = arr.shift();
  let result = [];
  let first = arr.slice(0, kDigit).join(" ");
  let sec = arr.slice(arr.length - kDigit, arr.length).join(" ");
  result.push(first, sec);
  console.log(result.join("\n"));
}
firstandLastKNumbers([2, 7, 8, 9]);

function firstLastKElements(arr) {
  let k = arr.shift();

  console.log(arr.slice(0, k).join(" "));

  console.log(arr.slice(arr.length - k, arr.length).join(" "));
}
firstLastKElements([2, 7, 8, 9]);
