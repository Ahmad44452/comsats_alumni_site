const mongoose = require('mongoose');
const validator = require('validator');
const aggregatePaginate = require("mongoose-aggregate-paginate-v2");


const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email")
      }
    }
  },
  address: {
    type: String,
    trim: true
  },
  subject: {
    type: String,
    trim: true
  },
  message: {
    type: String,
    trime: true
  },
  date: {
    type: Date,
    default: Date.now
  }

});

contactSchema.plugin(aggregatePaginate);
const ContactUs = mongoose.model("ContactUs", contactSchema);

module.exports = { ContactUs };