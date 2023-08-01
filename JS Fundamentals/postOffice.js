function postOffice(input) {
  input = input[0].split("|");

  let capitalPattern = /([\#\$\%\*\&])([A-Z]+)\1/;
  let charPattern = /(?<capital>[0-9]{2}):(?<lengthW>[0-9]{2})/g;

  let letterCapital = input[0].match(capitalPattern)[2];
  let charNum = input[1].match(charPattern);
  let words = input[2].split(" ");

  for (let char of letterCapital) {
    let charCode = char.charCodeAt(0);

    for (let num of charNum) {
      let [search, wordL] = num.split(":");
      search = Number(search);
      wordL = Number(wordL) + 1;
      if (wordL > 20) {
        continue;
      }

      if (charCode === search) {
        words.map((w) => {
          let wChar = w[0].charCodeAt(0);
          if (wChar === charCode && w.length === wordL) {
            console.log(w);
            let index = words.indexOf(w);
            words.splice(index, 1);
          }
        });
      }
    }
  }
}

postOffice([
  "sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 A4go O daOfa Or Ti Sar saTheww The Parahaos",
]);
