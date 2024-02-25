const router = require("express").Router();
const { isAuth } = require("../middleware/authMiddleware");
const creaturesServices = require("../services/creaturesServices");

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/profile", isAuth, async (req, res) => {
  let userId = req.user._id;

  let creatures = await creaturesServices.getMyCreatedPost(userId);
  let owner = await creaturesServices.findOwner(userId)
  console.log(creatures);

  res.render("profile", {
    creatures,
    owner,
    creaturesCount: creatures.length,
  });
});

module.exports = router;
