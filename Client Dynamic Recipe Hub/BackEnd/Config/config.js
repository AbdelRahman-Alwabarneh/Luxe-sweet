const mongoose = require("mongoose");
require("dotenv").config();

const url = process.env.DATABASE;

mongoose.connect(url);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected successfully to MongoDB");
});

module.exports = mongoose;
