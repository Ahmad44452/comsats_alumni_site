require('dotenv').config();
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required!"],
    unique: [true, "Email already exists!"],
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email")
      }
    }
  },
  password: {
    type: String,
    required: [true, "Password is required!"],
    trim: true
  },
  name: {
    type: String,
    required: [true, "Name is required!"],
    trim: true
  },
  role: {
    type: String,
    required: [true, "Role is required!"],
    enum: ['Developer', 'HOD', 'Admin'],
    default: 'Admin'
  }
})

adminSchema.methods.comparePassword = async function (enteredPassword) {
  let user = this;
  const match = enteredPassword === user.password;
  return match;
}

adminSchema.statics.isEmailTaken = async function (enteredEmail) {
  const user = await this.findOne({ email: enteredEmail });
  return !!user;
}


const Admin = mongoose.model("Admin", adminSchema);
module.exports = { Admin };