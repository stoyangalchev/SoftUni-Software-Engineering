const Creatures = require("../models/Creatures");
const User = require("../models/User");

//Gives all the creatures.
exports.getAll = () => Creatures.find().populate("owner").lean();

//Gives the creature by id.
exports.getOne = (creaturesId) =>
  Creatures.findById(creaturesId)
    .populate("owner")
    .populate("signUpList")
    .lean(); //

//Creates a new creature.
exports.create = (creaturesData) => Creatures.create(creaturesData);

//Deletes the creature.
exports.delete = (creaturesId) => Creatures.findByIdAndDelete(creaturesId);

//Gives the creature a new data.
exports.updateOne = (creaturesId, creaturesData) =>
  Creatures.findByIdAndUpdate(creaturesId, creaturesData);

//Gives the creature a comment.
exports.addComment = async (creaturesId, commentData) => {
  const creatures = await Creatures.findById(creaturesId);
  creatures.signUpList.push(commentData);
  return creatures.save();
};
//Gives the owner of the creature.
exports.findOwner = (userId) => User.findById(userId).lean();

exports.getMyCreatedPost = (userId) => Creatures.find({ owner: userId }).lean();
//Gives all the creatures that the user has created.
exports.signUpListAll = (userId) => Creatures.find({ user: userId }).lean();

exports.signup = async (creaturesId, commentData) => {
  const creatures = await Creatures.findById(creaturesId);

  creatures.signUpList.push(commentData);
  creatures.seats -= 1;

  return creatures.save();
};

//throw new ObjectParameterError(obj, "obj", "Document");??

exports.getMySignUp = (userId) => Creatures.find().lean();

exports.getMyCreatedCourse = (userId) =>
  Creatures.find({ owner: userId }).lean();

exports.getOne = (courseId) =>
  Creatures.findById(courseId).populate("signUpList").lean();
