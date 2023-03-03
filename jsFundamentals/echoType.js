function echoType(arg) {
  if (typeof arg === "string") {
    console.log("string");
    console.log(arg);
  } else if (typeof arg === "number") {
    console.log("number");
    console.log(arg);
  } else {
    console.log("object");
    console.log("Parameter is not suitable for printing");
  }
}
echoType(24);
