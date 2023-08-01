function addandRemove(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "remove") {
      result.pop();
    } else if (arr[i] === "add") {
      result.push(i + 1);
    }
  }

  if (result.length === 0) {
    console.log("Empty");
  } else {
    console.log(result.join(" "));
  }
}

addandRemove(["add", "add", "remove", "add", "add"]);

function addRemove(arr) {
  let newArr = [];

  for (let i = 0; i <= arr.length; i++) {
    let curentEl = arr[i];
    if(curentEl==="add"){
      newArr.push(i+1)
    }else if(curentEl==="remove"){
          newArr.pop()
    }
  }
  console.log(newArr.join(" "));
}
addRemove(["add", "add", "remove", "add", "add"]);
