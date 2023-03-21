function addAndSubtract(first, second, third) {
  let sum = (first, second) => first + second;
  let substrackt = (sumofFirst, third) => sumofFirst - third;

  let sumofFirst = sum(first, second);
  let finalresult = substrackt(sumofFirst, third);
  console.log(finalresult);
}
addAndSubtract(23, 6, 10);

function addAndSubtract1(first, second, third) {
  function sum(first, second) {
    return first + second;
  }
  function substrackt(sum, third) {
    return sum - third;
  }
  let sumofFirst = sum(first, second);
  let finalresult = substrackt(sumofFirst, third);
  console.log(finalresult);
}
addAndSubtract1(23, 6, 10);

function addAndSubtract12(first, second, third) {
  let substrackt = (first, second, third) => first + second - third;
  console.log(substrackt(first, second, third));
}
addAndSubtract12(23, 6, 10);
