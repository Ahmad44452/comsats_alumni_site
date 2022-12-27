const mongoose = require("mongoose");


const statsSchema = new mongoose.Schema({
  passedOut: {
    type: Number
  },
  employed: {
    type: Number
  },
  governmentEmployees: {
    type: Number
  },
  seniorManagement: {
    type: Number
  }

});

const Stats = mongoose.model("Stats", statsSchema);
module.exports = { Stats };