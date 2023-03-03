function theSongOfTheWheels(input) {
  let num = Number(input.shift());
  let toString = "";
  let counter = 0;
  let isFound = false;
  let currentPass = 0;
  let isNum = false;
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      for (let k = 1; k <= 9; k++) {
        for (let l = 1; l <= 9; l++) {
          if (i * j + k * l === num && i < j && k > l) {
            isFound = true;
            toString += `${i}${j}${k}${l} `;
            counter++;
            if (counter === 4) {
              isNum = true;
              currentPass += Number(`${i}${j}${k}${l}`);
            }
          }
        }
      }
    }
  }
  if (isFound) {
    console.log(toString);
    if (isNum) {
      console.log(`Password: ${currentPass}`);
    } else {
      console.log(`No!`);
    }
  } else {
    console.log("No!");
  }
}

theSongOfTheWheels([55]);
