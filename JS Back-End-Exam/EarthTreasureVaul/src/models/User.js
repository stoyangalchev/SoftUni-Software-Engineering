const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const SALT_ROUNDS = 10;

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required!"],
    unique: [true, "Email already exists!"],
    minLength: [10, "Email must be at least 10 characters long!"],
  },

  password: {
    type: String,
    required: [true, "Password is required!"],
    minLength: [4, "Password must be at least 4 characters long!"]
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




