const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
// const Route = require("./routes/userRoute");
const Route = require("./routes/todolistRoute");
const cors = require("cors");
const port = 3001;
app.use(cors());
mongoose.connect("mongodb://127.0.0.1:27017/Secondbackend");
const connection = mongoose.connection;
connection.once("open", (req, res) => {
  console.log("mongodb connected ");
});

app.use(cors());
app.use(bodyparser.json());
app.use("/", Route);

app.listen(port, (req, res) => {
  console.log(`server connected successfully ${port}`);
});
