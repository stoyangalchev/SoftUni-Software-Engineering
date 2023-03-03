function logistics(input) {
  let numCargo = Number(input.shift());
  let allCargo = 0;
  let bus = 0;
  let truck = 0;
  let train = 0;
  let count200 = 0;
  let count175 = 0;
  let count120 = 0;
  for (let n = 1; n <= numCargo; n++) {
    let oneCargo = Number(input.shift());
    allCargo += oneCargo;
    if (oneCargo <= 3) {
      bus += oneCargo * 200;
      count200 += oneCargo;
    } else if (oneCargo > 3 && oneCargo <= 11) {
      truck += oneCargo * 175;
      count175 += oneCargo;
    } else {
      train += oneCargo * 120;
      count120 += oneCargo;
    }
  }
  let avarageCargo = (bus + truck + train) / allCargo;
  console.log(avarageCargo.toFixed(2));
  count200 = (count200 / allCargo) * 100;
  console.log(count200.toFixed(2) + "%");
  count175 = (count175 / allCargo) * 100;
  console.log(count175.toFixed(2) + "%");
  count120 = (count120 / allCargo) * 100;
  console.log(count120.toFixed(2) + "%");
}
logistics([5, 2, 10, 20, 1, 7]);
