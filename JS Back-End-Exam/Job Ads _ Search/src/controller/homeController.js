const router = require("express").Router();
const { log } = require("util");
const { isAuth } = require("../middleware/authMiddleware");
const creaturesServices = require("../services/creaturesServices");

router.get("/", async (req, res) => {
  let creatures = await creaturesServices.getLastThree();
  //find candidates for the last three creatures

  
  res.render("home", { creatures });
});

router.get("/profile", isAuth, async (req, res) => {
  let userId = req.user._id;

  let creatures = await creaturesServices.getMyCreatedPost(userId);
  let owner = await creaturesServices.findOwner(userId);


  res.render("my-posts", {
    creatures,
    owner,
  });
});

module.exports = router;
