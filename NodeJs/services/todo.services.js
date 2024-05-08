const { deleteToDo } = require("../controller/todo.controller");
const ToDoModel = require("../model/todo.model");

class ToDoService {
  static async createToDo(userId, title, description) {
    const createToDo = new ToDoModel({ userId, title, description });
    return await createToDo.save();
  }

  //new code
  static async getUserToDoListAll() {
    const todoList = await ToDoModel.find();
    return todoList;
  }

  static async getUserToDoList(userId) {
    const todoList = await ToDoModel.find({ userId });
    return todoList;
  }

  static async deleteToDo(id) {
    const deleted = await ToDoModel.findByIdAndDelete({ _id: id });
    console.log("to do service:", deleted);
    return deleted;
  }
}

module.exports = ToDoService;
