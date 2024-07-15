const express = require("express");
const Router = express.Router();

const todo = require("../controller/todolistController")
Router.post("/todolist", todo.todoUser)
Router.get("/getlist", todo.getAlllist)
Router.delete("/deletetodolist", todo.todoListDelete)
Router.post("/profiletodolist", todo.todoListProfile)

module.exports = Router