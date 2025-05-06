require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose.connect(process.env.MONGO_URI);
};

module.exports = connectDB;
