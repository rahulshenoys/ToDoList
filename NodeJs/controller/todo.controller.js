const ToDoService = require("../services/todo.services");

exports.createToDo = async (req, res, next) => {
  try {
    const { userId, title, description } = req.body;
    let todoData = await ToDoService.createToDo(userId, title, description);
    res.json({ status: true, success: todoData });
  } catch (error) {
    console.log(error, "err---->");
    next(error);
  }
};

exports.getToDoListAll = async (req, res, next) => {
  try {
    let todoData = await ToDoService.getUserToDoListAll();
    console.log("Todo Data:", todoData);
    res.json({ status: true, success: todoData });
  } catch (error) {
    console.log(error, "err---->");
    next(error);
  }
};

exports.getToDoList = async (req, res, next) => {
  try {
    const { userId } = req.body;
    // const userId = req.params.userId;
    let todoData = await ToDoService.getUserToDoList(userId);
    res.json({ status: true, success: todoData });
  } catch (error) {
    console.log(error, "err---->");
    next(error);
  }
};

exports.deleteToDo = async (req, res, next) => {
  try {
    const { id } = req.body;
    let deletedData = await ToDoService.deleteToDo(id);
    res.json({ status: true, success: deletedData });
  } catch (error) {
    console.log(error, "err---->");
    next(error);
  }
};
