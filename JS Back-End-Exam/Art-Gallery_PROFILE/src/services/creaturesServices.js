const Creatures = require("../models/Creatures");
const User = require("../models/User");

//Gives all the creatures.
exports.getAll = () => Creatures.find().populate("owner").lean();

//Gives the creature by id.
exports.getOne = (creaturesId) => Creatures.findById(creaturesId).lean();

//Creates a new creature.
exports.create = async (creaturesData) => {
  let creatures = new Creatures(creaturesData);
  let owner = await User.findById(creaturesData.owner);
  owner.publications.push(creatures._id);

  await owner.save();
  await creatures.save();
  return creatures;
};

//Deletes the creature.
exports.delete = (creaturesId) => Creatures.findByIdAndDelete(creaturesId);

//Gives the creature a new data.
exports.updateOne = (creaturesId, creaturesData) =>
  Creatures.findByIdAndUpdate(creaturesId, creaturesData);

//Gives the creature a comment.
// exports.addComment = async (creaturesId, commentData) => {
//   const creatures = await Creatures.findById(creaturesId);
//   creatures.signUpList.push(commentData);
//   return creatures.save();
// };

//Gives the owner of the creature.
exports.findOwner = (userId) => User.findById(userId).lean();

exports.getMyCreatedPost = (userId) => Creatures.find({ owner: userId }).lean();
//Gives all the creatures that the user has created.

exports.vote = async (creaturesId, commentData) => {
  const creatures = await Creatures.findById(creaturesId);

  creatures.votes.push(commentData);

  return creatures.save();
};
exports.sharedpostPushtoUser = async (creaturesId, userId) => {
  const user = await User.findById(userId);

  user.sharedpost.push(creaturesId);

  await user.save();
};

exports.getMyVoteUp = (userId) => Creatures.find({ _id: userId }).lean();

exports.getOneDetailed = (courseId) =>
  Creatures.findById(courseId).populate("votes").lean();
