function extractFile(input) {
  let splitedInput = input.split("\\");
  let fullFileName = splitedInput[splitedInput.length - 1];
  let fileNameWitout = fullFileName.split("."); //['Template', 'bac']
  let extension = fileNameWitout.pop(); //pptx

  console.log(`File name: ${fileNameWitout.join(".")} `);
  console.log(`File extension: ${extension}`);
}
extractFile("C:\\Internal\\training-internal\\Template.bac.pptx");
