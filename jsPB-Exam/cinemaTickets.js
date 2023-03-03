function cinemaTickets(input) {
  let index = 0;
  let command = input[index];
  index++;
  let standard = 0;
  let kid = 0;
  let student = 0;
  let totalTickets = 0;
  let studentPercent = 0;
  let kidPercent = 0;
  let standartPercent = 0;

  while (command != "Finish") {
    let nameMoive = command;
    let freeSeats = Number(input[index]);
    index++;
    let typeTicket = input[index];
    index++;

    while (typeTicket != "End") {
      if (typeTicket === "standard") {
        standard += 1;
        standartPercent += 1;
      } else if (typeTicket === "kid") {
        kid += 1;
        kidPercent += 1;
      } else if (typeTicket === "student") {
        student += 1;
        studentPercent += 1;
      }
      typeTicket = input[index];
      index++;
      if (typeTicket === "Finish") {
        break;
      }
    }
    let alltickets = standard + kid + student;
    let percentMoive = (100 / freeSeats) * alltickets;
    totalTickets += alltickets;

    standard = 0;
    kid = 0;
    student = 0;
    alltickets = 0;
    console.log(`${nameMoive} - ${percentMoive.toFixed(2)}% full.`);

    if (typeTicket === "Finish") {
      console.log(`Total tickets: ${totalTickets}`);
      console.log(
        `${((100 / totalTickets) * studentPercent).toFixed(
          2
        )}% student tickets.`
      );
      console.log(
        `${((100 / totalTickets) * standartPercent).toFixed(
          2
        )}% standard tickets.`
      );
      console.log(
        `${((100 / totalTickets) * kidPercent).toFixed(2)}% kids tickets.`
      );

      break;
    }
    
    command = input[index];
    index++;
  }
}
cinemaTickets([
  "The Matrix",
  "20",
  "student",
  "standard",
  "kid",
  "kid",
  "student",
  "student",
  "standard",
  "student",
  "End",
  "The Green Mile",
  "17",
  "student",
  "standard",
  "standard",
  "student",
  "standard",
  "student",
  "End",
  "Amadeus",
  "3",
  "standard",
  "standard",
  "standard",
  "Finish",
]);
