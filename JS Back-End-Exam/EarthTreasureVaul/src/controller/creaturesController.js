const router = require("express").Router();
const creaturesServices = require("../services/creaturesServices");

const { isAuth } = require("../middleware/authMiddleware");
const { log } = require("util");
const { hash } = require("bcrypt");

router.get("/all-posts", async (req, res) => {
  let creatures = await creaturesServices.getAll();

  res.render("creatures/all-posts", { creatures });
});

router.get("/create", isAuth, (req, res) => {
  res.render("creatures/create");
});

router.post("/create", isAuth, async (req, res) => {
  try {
    await creaturesServices.create({ ...req.body, owner: req.user._id });
    res.redirect("/creatures/all-posts");
  } catch (error) {
    console.log(error);
    res.render("creatures/create", { error: getErrorMessage(error) });
  }
});

function getErrorMessage(error) {
  let errorsArr = Object.keys(error.errors);

  if (errorsArr.length > 0) {
    return error.errors[errorsArr[0]];
  } else {
    return error.message;
  }
}

router.get("/:id/details", async (req, res) => {
  let creaturesId = req.params.id;
  let creatures = await creaturesServices
    .getOne(creaturesId)
    .populate("donations.user")
    .lean();

  let isOwner = req.user?._id == creatures.owner._id;

  let isBouth =
    req.user && creatures.donations.some((c) => c.user._id == req.user?._id);
  console.log(isBouth);

  res.render("creatures/details", { creatures, isOwner, isBouth });
});



router.get("/:id/delete", isAuth, async (req, res) => {
  try {
    await creaturesServices.delete(req.params.id);
    res.redirect("/creatures/all-posts");
  } catch (error) {
    res.render("creatures/create", { error: getErrorMessage(error) });
  }
});

router.get("/:id/edit", isAuth, async (req, res) => {
  let creatures = await creaturesServices.getOne(req.params.id);

  res.render("creatures/edit", { creatures });
});

router.post("/:id/edit", isAuth, async (req, res) => {
  try {
    const reqBody = req.body;

    const creatures = await creaturesServices.getOne(req.params.id).lean(); ///lean() is IMPORTANT.

    await creaturesServices.updateOne(creatures, reqBody).lean();

    res.redirect(`/creatures/${req.params.id}/details`);
  } catch (error) {
    console.log(getErrorMessage(error));
    res.render("creatures/create", { error: getErrorMessage(error) });
  }
});

router.get("/:id/buy", isAuth, async (req, res) => {
  try {
    const creaturesId = req.params.id;

    const user = req.user._id;

    await creaturesServices.buy(creaturesId, { user });

    res.redirect(`/creatures/${creaturesId}/details`);
  } catch (error) {
    console.log(getErrorMessage(error));
    res.redirect(`/creatures/${creaturesId}/details`, {
      error: getErrorMessage(error),
    });
  }
});

router.get("/search",  async (req, res) => {
  let creaturesName = req.query.searchName;
  let creturesPlatform = req.query.platform;

  let creatures = await creaturesServices.search(
    creaturesName,
    creturesPlatform
  );

  if (creatures == undefined) {
    creatures = await creaturesServices.getAll();
  }

  res.render("search", { creatures });
});


module.exports = router;
