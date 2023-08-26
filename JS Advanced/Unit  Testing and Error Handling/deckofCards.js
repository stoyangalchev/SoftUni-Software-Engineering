function deckofCards(input) {
  let validFaces = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  let objevFaces = {};
  for (let el of validFaces) {
    objevFaces[el] = 0;
  }

  let validSuit = {
    S: "♠",
    H: "♥",
    D: "♦",
    C: "♣",
  };
  let result = "";
  let arr = [];

  let errrorArray = [];
  for (let i = 0; i < input.length; i++) {
    let el = input[i];
    let splitedEl = el.split("");

    if (splitedEl.length == 2) {
      let [first, second] = el.split("");
      createCard(first, second);
    } else if (splitedEl.length == 3) {
      let [first, second, third] = el.split("");
      let firstSecond = String(first) + String(second);
      createCard(firstSecond, third);
    }
  }

  if (input.length == arr.length) console.log(arr.join(" "));

  if (input.length > arr.length)
    console.log(`Invalid card: ${errrorArray.join(" ")}`);

  function createCard(x, y, z) {
    if (
      objevFaces.hasOwnProperty(x.toUpperCase()) &&
      validSuit.hasOwnProperty(y.toUpperCase())
    ) {
      if (x == 1) {
        result += `${x.toUpperCase()}${z}`;
      } else {
        result += x.toUpperCase();
      }

      result += validSuit[y.toUpperCase()];
      arr.push(result);

      result = "";
    } else {
      if (z == undefined) {
        errrorArray.push(x + y);
      } else {
        errrorArray.push(x + y + z);
      }
    }
  }
}
deckofCards(["AS", "10D", "KH", "2C"]);
deckofCards(["5S", "3D", "QD", "1C"]);
