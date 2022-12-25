require('dotenv').config();
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



const userSchema = new mongoose.Schema({
  registrationNumber: {
    type: String,
    required: [true, "Registration number is required!"],
    trim: true,
    uppercase: true,
  },
  password: {
    type: String,
    required: [true, "Password is required!"],
    trim: true
  },
  name: {
    type: String,
    trim: true
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
  graduationYear: {
    type: String,
    trim: true
  },
  positionHeld: {
    type: String,
    trim: true
  },
  dateOfJoining: {
    type: String,
    trim: true
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
  },
  isPasswordComputerGenerated: {
    type: Boolean,
    default: true
  }
});

// userSchema.pre("save", async function (next) {
//   let user = this;
//   if (user.isModified('password')) {
//     const salt = await bcrypt.genSalt(10);
//     const hash = await bcrypt.hash(user.password, salt);
//     user.password = hash;
//   }
//   next();
// })

// userSchema.methods.generateToken = function () {
//   let user = this;
//   const userObj = { _id: user._id.toHexString(), email: user.email };
//   const token = jwt.sign(userObj, process.env.DB_SECRET, { expiresIn: '1d' });
//   return token;
// }

userSchema.methods.comparePassword = async function (enteredPassword) {
  let user = this;
  // const match = await bcrypt.compare(enteredPassword, user.password);
  const match = enteredPassword === user.password;
  return match;
};

userSchema.statics.isRegistrationNumberTaken = async function (enteredRegNo) {
  const user = await this.findOne({ registrationNumber: enteredRegNo });
  return !!user;
}


const User = mongoose.model("User", userSchema);
module.exports = { User };