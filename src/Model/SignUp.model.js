const mongoose = require("mongoose");

const signUpSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const signUpModel = mongoose.model("user", signUpSchema);

module.exports = signUpModel;
