function truckDriver(input) {
  let season = input[0];
  let km = Number(input[1]);
  let salary = 0;
  switch (season) {
    case "Spring":
      {
        if (km <= 5000) {
          salary = km * 0.75 * 4 * 0.9;
        } else if (km <= 10000) {
          salary = km * 0.95 * 4 * 0.9;
        } else if (km <= 20000) {
          salary = km * 1.45 * 4 * 0.9;
        }
      }
      break;
    case "Autumn":
      {
        if (km <= 5000) {
          salary = km * 0.75 * 4 * 0.9;
        } else if (km <= 10000) {
          salary = km * 0.95 * 4 * 0.9;
        } else if (km <= 20000) {
          salary = km * 1.45 * 4 * 0.9;
        }
      }
      break;
    case "Summer":
      {
        if (km <= 5000) {
          salary = km * 0.9 * 4 * 0.9;
        } else if (km <= 10000) {
          salary = km * 1.1 * 4 * 0.9;
        } else if (km <= 20000) {
          salary = km * 1.45 * 4 * 0.9;
        }
      }
      break;
    case "Winter": {
      if (km <= 5000) {
        salary = km * 1.05 * 4 * 0.9;
      } else if (km <= 10000) {
        salary = km * 1.25 * 4 * 0.9;
      } else if (km <= 20000) {
        salary = km * 1.45 * 4 * 0.9;
      }
    }
  }
  console.log(salary.toFixed(2));
}
truckDriver(["Spring", 16942]);
