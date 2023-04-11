function oddOccurrences(str) {
  let array = str.split(" ");
  let newarray=[]
  let emptyArr = [];
  for (let el of array) {
    let lower = el.toLowerCase()
    newarray.push(lower)
    console.log(lower);
  }
  for(let el of newarray){
    if (!emptyArr.includes(el)){
        emptyArr.push(el)
    }
  }console.log(emptyArr);
}
oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
