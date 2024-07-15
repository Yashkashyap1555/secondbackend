const express = require("express")
const Router =  express.Router();

const user = require("../controller/userController")
Router.post("/register", user.userRegister)

module.exports = Router
