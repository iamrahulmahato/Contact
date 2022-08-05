

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGOURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "error is showing"));

db.once("open", function () {
  console.log("Mongoose is working");
});
