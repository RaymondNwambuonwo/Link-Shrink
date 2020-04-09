const express = require("express");
const mongoose = require("mongoose");
const linkShrink = require("./models/linkShrink");
const app = express();

mongoose.connect("mongodb://localhost/linkShrink", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/shortLinks", async (req, res) => {
  await linkShrink.create({ full: req.body.originalURL });
  res.redirect("/");
});

app.listen(process.env.PORT || 4000);
