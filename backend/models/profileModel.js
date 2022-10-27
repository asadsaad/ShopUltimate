import mongoose from "mongoose";

const profile = mongoose.Schema({
  bio: {
    type: String,
  },
  bio: {
    type: Number,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "Users",
    require: true,
  },
});

const Profile = mongoose.model("Profile", profile);
module.exports = Profile;
