function renovation(input) {
  let index = 0;
  let wallHight = Number(input[index++]);
  let wallWidth = Number(input[index++]);
  let percentNotPaint = Number(input[index++]);
  let allTopaint = Math.ceil(wallHight * wallWidth * 4);
  let percentNotPaints = Math.abs(
    allTopaint - (allTopaint / 100) * percentNotPaint
  );
  let command = input[index];
  let currentPaint = 0;
  let bolean = false;
  while (command != "Tired!") {
    let currentPaint = Number(input[index++]);
    if (percentNotPaints < currentPaint) {
      bolean = true;
      Math.abs((percentNotPaints -= currentPaint));
      break;
    }
    if (percentNotPaints === currentPaint) {
      console.log(`All walls are painted! Great job, Pesho! `);
      return;
    }
    percentNotPaints -= currentPaint;

    command = input[index];
  }
  if (bolean) {
    let left1 = Math.abs(percentNotPaints - currentPaint);
    console.log(`All walls are painted and you have ${left1} l paint left! `);
  } else {
    console.log(`${percentNotPaints} quadratic m left. `);
  }
}
renovation(["3", "5", "10", "2", "3", "1", "Tired!"]);
