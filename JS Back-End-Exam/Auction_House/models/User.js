const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const SALT_ROUNDS = 10;

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    require: [true, "Email is required!"],
    minLength: 3,
  },
  password: {
    type: String,
    require: [true, "Password is required!"],
    minLength: 4,
  },
  firstName: {
    type: String,
    require: [true, "First name is required!"],
    minLength: 3,
  },
  lastName: {
    type: String,
    require: [true, "Last name is required!"],
    minLength: 3,
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
