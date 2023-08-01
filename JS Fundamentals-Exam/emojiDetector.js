function emojiDetector(input) {
  let stringAsinput = input.toString();

  let regexForNum = /(?<digits>\d+)/gm;
  let numAsAray = [];
  //   let myArray = [];

  while ((myArray = regexForNum.exec(stringAsinput)) !== null) {
    let digit = myArray.groups["digits"];
    numAsAray.push(digit);
  }
  let splitedNums = numAsAray.join("").split("");
  let numsMultipy = 1; //540

  for (let i = 0; i < splitedNums.length; i++) {
    let firstNum = +splitedNums[i];
    numsMultipy *= firstNum;
  }

  ///////////////////////////

  let regexForEmoji =
    /(?<emoji>\*{2}[A-Z]{1}[a-z]{2,}\*{2})|(?<emojis>\:{2}[A-Z]{1}[a-z]{2,}\:{2})/gm;
  let emojyArray = []; //['Smiley', 'Tigers', 'Mooning', 'Shy']

  while ((myArray = regexForEmoji.exec(stringAsinput)) !== null) {
    let emoji = myArray.groups["emoji"];
    let emojis = myArray.groups["emojis"];
    if (emoji != undefined) {
      emojyArray.push(emoji);
    } else {
      emojyArray.push(emojis);
    }
  }

  let colectionEmojy = new Map();

  for (let el of emojyArray) {
    let sizeAsci = 0;

    for (let element of el) {
      let ascciCode = element.charCodeAt();
      sizeAsci += ascciCode;
    }
    /*>=*/
    if (sizeAsci >= numsMultipy) {
      colectionEmojy.set(el);
    }
  }

  console.log(`Cool threshold: ${numsMultipy}`);
  console.log(
    `${emojyArray.length} emojis found in the text. The cool ones are:`
  );

  const mapIter = colectionEmojy.keys();
  for (let el of mapIter) {
    console.log(el);
  }
}
emojiDetector([
  "It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**.",
]);

emojiDetector([
  "5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::",
]);
emojiDetector([
  "In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**",
]);
