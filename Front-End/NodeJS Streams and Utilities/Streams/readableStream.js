const fs = require("fs");

const readStream = fs.createReadStream("./input.txt", { encoding: "utf-8" });

readStream.on("data", (chunk) => {
  console.log("Read Chunk");
  console.log(chunk);
});
readStream.on("end", () => {
  console.log("Read  is finish");
});
