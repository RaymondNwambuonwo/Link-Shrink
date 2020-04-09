const mongoose = require("mongoose");
const shortId = require("shortid");

const shrinkLinkSchema = new mongoose.Schema({
  longLink: {
    type: String,
    required: true,
  },
  shortLink: {
    type: String,
    required: true,
    default: shortId.generate,
  },
  timesAccessed: {
    type: Number,
    required: true,
    default: 0,
  },
});

module.exports = mongoose.model("ShortUrl", shrinkLinkSchema);
