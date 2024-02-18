const router = require("express").Router();
const creaturesServices = require("../services/creaturesServices");

const { isAuth } = require("../middleware/authMiddleware");
const { log } = require("util");

router.get("/all-posts", async (req, res) => {
  let creatures = await creaturesServices.getAll();

  res.render("creatures/all-posts", { creatures });
});

router.get("/create", isAuth, (req, res) => {
  res.render("creatures/create");
});

router.post("/create", isAuth, async (req, res) => {
  try {
    await creaturesServices.create({
      ...req.body,
      owner: req.user._id,
    });

    res.redirect("/"); //change to all-posts //  /creatures/all-posts
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
    .populate("owner")
    .lean();
  let isOwner = req.user?._id == creatures.owner?._id;

  let isVoted =
    req.user && creatures.votes.some((c) => c.user._id == req.user?._id);

  ("");
  let owner = await creaturesServices.findOwner(creatures.owner._id).lean();

  let voteLength = creatures.votes.length;

  creatures.votes
    .map((x) => x.user._id)
    .forEach(async (x) => {
      let user = await creaturesServices.findOwner(x);
      aray.push(` ${user.email}`);
    });
  let aray = [];
  res.render("creatures/details", {
    creatures,
    isOwner,
    isVoted,
    owner,
    voteLength,
    aray,
  });
});

router.get("/:id/vote", async (req, res) => {
  try {
    const creaturesId = req.params.id;

    const user = req.user._id;

    await creaturesServices.vote(creaturesId, { user });
    await creaturesServices.sharedpostPushtoUser(creaturesId, user);
    
    res.redirect(`/creatures/${creaturesId}/details`);
  } catch (error) {
    console.log(getErrorMessage(error));
    res.redirect(`/creatures/${creaturesId}/details`, {
      error: getErrorMessage(error),
    });
  }
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

// router.post("/:id/comments", isAuth, async (req, res) => {
//   const creaturesId = req.params.id;
//   const message = req.body.message;
//   const user = req.user._id;

//   await creaturesServices.addComment(creaturesId, { user, message });

//   res.redirect(`/creatures/${creaturesId}/details`);
// });

module.exports = router;
