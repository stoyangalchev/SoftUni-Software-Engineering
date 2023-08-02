function cookingBYNumbers(paramNum, p1, p2, p3, p4, p5) {
  let num = Number(paramNum);
  let array = [p1, p2, p3, p4, p5];

  array.forEach((element) => {
    if (element == "chop") {
      num /= 2;
      console.log(num);
    } else if (element == "dice") {
      num = Math.sqrt(num);
      console.log(num);
    } else if (element == "spice") {
      num += 1;
      console.log(num);
    } else if (element == "bake") {
      num *= 3;
      console.log(num);
    } else if (element == "fillet") {
      num *= 0.8;
      console.log(num.toFixed(1));
    }
  });
}
// cookingBYNumbers("32", "chop", "chop", "chop", "chop", "chop");
cookingBYNumbers("9", "dice", "spice", "chop", "bake", "fillet");
