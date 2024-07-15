const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema(
  {
    task: {
      type: String,
    },
    status: {
      type: String,
    },
    deadline: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);
const newTodo = mongoose.model("todoList", todoSchema);
module.exports = newTodo;
