const express = require("express");
const app = express();
const port = 8080;

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.get("/login", function (req, res) {
    res.send("You are Login in!");
  });

  app.get('/user/:id', function(req, res) {
    let userId = req.params.id;
    console.log(userId);
    console.log(req.params);
    });

app.listen(port,()=>console.log("Server Work!"))
