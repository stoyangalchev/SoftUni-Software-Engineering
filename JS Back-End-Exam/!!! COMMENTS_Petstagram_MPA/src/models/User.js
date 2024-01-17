const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const SALT_ROUNDS = 10;

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: [true, "Username is required!"],
    minLength: 3,
  },
  email: {
    type: String,
    require: [true, "Email is required!"],
    minLength: 8,
  },
  password: {
    type: String,
    require: [true, "Password is required!"],
    minLength: 4,
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
