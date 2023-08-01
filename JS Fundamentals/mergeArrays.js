function mergeArrays(arr1, arr2) {
  let newArray = [];

  for (let i = 0; i < arr1.length; i++) {
    if (i % 2 === 0) {
      newArray.push(Number(Number(arr1[i])) + Number(arr2[i]));
    }
    if (i % 2 !== 0) {
      newArray.push(String(arr1[i] + arr2[i]));
    }
  }
  console.log(newArray.join(" - "));
}
mergeArrays(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
/////////////////////////////////////////////////////////////////////////////////////////////
function mergeArrays(arr1, arr2) {
  let newArray = [];
  for (let i = 0; i < arr1.length; i++) {
    if (i % 2 === 0) {
      newArray[i] = Number(arr1[i]) + Number(arr2[i]);
    } else {
      newArray[i] = arr1[i] + arr2[i];
    }
  }

  console.log(newArray.join(" - "));
}
mergeArrays(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
