const mongoose = require("mongoose");
require("dotenv").config();

const dbConnection = async () => {
  try {
    mongoose.connect(process.env.DATABASE_URI);
    console.log("DataBase Connected!");
  } catch (error) {
    throw new Error("DataBase Connection error : ", error);
  }
};

module.exports = { dbConnection };
