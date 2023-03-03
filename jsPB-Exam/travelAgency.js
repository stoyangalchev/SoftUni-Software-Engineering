function travelAgency(input) {
  let town = input.shift();
  let equipment = input.shift();
  let vip = input.shift();
  let days = Number(input.shift());
  let daySum = 0;
  let totalDay = 0;

  if (days < 1) {
    console.log(`Days must be positive number!`);
    return;
  }
  if (days > 7) {
    days = days - 1;
  }
  switch (town) {
    case "Borovets":
      {
        if (equipment === "withEquipment") {
          daySum = 100;
        } else if (equipment === "noEquipment") {
          daySum = 80;
        } else {
          console.log(`Invalid input!`);
          return;
        }
      }
      break;
    case "Bansko":
      {
        if (equipment === "withEquipment") {
          daySum = 100;
        } else if (equipment === "noEquipment") {
          daySum = 80;
        } else {
          console.log(`Invalid input!`);
          return;
        }
      }
      break;
    case "Varna":
      {
        if (equipment === "withBreakfast") {
          daySum = 130;
        } else if (equipment === "noBreakfast") {
          daySum = 100;
        } else {
          console.log(`Invalid input!`);
          return;
        }
      }
      break;
    case "Burgas":
      {
        if (equipment === "withBreakfast") {
          daySum = 130;
        } else if (equipment === "noBreakfast") {
          daySum = 100;
        } else {
          console.log(`Invalid input!`);
          return;
        }
      }
      break;
    default: {
      console.log(`Invalid input!`);
      return;
    }
  }
  if (vip === "yes") {
    switch (equipment) {
      case "withEquipment":
        {
          totalDay = (daySum - daySum * 0.1) * days;
        }
        break;
      case "noEquipment":
        {
          totalDay = (daySum - daySum * 0.05) * days;
        }
        break;
      case "withBreakfast":
        {
          totalDay = (daySum - daySum * 0.12) * days;
        }
        break;
      case "noBreakfast":
        {
          totalDay = (daySum - daySum * 0.07) * days;
        }
        break;
      default: {
        console.log(`Invalid input!`);
        return;
      }
    }
  } else if (vip === "no") {
    totalDay = daySum * days;
  } else {
    {
      console.log(`Invalid input!`);
      return;
    }
  }
  console.log(`The price is ${totalDay.toFixed(2)}lv! Have a nice time!`);
}
travelAgency(["Burgas", "noBreakfast", "yes", "9"]);
