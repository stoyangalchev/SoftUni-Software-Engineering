function calculator() {
  function init(selector1, selector2, resultSelector) {
    inpu1 = document.querySelector(selector1);
    input2 = document.querySelector(selector2);
    result = document.querySelector(resultSelector);
  }
  function add() {
    result.value = Number(inpu1.value) + Number(input2.value);
  }
  function subtract() {
    result.value = Number(inpu1.value) - Number(input2.value);
  }

  return {
    init,
    add,
    subtract,
  };
}

const calculate = calculator();
calculate.init("#num1", "#num2", "#result");
