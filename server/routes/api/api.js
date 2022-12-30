const express = require('express');
let router = express.Router();

const { checkLoggedIn } = require("../../middlewares/auth");

///////////// GET USER MODEL
const { Admin } = require("../../models/adminModel");
const { User } = require('../../models/userModel');
const { Stats } = require('../../models/statsModel');
const { ContactUs } = require('../../models/contactModel');

router.route("/register").post(async (req, res) => {
  try {

    if (await Admin.isEmailTaken(req.body.email)) {
      return res.status(400).json({ message: "This email is already taken!" });
    }

    const admin = new Admin({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name
    })

    const doc = await admin.save();

    return res.status(200).json(doc);
  } catch (error) {
    console.log(error)
    return res.status(400).json({
      message: "Error",
      error: error
    })
  }
});

router.route("/addalumni").post(async (req, res) => {
  try {

    if (await User.isRegistrationNumberTaken(req.body.registrationNumber)) {
      return res.status(400).json({ message: "This registration number is already taken!" });
    }

    // Create User
    const user = new User({
      registrationNumber: req.body.registrationNumber,
      password: req.body.password
    });

    const doc = await user.save();

    return res.status(200).json(doc);
  } catch (error) {

    return res.status(400).json({
      message: "Error",
      error: error
    })
  }
});

router.route("/getalumni").get(async (req, res) => {
  try {

    const alumnis = await User.find();

    return res.status(200).json(alumnis);

  } catch (error) {
    return res.status(400).json({
      message: "Error",
      error: error
    })
  }
});

router.route("/getalumnibyid").post(async (req, res) => {
  try {

    const alumnis = await User.findById(req.body.id);

    return res.status(200).json(alumnis);

  } catch (error) {
    return res.status(400).json({
      message: "Error",
      error: error
    })
  }
})

router.route("/adminlogin").post(async (req, res) => {
  try {

    const admin = await Admin.findOne({ email: req.body.email });
    if (!admin) return res.status(400).json({ message: "No account associated with this email!" });

    if (!req.body.password) return res.status(400).json({ message: "Wrong password!" });

    const comparePassword = await admin.comparePassword(req.body.password);
    if (!comparePassword) return res.status(400).json({ message: "Wrong password!" });

    // console.log(admin);
    return res.status(200).json(admin);
  } catch (error) {
    return res.status(400).json({
      message: "Error",
      error: error
    })
  }
});

router.route("/alumnilogin").post(async (req, res) => {
  try {

    const alumni = await User.findOne({ registrationNumber: req.body.registrationNumber });
    if (!alumni) return res.status(400).json({ message: "No account associated with this registration number!" });

    if (!req.body.password) return res.status(400).json({ message: "Wrong password!" });

    const comparePassword = await alumni.comparePassword(req.body.password);
    if (!comparePassword) return res.status(400).json({ message: "Wrong password!" });

    // console.log(admin);
    return res.status(200).json(alumni);
  } catch (error) {
    return res.status(400).json({
      message: "Error",
      error: error
    })
  }
});

router.route("/changealumnipass").patch(async (req, res) => {
  try {

    const alumni = await User.findById(req.body.id);

    alumni.password = req.body.newPassword;
    alumni.isPasswordComputerGenerated = false;
    const doc = await alumni.save();

    return res.status(200).json(doc);
  } catch (error) {
    return res.status(400).json({
      message: "Error",
      error: error
    })
  }
});

router.route('/deletealumni').delete(async (req, res) => {
  try {

    const deletedUser = await User.deleteOne({ _id: req.body._id });

    return res.status(200).json(deletedUser);
  } catch (error) {
    return res.status(400).json({
      message: "Error",
      error: error
    });
  }
});


router.route("/updatealumni").patch(async (req, res) => {
  try {

    const doc = await User.findByIdAndUpdate(req.body.id, req.body.updateData, { new: true });

    return res.status(200).json(doc);
  } catch (error) {
    return res.status(400).json({
      message: "Error",
      error: error
    })
  }
});

router.route("/getstats").get(async (req, res) => {
  try {

    const stats = await Stats.findById("63ac2c4c41dd5adba993afec");

    return res.status(200).json(stats);

  } catch (error) {

    return res.status(400).json({
      message: "Error",
      error: error
    })
  }
});

router.route("/submitcontactus").post(async (req, res) => {
  try {
    const contact = new ContactUs({
      name: req.body.name,
      email: req.body.email,
      address: req.body.address,
      subject: req.body.subject,
      message: req.body.message
    })

    const doc = await contact.save();

    return res.status(200).json(doc);
  } catch (error) {

    return res.status(400).json({
      message: "Error",
      error: error
    })
  }
});


module.exports = router;