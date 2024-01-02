const User = require("./../models/User");

exports.login = (username, password) => {

};

exports.register = (userData) => User.create(userData);


exports.logout = (req, res) => {};
