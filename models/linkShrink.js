const mongoose = require("mongoose");

const linkShrinkSchema = new mongoose.Schema({
  originalLink: {
    type: String,
    required: true,
  },
  shortLink: {
    type: String,
    required: true,
  },
});
