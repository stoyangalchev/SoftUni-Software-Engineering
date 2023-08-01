function softUniReception(input) {
  let [emp1, emp2, emp3, countStud] = input.map(Number);
  let hour = 0;
  let studentFinish = 0;
  let forHour = emp1 + emp2 + emp3;

  while (studentFinish < countStud) {
    hour++;
    studentFinish += forHour;

    if (hour % 4 == 0) {
      hour++;
    }
  }
  console.log(`Time needed: ${hour}h.`);
}
softUniReception(["5", "6", "4", "20"]);

softUniReception(["1", "2", "3", "45"]);
