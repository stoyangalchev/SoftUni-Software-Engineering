const router = require("express").Router();

const homeController = require("./controller/homeController");
const authController = require("./controller/authController");
const creaturesController = require("./controller/creaturesController");

router.use("/", homeController);
router.use("/auth", authController);
router.use("/creatures", creaturesController);
router.use("/profile", homeController);
router.use("/*", (req, res) => {
  res.status(404).render("404");
});

module.exports = router;
