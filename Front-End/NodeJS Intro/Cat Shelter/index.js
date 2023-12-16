const http = require("http");

const homeHtml = require("./views/home/index.js");
const siteCss = require("./content/styles/site");
const icon = require("./content/images/pawprint.js");
const server = http.createServer(async (req, res) => {
  if (req.url === "/") {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    res.write(homeHtml);
  } else if (req.url === "/content/styles/site.css") {
    res.writeHead(200, {
      "Content-Type": "text/css",
    });
    res.write(siteCss);
  } else if (req.url === "/content/images/pawprint.ico"){
    res.writeHead(200, {
      "Content-Type": "image/x-icon",
    });
    res.write(icon);
  } res.end();
});
server.listen(3000, () => {
  console.log(`Mnogo e Dobre`);
  console.log("Server is running...");
});
