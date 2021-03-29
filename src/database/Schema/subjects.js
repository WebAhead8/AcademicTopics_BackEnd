const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema and Model

const SubjectSchema = new Schema({
  name: String,
  category: String,
  admissionRequirements: Array,
});

const SubjectName = mongoose.model("subjectname", SubjectSchema);

module.exports = SubjectName;
