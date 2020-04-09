const express = require("express");
const mongoose = require("mongoose");
const ShortUrl = require("./models/linkshrink");
const app = express();

mongoose.connect("mongodb://localhost/urlShortener", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  const shortUrls = await ShortUrl.find();
  res.render("index", { shortUrls: shortUrls });
});

app.post("/shortUrls", async (req, res) => {
  await ShortUrl.create({ longLink: req.body.fullUrl });

  res.redirect("/");
});

app.get("/:shortUrl", async (req, res) => {
  const shortUrl = await ShortUrl.findOne({ shortLink: req.params.shortUrl });
  if (shortUrl == null) return res.sendStatus(404);

  shortUrl.timesAccessed++;
  shortUrl.save();

  res.redirect(shortUrl.longLink);
});

app.listen(process.env.PORT || 4000);
