const express = require("express");
const bodyParser = require("body-parser");
const UserRoute = require("./routes/user.route");
const ToDoRoute = require("./routes/todo.route");
const cors = require("cors");
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.use("/", UserRoute);
app.use("/", ToDoRoute);

module.exports = app;
