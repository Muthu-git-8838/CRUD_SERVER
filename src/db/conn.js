const mongoose = require("mongoose");
require("dotenv").config();
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Data_base Connected Succefully");
  })
  .catch(() => {
    console.log("Oops... Failed to connect >>>>");
  });
