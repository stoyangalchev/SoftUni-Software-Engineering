function gameOfIntervals(input) {
  let numPoins = Number(input.shift());
  let p0to9 = 0;
  let p10to19 = 0;
  let p20to29 = 0;
  let p30to39 = 0;
  let p40to50 = 0;
  let pInvalid = 0;
  let allPoint = 0;
  for (let n = 1; n <= numPoins; n++) {
    let currentNum = Number(input.shift());

    if (currentNum >= 40 && currentNum <= 50) {
      allPoint += 100;
      p40to50++;
    } else if (currentNum >= 30 && currentNum <= 39) {
      allPoint += 50;
      p30to39++;
    } else if (currentNum >= 20 && currentNum <= 29) {
      allPoint += currentNum * 0.4;
      p20to29++;
    } else if (currentNum >= 10 && currentNum <= 19) {
      allPoint += currentNum * 0.3;
      p10to19++;
    } else if (currentNum >= 0 && currentNum <= 9) {
      allPoint += currentNum * 0.2;
      p0to9++;
    } else {
      allPoint /= 2;
      pInvalid++;
    }
  }
  console.log(allPoint.toFixed(2));
  p0to9 = (p0to9 / numPoins) * 100;
  console.log(`From 0 to 9: ${p0to9.toFixed(2)}%`);
  p10to19 = (p10to19 / numPoins) * 100;
  console.log(`From 10 to 19: ${p10to19.toFixed(2)}%`);
  p20to29 = (p20to29 / numPoins) * 100;
  console.log(`From 20 to 29: ${p20to29.toFixed(2)}%`);
  p30to39 = (p30to39 / numPoins) * 100;
  console.log(`From 30 to 39: ${p30to39.toFixed(2)}%`);
  p40to50 = (p40to50 / numPoins) * 100;
  console.log(`From 40 to 50: ${p40to50.toFixed(2)}%`);
  pInvalid = (pInvalid / numPoins) * 100;
  console.log(`Invalid numbers: ${pInvalid.toFixed(2)}%`);
}
gameOfIntervals([10, 43, 57, -12, 23, 12, 0, 50, 40, 30, 20]);
