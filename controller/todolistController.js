const todoModel = require("../model/todolistModel");
const todoUser = async (req, res) => {
  try {
    const { task, status, deadline } = req.body;
    console.log(req.body , "body")
    
    if (!task || !status || !deadline) {
      return res.status(403).json({
        message: "please fill the detail",
      });
    }
    const newuser = await todoModel.create({
      task: task,
      status: status,
      deadline: deadline,
    });
    res.status(201).json({
      message: "Your task is added",
      data: newuser,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

const getAlllist = async (req, res) => {
  try {
    const todoUserList = await todoModel.find({});
    if (todoUserList?.length === null) {
      return res.status(404).json({
        message: "database is empty",
      });
    }
    res.status(200).json({
      message: "todo data list retrived successfully",
      joy: todoUserList,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

const todoListDelete = async (req, res) => {
  try {
    const { task } = req.body;

    console.log(task, "task")
    const todoUserDelete = await todoModel.findOneAndDelete({ task: task });
    if (todoUserDelete) {
      return res.status(200).json({
        message: "your list data deleted successfully",
      });
    }
    res.status(200).json({
      message : "success"
    })
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

const todoListProfile = async (req, res) => {
    try {
        const {task} = req.body
        const todoUserProfile = await todoModel.findOne({task : task})
        if(todoUserProfile === null){
            return res.status(404).json({
                message : "your are not register todolist"

            })
        }
        res.status(200).json({
          message : "your todo item list found",
            data : todoUserProfile
        })

    } catch (error) {
        res.status(404).json({
            message :  error.message
        })
        
    }

}

module.exports = {
  todoUser,
  getAlllist,
  todoListDelete,
  todoListProfile
};
