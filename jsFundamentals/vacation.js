function vacation(countPeople, type, dayWeek) {
  let groupPrice = 0;
  switch (type) {
    case "Students":
      {
        if (dayWeek === "Friday") {
          groupPrice += countPeople * 8.45;
        } else if (dayWeek === "Saturday") {
          groupPrice += countPeople * 9.8;
        } else if (dayWeek === "Sunday") {
          groupPrice += countPeople * 10.46;
        }
        if (countPeople >= 30) {
          groupPrice *= 0.85;
        }
      }
      break;
    case "Business":
      {
        if (dayWeek === "Friday") {
          groupPrice += countPeople * 10.9;
        } else if (dayWeek === "Saturday") {
          groupPrice += countPeople * 15.6;
        } else if (dayWeek === "Sunday") {
          groupPrice += countPeople * 16;
        }
        if (countPeople >= 100) {
          let onePerson = groupPrice / countPeople; //16
          groupPrice -= onePerson * 10;
        }
      }
      break;
    case "Regular":
      {
        if (dayWeek === "Friday") {
          groupPrice += countPeople * 15;
        } else if (dayWeek === "Saturday") {
          groupPrice += countPeople * 20;
        } else if (dayWeek === "Sunday") {
          groupPrice += countPeople * 22.5;
        }
        if (countPeople >= 10 && countPeople <= 20) {
          groupPrice *= 0.95;
        }
      }
      break;
  }

  console.log(`Total price: ${groupPrice.toFixed(2)}`);
}
vacation(40, "Regular", "Saturday");

/*	         Friday	Saturday	Sunday
Students	8.45	9.80	10.46
Business	10.90	15.60	16
Regular	      15	20	    22.50  */
/*Студенти – ако групата е по-голяма или равна на 30 човека, се намалява общата цена с 15%
· Бизнес – ако групата е над или равна на 100 човека, 10 от тях могат да останат безплатно
· Редовен – ако групата е по-голяма или равна на 10 и по-малка или равна на 20, намалете общата цена с 5%*/
