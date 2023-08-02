function previousDay(year, month, day) {
  let setDate = new Date(year, month - 1, day - 1);

  console.log(
    `${setDate.getFullYear()}-${setDate.getMonth() + 1}-${setDate.getDate()}`
  );
}

previousDay(2016, 9, 30);
previousDay(2016, 10, 1);
