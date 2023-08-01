function fancyBarcodes(input) {
  let text = input;

  let regex = /([=\/])[A-Z][A-Za-z]{2,}([=\/])/g;
  let match = text.match(regex);

  if (match == null || match == undefined) {
    console.log("Destinations:");
    console.log("Travel Points: 0");
    return;
  }
  let emptyArr = [];

  for (let el of match) {
    if (el[0] === el[el.length - 1]) {
      let subtring = el.substring(1, el.length - 1);
      emptyArr.push(subtring);
    }
  }

  let destination = emptyArr.join(", ");
  let point = 0;

  for (let word of emptyArr) {
    point += word.length;
  }

  console.log(`Destinations: ${destination}`);
  console.log(`Travel Points: ${point}`);
}
fancyBarcodes("ThisIs some InvalidInput");
fancyBarcodes("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
