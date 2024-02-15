const Creatures = require("../models/Creatures");
const User = require("../models/User");

//Gives all the creatures.
exports.getAll = () => Creatures.find().populate("owner").lean();

//Gives the creature by id.
exports.getOne = (creaturesId) =>
  Creatures.findById(creaturesId).populate("owner").lean(); //

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
  creatures.commentList.push(commentData);
  return creatures.save();
};
//Gives the owner of the creature.
exports.findOwner = (userId) => User.findById(userId).lean();

//Gives all the creatures that the user has created.
exports.getMyCreatedPost = (userId) => Creatures.find({ owner: userId }).lean();
