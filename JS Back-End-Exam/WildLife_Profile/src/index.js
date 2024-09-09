const express = require("express");
const session = require("express-session");
const routers = require("./router");
require("dotenv").config();
const initDatabase = require("./config/mongooseConfig");

const app = express();
const PORT = process.env.PORT || 3000;
require("./config/hbsConfig")(app);
require("./config/expressConfig")(app);

app.use(
  session({
    secret: process.env.JWT_SECRET || "your_secret_key",
    resave: false,
    saveUninitialized: false,

    cookie: { secure: false }, // Set to true if using HTTPS
  })
);
app.use(routers);

initDatabase()
  .then(() => {
    app.listen(PORT, () =>
      console.log(`The app is running on http://localhost:${PORT}`)
    );
  })
  .catch((err) => {
    console.log("Connot connect database:", err);
  });
