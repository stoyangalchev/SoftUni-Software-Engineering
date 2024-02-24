const jwt = require("../utils/jwt");
const User = require("../models/User");
const { JWT_Secret } = require("../constants");

exports.register = (userData) => User.create(userData);

exports.login = async ({ email, password }) => {
  let user = await User.findOne({ email });

  console.log(user);

  if (!user) {
    throw new Error("Invalid Email or Password ");
  }

  let isValid = await user.validatePassword(password);

  if (!isValid) {
    throw new Error("Invalid Email or Password");
  }

  let payload = {
    _id: user._id,
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,

  };

  let token = await jwt.sign(payload, JWT_Secret);

  return token;
};
