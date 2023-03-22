const mongoose = require("mongoose");


const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Event name is required']
  },
  location: {
    type: String,
    required: [true, 'Event location is required']
  },
  timing: {
    type: String,
    required: [true, 'Event timing is required']
  },
  description: {
    type: String,
    required: [true, 'Event description is required']
  },
  image: {
    type: String,
    required: [true, 'Event image is required']
  }
});

const Event = mongoose.model("Event", eventSchema);
module.exports = { Event };