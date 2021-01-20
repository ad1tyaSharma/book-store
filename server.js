//imports
const express = require("express");
const path = require("path");
const ejs = require("ejs");
const expressLayout = require("express-ejs-layouts");
const dotenv = require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3000;
//server
app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}...`);
});
//set template engines as ejs
app.set("view engine", "ejs");
//set static files folder
app.use(express.static("public"));
//app.use(expressLayout);
app.set("views", path.join(__dirname, "/views"));
//routes
app.get("/", (req, res) => {
  res.render("index");
});
