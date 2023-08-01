function extractFile(input) {
  let splitedInput = input.split("\\");
  let fullFileName = splitedInput[splitedInput.length - 1];
  let fileNameWitout = fullFileName.split("."); //['Template', 'bac']
  let extension = fileNameWitout.pop(); //pptx

  console.log(`File name: ${fileNameWitout.join(".")} `);
  console.log(`File extension: ${extension}`);
}
extractFile("C:\\Internal\\training-internal\\Template.2.2.2pptx");

function solve(input) {
  let text = input;
  let start = text.lastIndexOf("\\") + 1;
  let end = text.lastIndexOf(".");
  let fileName = text.substring(start, end);
  let fileExtention = text.substring(end + 1);
  console.log(fileExtention);
  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${fileExtention}`);
}

solve("C:\\Internal\\training-internal\\Template.2.2.2pptx");
