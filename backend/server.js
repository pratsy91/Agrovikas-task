const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const DB = require("./config/db.js");
DB.connectDB();
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.listen(5000);
