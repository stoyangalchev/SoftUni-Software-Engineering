function gramophone(firstString, secondString, thirdString) {
  let album = firstString.length;
  let band = secondString.length;
  let song= thirdString.length;

  let sum=(album * band) * song /2
  //The plate makes a full rotation every 2.5 seconds.
  console.log(`The plate was rotated ${Math.ceil(sum/2.5)} times.`);
}
gramophone('Rammstein', 'Sehnsucht', 'Engel');
