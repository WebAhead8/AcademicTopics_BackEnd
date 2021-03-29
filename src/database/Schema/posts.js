const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema and Model

const PostsSchema = new Schema({
  title: String,
  user: String,
  admissionRequirements: Array,
});

const PostName = mongoose.model("postname", PostSchema);

module.exports = PostName;
