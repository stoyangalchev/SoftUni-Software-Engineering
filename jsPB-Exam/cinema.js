
function cinema(args) {
    let seats = Number(args[0]);
    let i = 1;
    let people;
    let profit = 0;
   
    while ((people = args[i]) !== 'Movie time!') {
      people = Number(people)
      if (seats - people >= 0) {
        seats -= people;
        profit += people * 5;
        if (people % 3 === 0) {
          profit -= 5;
        }
      } else {
        console.log('The cinema is full.');
        break;
      }
      i++;
    }
    if (people === 'Movie time!') {
      console.log(`There are ${seats} seats left in the cinema.`);
    }
    console.log(`Cinema income - ${profit} lv.`);
  }cinema(["100",
  "15",
  "15",
  "15",
  "15",
  ])

