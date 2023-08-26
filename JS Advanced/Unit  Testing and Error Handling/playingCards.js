function playingCards(face, suit) {
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

  if (
    objevFaces.hasOwnProperty(face.toUpperCase()) &&
    validSuit.hasOwnProperty(suit.toUpperCase())
  ) {
    result += face.toUpperCase();
    result += validSuit[suit.toUpperCase()];
  } else {
    return "Error";
  }
  return result;
}
console.log(playingCards("2", "c"));
