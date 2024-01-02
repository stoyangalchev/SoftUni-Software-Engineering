const express = require("express");
const path = require("path");
const router = require("./routes");
const handlebars = require("express-handlebars");
const app = express();
const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: false }));


app.engine("hbs", handlebars.engine({ extname: "hbs" }));
app.set("view engine", "hbs");
app.set("views", path.resolve(__dirname, "views"));

app.use(express.static(path.resolve(__dirname, "static")));



mongoose
  .connect("mongodb://127.0.0.1:27017/petstagram")
  .then(() => {
    console.log("Database is setup and running");
  })
  .catch((err) => {
    console.log("Database connection error", err.message);
  });

app.use(router);
app.listen(3000, () => {
  console.log(`Server is listening on port ${3000} http://localhost:${3000}`);
});
