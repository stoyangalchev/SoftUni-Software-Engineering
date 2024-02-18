const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const SALT_ROUNDS = 10;

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "FUllname is required!"],
    unique: true,
    match: [
      /^[A-Za-z]+\s[A-Za-z]+$/,
      "Fullname must contain first and last name!",
    ],
    minLength: [5, "Fullname must be at least 5 characters long!"],
  },
  username: {
    type: String,
    required: [true, "Username is required!"],
    unique: true,
    minLength: [5, "Username must be at least 5 characters long!"],
  },

  password: {
    type: String,
    required: [true, "Password is required!"],
    minLength: [6, "Password must be at least 6 characters long!"],
  },
});

userSchema.pre("save", function (next) {
  return bcrypt.hash(this.password, SALT_ROUNDS).then((hash) => {
    this.password = hash;

    return next();
  });
});

userSchema.method("validatePassword", function (password) {
  return bcrypt.compare(password, this.password);
});

const User = mongoose.model("User", userSchema);

module.exports = User;
