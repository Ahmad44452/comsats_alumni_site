const mongoose = require("mongoose");


const imageSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: [true, 'Image heading is required']
  },
  urls: {
    type: [String],
    required: [true, 'Image is required']
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Image = mongoose.model("Image", imageSchema);
module.exports = { Image };