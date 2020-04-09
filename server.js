const express = require("express");
const mongoose = require("mongoose");
const linkShrink = require("./models/linkShrink");
const app = express();

mongoose.connect("mongodb://localhost/linkShrink", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/shortLinks", (req, res) => {
  linkShrink.create({ full: req.body.originalURL });
});

app.listen(process.env.PORT || 4000);
