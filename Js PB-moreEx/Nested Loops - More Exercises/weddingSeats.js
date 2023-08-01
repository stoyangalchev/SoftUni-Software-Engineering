function weddingSeats(input) {
  let lastSector = input.shift();
  let initialRowCounter = Number(input.shift());
  let seatCounter = Number(input.shift());
  let firstCharNum = "a".charCodeAt(0);
  let totalSeats = 0;
  let firstChar = "A";
  let str = input;

  for (let i = firstChar.charCodeAt(0); i <= lastSector.charCodeAt(0); i++) {
    for (let row = 1; row <= initialRowCounter; row++) {
      if (row % 2 !== 0) {
        for (let j = firstCharNum; j < firstCharNum + seatCounter; j++) {
          let currentLetter = String.fromCharCode(i);
          let currentSmallLetter = String.fromCharCode(j);
          console.log(`${currentLetter}${row}${currentSmallLetter}`);
          totalSeats++;
        }
      } else {
        for (let j = firstCharNum; j < firstCharNum + seatCounter + 2; j++) {
          let currentLetter = String.fromCharCode(i);
          let currentSmallLetter = String.fromCharCode(j);
          console.log(`${currentLetter}${row}${currentSmallLetter}`);
          totalSeats++;
        }
      }
    }

    initialRowCounter++;
  }

  console.log(totalSeats);
}
weddingSeats(["B", 3, 2]);
