const mongoose = require("mongoose");
const shortId = require("shortid");

const linkShrinkSchema = new mongoose.Schema({
  originalLink: {
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
