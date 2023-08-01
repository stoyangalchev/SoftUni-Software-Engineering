function mirrorWords(input) {
  let stringAsinput = input.toString();

  let regex = /([@|#])(?<first>[A-Za-z]{3,})\1\1(?<second>[A-Za-z]{3,})\1/gm;
  let counter = [];

  let match = stringAsinput.match(regex);

  if (match == null) {
    console.log("No word pairs found!");
    console.log("No mirror words!");
    return;
  }
  let lengthMatch = match.length;
  if (lengthMatch > 0) {
    console.log(`${lengthMatch} word pairs found!`);
  } else {
    console.log("No word pairs found!");
  }
  let newArray = [];

  let myArray;
  let counterOfMirrorWords = 0;
  while ((myArray = regex.exec(stringAsinput)) !== null) {
    let reversedIndex2 = myArray.groups.second.split("").reverse().join("");
    if (myArray.groups.first == reversedIndex2) {
      counterOfMirrorWords++;

      newArray.push(`${myArray.groups.first} <=> ${myArray.groups.second}`);
      // console.log(`${myArray.groups.first} <=> ${myArray.groups.second},`);
    }
  }

  if (counterOfMirrorWords == 0) {
    console.log("No mirror words!");
  } else {
    console.log("The mirror words are:");
    console.log(newArray.join(", "));
  }
}
mirrorWords([
  "@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r",
]);
console.log("....................");
mirrorWords(["#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@"]);
console.log("....................");
mirrorWords(["#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#"]);
