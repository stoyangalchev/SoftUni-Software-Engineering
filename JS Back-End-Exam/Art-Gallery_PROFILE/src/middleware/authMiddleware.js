const jwt = require("../utils/jwt");

require("dotenv").config();
const JWT_Secret = process.env.JWT_SECRET;
const AUTH_COOKIE_NAME = process.env.AUTH_COOKIE_NAME;

exports.auth = function (req, res, next) {
  let token = req.cookies[AUTH_COOKIE_NAME];

  if (token) {
    jwt
      .verify(token, JWT_Secret)
      .then((decodedToken) => {
        req.user = decodedToken;
        res.locals.user = decodedToken;
        res.locals.isAuthenticated = true;

        next();
      })
      .catch((err) => {
        res.clearCookie(AUTH_COOKIE_NAME);
        res.status(401).render("404");
      });
  } else {
    next();
  }
};

exports.isAuth = function (req, res, next) {
  if (req.user) {
    next();
  } else {
    res.render("auth/login");
  }
};

exports.isGuest = function (req, res, next) {
  if (!req.user) {
    next();
  } else {
    res.redirect("/");
  }
};
