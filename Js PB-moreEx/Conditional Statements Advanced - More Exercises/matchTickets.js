function matchTickets(input) {
  let budget = Number(input[0]);
  let category = input[1];
  let people = Number(input[2]);

  let vip = 499.99;
  let normal = 249.99;
  let dif = 0;
  let countPople = 0;

  switch (category) {
    case "VIP":
      {
        if (people >= 1 && people <= 4) {
          dif = budget - budget * 0.75;
        } else if (people >= 5 && people <= 9) {
          dif = budget - budget * 0.6;
        } else if (people >= 10 && people <= 24) {
          dif = budget - budget * 0.5;
        } else if (people >= 25 && people <= 49) {
          dif = budget - budget * 0.4;
        } else if (people >= 50) {
          dif = budget - budget * 0.25;
        }
        countPople = vip * people;
      }
      break;
    case "Normal":
      {
        if (people >= 1 && people <= 4) {
          dif = budget - budget * 0.75;
        } else if (people >= 5 && people <= 9) {
          dif = budget - budget * 0.6;
        } else if (people >= 10 && people <= 24) {
          dif = budget - budget * 0.5;
        } else if (people >= 25 && people <= 49) {
          dif = budget - budget * 0.4;
        } else if (people >= 50) {
          dif = budget - budget * 0.25;
        }
        countPople = normal * people;
      }
      break;
  }
  let diff2 = 0;
  if (countPople <= dif) {
    diff2 = dif - countPople;
    console.log(`Yes! You have ${diff2.toFixed(2)} leva left.`);
  } else if (dif < countPople) {
    diff2 = Math.abs(countPople - dif);
    console.log(`Not enough money! You need ${diff2.toFixed(2)} leva.`);
  }
}
matchTickets([50000, "Normal", 200]);
