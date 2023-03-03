function cinemaTickets(input) {
  let index = 0
  let nameMovie = input[index++];
  let totalTicket = 0;
  let studentCounter = 0;
  let standardCounter = 0;
  let kidsCounter = 0;
  while (nameMovie !== 'Finish') {
      let freeSpace = Number(input[index++]);
      let typeTicket = input[index++];
      let sellsTicket = 0;
      while (typeTicket !== 'End') {
          if (typeTicket === 'student') {
              studentCounter++;
          } else if (typeTicket === 'standard') {
              standardCounter++;
          } else {
              kidsCounter++;
          }
          totalTicket++;
          sellsTicket++;
          if (sellsTicket >= freeSpace) {
              break;
          }
          typeTicket = input[index++];
      }
      console.log(`${nameMovie} - ${((sellsTicket / freeSpace) * 100).toFixed(2)}% full.`);
      nameMovie = input[index++];
  }
  console.log(`Total tickets: ${totalTicket}`);
  console.log(`${((studentCounter / totalTicket) * 100).toFixed(2)}% student tickets.`);
  console.log(`${((standardCounter / totalTicket) * 100).toFixed(2)}% standard tickets.`);
  console.log(`${((kidsCounter / totalTicket) * 100).toFixed(2)}% kids tickets.`);
}
cinemaTickets(["Taxi",
  "10",
  "standard",
  "kid",
  "student",
  "student",
  "standard",
  "standard",
  "End",
  "Scary Movie",
  "6",
  "student",
  "student",
  "student",
  "student",
  "student",
  "student",
  "Finish"])