function distinctArray(arr) {
  let result=[];

 for (el of arr){
    if( !result.includes(el)){
        result.push(el)
    }
 }
  console.log(result);
}
distinctArray([1, 2, 3, 2, 4]);
