const mongoose = require("mongoose");

let creaturesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Name is required!"],
  },
  type: {
    type: String,
    required: [true, "Type is required!"],
  },
  certificate: {
    type: String,
    required: [true, "Certificate is required!"],
  },
  image: {
    type: String,
    required: true,
    validate: [/^https?:\/\//i, "Invalid image URL!"],
  },
  description: {
    type: String,
    required: [true, "Description is required!"],
  },
  price: {
    type: Number,
    required: [true, "Price is required!"],
  },
  signUpList: [
    {
      user: {
        type:  mongoose.Types.ObjectId,
        required: "true",
        ref: "User",
      },
    },
  ],
  owner: {
    type:  mongoose.Types.ObjectId,
    ref: "User",
  },
});



// creaturesSchema.method("getComment", function () {
//   return this.commentList.map((x) => x._id);
// });

let Creatures =  mongoose.model("Creatures", creaturesSchema);

module.exports = Creatures;
