const router = require("express").Router();
const ToDoController = require("../controller/todo.controller");

router.post("/createToDo", ToDoController.createToDo);

router.get("/getUserToDoListAll", ToDoController.getToDoListAll);

// router.get("/getUserToDoList/:userId", ToDoController.getToDoList);
router.post("/getUserToDoList", ToDoController.getToDoList);

router.post("/deleteToDo", ToDoController.deleteToDo);

module.exports = router;
