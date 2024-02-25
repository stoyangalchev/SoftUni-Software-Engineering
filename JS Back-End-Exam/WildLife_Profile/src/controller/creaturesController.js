const router = require("express").Router();
const creaturesServices = require("../services/creaturesServices");
const creatures = require("../models/Creatures");
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

  console.log(req.user);
  let creatures = await creaturesServices
    .getOne(creaturesId)
    .populate("voted.user")
    .lean();
  let isOwner = req.user?._id == creatures.owner._id;
  let isVoted =
    req.user && creatures.voted.some((c) => c.user._id == req.user._id);

  res.render("creatures/details", { creatures, isOwner, isVoted });
  // let creaturesData = await  creatures.toObject()

  // let creaturesOwner = await creaturesServices
  //   .findOwner(creatures.owner)
  //   .lean();

  // console.log(creatureInfo);

  // let comment = creatures.getComment();
  // let isVoted = req.user && comment.some((c) => c._id == req.user?._id);

  // res.render("creatures/details", {
  //   ...creatures,
  //   isOwner,

  //   creaturesOwner,
  //   creatureInfo,
  //   emails,
  // });
});

// async function isOwner(req, res, next) {
//   let creatures = await creaturesServices.getOne(req.params.id);

//   if (creatures.owner == req.user._id) {
//     res.redirect(`/creatures/${req.params.id}/details`);
//   } else {
//     next();
//   }
// }

// async function checkIsOwner(req, res, next) {
//   let creatures = await creaturesServices.getOne(req.params.id);

//   if (creatures.owner == req.user._id) {
//     next();
//   } else {
//     res.redirect(`/creatures/${req.params.id}/details`);
//   }
// }

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
    console.log(reqBody);
    const creatures = await creaturesServices.getOne(req.params.id).lean(); ///lean() is IMPORTANT.

    await creaturesServices.updateOne(creatures, reqBody).lean();

    res.redirect(`/creatures/${req.params.id}/details`);
  } catch (error) {
    console.log(getErrorMessage(error));
    res.render("creatures/create", { error: getErrorMessage(error) });
  }
});

router.post("/:id/comments", isAuth, async (req, res) => {
  const creaturesId = req.params.id;
  const message = req.body.message;
  const user = req.user._id;

  await creaturesServices.addComment(creaturesId, { user, message });

  res.redirect(`/creatures/${creaturesId}/details`);
});

router.get("/:id/voted", async (req, res) => {
  await creaturesServices.vote(req.params.id, req.user._id);

  await creatures.save();

  res.redirect(`/creatures/${req.params.id}/details`);
});

module.exports = router;
