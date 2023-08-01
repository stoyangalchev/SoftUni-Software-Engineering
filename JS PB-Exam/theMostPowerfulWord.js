function theMostPowerfulWord(input) {
  let index = 0;

  let comand = input[index];
  index++;
  volumChar = 0;
  let currentSum = 0;
  let bigestSUm = 0;
  let bigestWord = "";
 
  while (comand != "End of words") {
   
    let currentWord = comand;
    let firstCharWord = currentWord.charAt(0);
    let lengthWord = currentWord.length;
    
    for (let i = 0; i <= lengthWord - 1; i++) {
      volumChar += currentWord.charCodeAt(i);
    }
   
    if (
      firstCharWord === "A" ||
      firstCharWord === "E" ||
      firstCharWord === "I" ||
      firstCharWord === "O" ||
      firstCharWord === "U" ||
      firstCharWord === "Y" ||
      firstCharWord === "a" ||
      firstCharWord === "e" ||
      firstCharWord === "i" ||
      firstCharWord === "o" ||
      firstCharWord === "u" ||
      firstCharWord === "y"
    ) {
      currentSum = Math.floor(volumChar * lengthWord);
    } 
    else {
      currentSum = Math.floor(volumChar / lengthWord);
    }
    
    if (currentSum >= bigestSUm) {
      bigestWord = currentWord;
      bigestSUm = currentSum;
    }

    volumChar = 0;
   
    comand = input[index];
    index++;
  }
  console.log(`The most powerful word is ${bigestWord} - ${bigestSUm}`);
}
theMostPowerfulWord([
  "But",
  "Some",
  "People",
  "Say",
  "It's",
  "LOVE",
  "End of words",
]);
