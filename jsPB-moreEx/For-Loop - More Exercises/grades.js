function grades(input) {
  let numStudent = Number(input.shift());
  let count5more = 0;
  let count4i499 = 0;
  let count3i399 = 0;
  let countUnder3 = 0;
  let sum = 0;
  for (let g = 1; g <= numStudent; g++) {
    let currentGrade = Number(input.shift());
    sum += currentGrade;
    if (currentGrade >= 5.0) {
      count5more++;
    } else if (currentGrade >= 4 && currentGrade <= 4.99) {
      count4i499++;
    } else if (currentGrade >= 3 && currentGrade <= 3.99) {
      count3i399++;
    } else {
      countUnder3++;
    }
  }
  let percent5more = (100 / numStudent) * count5more;
  let percent4i499 = (100 / numStudent) * count4i499;
  let percent3i399 = (100 / numStudent) * count3i399;
  let percentUnder3 = (100 / numStudent) * countUnder3;
  let avarageSum = sum / numStudent;
  console.log(`Top students: ${percent5more.toFixed(2)}%`);
  console.log(`Between 4.00 and 4.99: ${percent4i499.toFixed(2)}%`);
  console.log(`Between 3.00 and 3.99: ${percent3i399.toFixed(2)}%`);
  console.log(`Fail: ${percentUnder3.toFixed(2)}%`);
  console.log(`Average: ${avarageSum.toFixed(2)}`);
}
grades([6, 2, 3, 4, 5, 6, 2.2]);
