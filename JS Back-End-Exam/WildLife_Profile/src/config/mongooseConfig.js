const mongoose = require("mongoose");

require("dotenv").config();

const DB_Connection_String = process.env.DB_CONNECTION_STRING;

function initDatabase() {
  return mongoose.connect(DB_Connection_String);
}

module.exports = initDatabase;
