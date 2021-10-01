const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: { type: Schema.Types.ObjectId },
  Name: { type: String, required: true },
  Salary: { type: String, required: true },
  Gender: { type: String, required: true },
  birthDate: { type: Date, required: true },
});

module.exports = mongoose.model("Users", userSchema);

/*
const user = new User({
  name: 'Jean-Luc Picard',
  lastActiveAt: '2002-12-09'
});
*/
