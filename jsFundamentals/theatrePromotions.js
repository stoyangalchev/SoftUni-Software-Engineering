function theatrePromotions(day, age) {
  let priceTicket = 0;
  if (age < 0 || age > 122) {
    console.log("Error!");
    return;
  }

  switch (day) {
    case "Weekday":
      {
        if (age >= 0 && age <= 18) {
          priceTicket += 12;
        } else if (age > 18 && age <= 64) {
          priceTicket += 18;
        } else if (age > 64 && age <= 122) {
          priceTicket += 12;
        }
      }
      break;
    case "Weekend":
      {
        if (age >= 0 && age <= 18) {
          priceTicket += 15;
        } else if (age > 18 && age <= 64) {
          priceTicket += 20;
        } else if (age > 64 && age <= 122) {
          priceTicket += 15;
        }
      }
      break;
    case "Holiday":
      {
        if (age >= 0 && age <= 18) {
          priceTicket += 5;
        } else if (age > 18 && age <= 64) {
          priceTicket += 12;
        } else if (age > 64 && age <= 122) {
          priceTicket += 10;
        }
      }
      break;
    default: {
      console.log("Error!");
    }
  }
  console.log(priceTicket + "$");
}

theatrePromotions("Holiday", 154849185);

/*Day / Age	0 <= age <= 18	          18 < age <= 64	        64 < age <= 122
Weekday	    12$	                           18$	                       12$      **********
Weekend	    15$	                           20$	                       15$
Holiday	    5$	                           12$	                       10$                      
*/
