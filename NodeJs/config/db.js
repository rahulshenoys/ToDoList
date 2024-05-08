const mongoose = require("mongoose");

const connection = mongoose
  .createConnection(
    "mongodb+srv://rahulshenoy:rahulshenoy@todolist.q1lxi63.mongodb.net/newToDo"
  )
  .on("open", () => {
    console.log("MondgoDb connected");
  })
  .on("error", () => {
    console.log("MongoDb connection error");
  });

module.exports = connection;
