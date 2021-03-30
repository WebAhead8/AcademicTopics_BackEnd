const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema and Model

const PostSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  title: { type: String },
  content: { type: String },
});

const PostName = mongoose.model("postname", PostSchema);

module.exports = PostName;
