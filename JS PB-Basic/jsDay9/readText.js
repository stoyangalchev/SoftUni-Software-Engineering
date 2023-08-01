function readText(array) {
    //text = 0
    //let length = input.length
    //for (let i = 0; i < length; i++) {
    //    let text = input[i]
    //    console.log(text);
    //}

    let i =0;
    let text = array[i]

    while (text !== "Stop") {
        console.log(text);
        i++
        text=array[i]
      }


}
readText(["Nakov",
    "SoftUni",
    "Sofia",
    "Bulgaria",
    "SomeText",
    "Stop",
    "AfterStop",
    "Europe",
    "HelloWorld"])