require('dotenv').config();
const mongoose = require("mongoose");
const validator = require("validator");
const aggregatePaginate = require("mongoose-aggregate-paginate-v2");


const userSchema = new mongoose.Schema({
  registrationNumber: {
    type: String,
    required: [true, "Registration number is required!"],
    unique: [true, "Registration number already exists!"],
    trim: true,
    uppercase: true,
  },
  password: {
    type: String,
    trim: true
  },
  name: {
    type: String,
    trim: true
  },
  cnic: {
    type: String,
    trim: true,
  },
  department: {
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
  isEmployed: {
    type: Boolean,
    default: false
  },
  sector: {
    type: String,
    trim: true
  },
  supervisorName: {
    type: String,
    trim: true
  },
  officeEmail: {
    type: String,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email")
      }
    }
  },
  contactNumber: {
    type: String,
    trim: true
  },
  batch: {
    type: String,
    trim: true
  },
  positionHeld: {
    type: String,
    trim: true
  },
  dateOfJoining: {
    type: Date,
    trim: true,
    default: Date.now
  },
  organizationName: {
    type: String,
    trim: true
  },
  supervisorPosition: {
    type: String,
    trim: true
  },
  countryName: {
    type: String,
    trim: true
  }
});


userSchema.methods.comparePassword = async function (enteredPassword) {
  let user = this;
  const match = enteredPassword === user.password;
  return match;
};

userSchema.statics.isRegistrationNumberTaken = async function (enteredRegNo) {
  const user = await this.findOne({ registrationNumber: enteredRegNo });
  return !!user;
}

userSchema.plugin(aggregatePaginate);
const User = mongoose.model("User", userSchema);

module.exports = { User };