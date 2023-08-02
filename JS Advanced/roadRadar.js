function roadRadar(km, place) {
  let allowedSpeed = 0;

  let difference = 0;
  let isOKey = false;
  switch (place) {
    case "city":
      {
        allowedSpeed = 50;
        if (km > 20 && km <= 50) {
          isOKey = true;
        } else {
          difference = km - 50;
        }
      }
      break;

    case "residential":
      {
        allowedSpeed = 20;
        if (km <= 20) {
          isOKey = true;
        } else {
          difference = km - 20;
        }
      }
      break;

    case "interstate":
      {
        allowedSpeed = 90;
        if (km > 50 && km <= 90) {
          isOKey = true;
        } else {
          difference = km - 90;
        }
      }
      break;
    case "motorway":
      {
        allowedSpeed = 130;
        if (km > 90 && km <= 130) {
          isOKey = true;
        } else {
          difference = km - 130;
        }
      }
      break;
  }

  statuss = "";
  if (difference <= 20) {
    statuss = "speeding";
  } else if (difference > 20 && difference <= 40) {
    statuss = "excessive speeding";
  } else {
    statuss = "reckless driving";
  }
  if (isOKey) {
    console.log(`Driving ${km} km/h in a ${allowedSpeed} zone`);
  } else {
    console.log(
      `The speed is ${difference} km/h faster than the allowed speed of ${allowedSpeed} - ${statuss}`
    );
  }
}
roadRadar(200, "motorway");
// On the motorway, the limit is 130 km/h
// On the interstate, the limit is 90 km/h
// In the city, the limit is 50 km/h
// Within a residential area, the limit is 20 km/h
