function oscarsWeekInCinema(input) {
  let movieName = input[0];
  let typeTicket = input[1];
  let countTicket = Number(input[2]);

  let sum = 0;
  switch (movieName) {
    case "A Star Is Born": {
      if (typeTicket === "normal") {
        sum = countTicket * 7.5;
      } else if (typeTicket === "luxury") {
        sum = countTicket * 10.5;
      } else if (typeTicket === "ultra luxury") {
        sum = countTicket * 13.5;
      }
      break;
    }
    case "Bohemian Rhapsody":
      {
        if (typeTicket === "normal") {
          sum = countTicket * 7.35;
        } else if (typeTicket === "luxury") {
          sum = countTicket * 9.45;
        } else if (typeTicket === "ultra luxury") {
          sum = countTicket * 12.75;
        }
      }
      break;
    case "Green Book":
      {
        if (typeTicket === "normal") {
          sum = countTicket * 8.15;
        } else if (typeTicket === "luxury") {
          sum = countTicket * 10.25;
        } else if (typeTicket === "ultra luxury") {
          sum = countTicket * 13.25;
        }
      }
      break;
    case "The Favourite": {
      if (typeTicket === "normal") {
        sum = countTicket * 8.75;
      } else if (typeTicket === "luxury") {
        sum = countTicket * 11.55;
      } else if (typeTicket === "ultra luxury") {
        sum = countTicket * 13.95;
      }
    }
  }
  console.log(`${movieName} -> ${sum.toFixed(2)} lv.`);
}
oscarsWeekInCinema(["Green Book", "normal", "63"]);
