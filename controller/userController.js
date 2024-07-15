const userModel = require("../model/userModel");
const userRegister = async (req, res) => {
    try {
    const {name, email, password, phoneNumber} = req.body
    if(!name || !email || !password || !phoneNumber){
        return res.status(403).json({
            message :  "Please fill all detail",
        })
    }
    const newData = await userModel.create({
        name :  name,
        email : email,
        password : password,
        phoneNumber : phoneNumber,
    })

    res.status(201).json({
        message : "user created successful",
        data : newData
    })
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};
module.exports = {
  userRegister,
};
