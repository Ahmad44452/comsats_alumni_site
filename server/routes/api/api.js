require('dotenv').config();
const nodemailer = require('nodemailer');
const express = require('express');
let router = express.Router();

const { checkLoggedIn } = require("../../middlewares/auth");

///////////// GET USER MODEL
const { Admin } = require("../../models/adminModel");
const { User } = require('../../models/userModel');
const { Stats } = require('../../models/statsModel');
const { ContactUs } = require('../../models/contactModel');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN
  }
})


router.route('/sendresetpasswordmail').post(async (req, res) => {
  try {
    const registrationNumber = req.body.registrationNumber;

    const user = await User.findOne({ registrationNumber: registrationNumber });

    if (!user)
      return res.status(400).json({ message: "No user found!" });

    if (!user.password)
      return res.status(400).json({ message: "Register first!" });

    if (!user.email)
      return res.status(400).json({ message: "No email has been assigned to this account!" });


    const info = await transporter.sendMail({
      from: process.env.NODEMAILER_EMAIL,
      to: user.email,
      subject: "Reset password",
      text: "Reset password",
      html: `<h1>Reset Password</h1>
      <p>Please click the following link to reset your password:</p>
      <a href="${process.env.FRONTEND_URI}/passwordreset/${user._id}">Reset Password</a>`
    });

    const censorWord = (str) => {
      return str[0] + "*".repeat(str.length - 2) + str.slice(-1);
    }

    const censorEmail = (email) => {
      var arr = email.split("@");
      return censorWord(arr[0]) + "@" + censorWord(arr[1]);
    }

    const censoredMail = censorEmail(user.email);


    return res.status(200).json(`Email sent to ${censoredMail}. Please check your inbox or spam folder!`);
  } catch (error) {
    console.log(error)
    return res.status(400).json({
      message: "Error",
      error: error
    })
  }
});

router.route("/resetpass").post(async (req, res) => {
  try {

    const user = await User.findById(req.body.id);

    if (!user)
      return res.status(400).json({ message: "Invalid link" });

    user.password = req.body.newPassword;
    await user.save();

    return res.status(200).json("Your password has been updated!");
  } catch (error) {
    console.log(error)
    return res.status(400).json({
      message: "Error",
      error: error
    })
  }
});

router.route("/register").post(async (req, res) => {
  try {

    if (await Admin.isEmailTaken(req.body.email)) {
      return res.status(400).json({ message: "This email is already taken!" });
    }

    const admin = new Admin({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
      role: req.body.role
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

router.route("/gethods").get(async (req, res) => {
  try {

    const hods = await Admin.find({ role: 'HOD' })
    // const alumnis = await User.find();

    return res.status(200).json(hods);

  } catch (error) {
    return res.status(400).json({
      message: "Error",
      error: error
    })
  }
});

router.route("/getstatistics").get(async (req, res) => {
  try {


    const allUsers = await User.find();

    const departmentStats = [];
    const batchStats = [];
    const employedStats = [{ name: 'employed', value: 0 }, { name: 'unemployed', value: 0 }];

    for (let user of allUsers) {

      // GATHER DEPARTMENT VALUES
      let isFound = false;
      for (let depStat of departmentStats) {
        if (depStat.name === user.department) {
          depStat.value++;
          isFound = true;
          break;
        }
      }

      if (user.department && !isFound) {
        departmentStats.push({
          name: user.department,
          value: 1
        })
      }

      // GATHER BATCH VALUES
      isFound = false;
      for (let batchStat of batchStats) {
        if (batchStat.name === user.batch) {
          batchStat.value++;
          isFound = true;
          break;
        }
      }

      if (user.batch && !isFound) {
        batchStats.push({
          name: user.batch,
          value: 1
        })
      }

      // EMPLOYED STATS
      if (user.isEmployed) {
        employedStats[0].value++;
      } else {
        employedStats[1].value++;
      }
    }


    return res.status(200).json({ departmentStats, batchStats, employedStats });

  } catch (error) {
    console.log(error)
    return res.status(400).json({
      message: "Error",
      error: error
    })
  }
});

router.route("/getadmins").get(async (req, res) => {
  try {

    const hods = await Admin.find({ role: 'Admin' })
    // const alumnis = await User.find();

    return res.status(200).json(hods);

  } catch (error) {
    console.log(error)
    return res.status(400).json({
      message: "Error",
      error: error
    })
  }
});

router.route('/deleteadmin').delete(async (req, res) => {
  try {

    const deletedAdmin = await Admin.deleteOne({ _id: req.body._id });

    return res.status(200).json(deletedAdmin);
  } catch (error) {
    return res.status(400).json({
      message: "Error",
      error: error
    });
  }
});

router.route("/alumnisignup").post(async (req, res) => {
  try {

    const foundAlumni = await User.findOne({ registrationNumber: req.body.registrationNumber })

    if (!foundAlumni)
      return res.status(400).json({ message: "Registration number does not exist." });

    if (foundAlumni.password)
      return res.status(400).json({ message: "User already exists. Please login." });

    if (foundAlumni.cnic !== req.body.cnic)
      return res.status(400).json({ message: "Wrong information entered." });

    foundAlumni.password = req.body.password;

    const doc = await foundAlumni.save();

    return res.status(200).json(doc);
  } catch (error) {

    return res.status(400).json({
      message: "Error",
      error: error
    })
  }
});

router.route("/batchalumniupload").post(async (req, res) => {
  try {

    const data = req.body.data;

    for (let i = 0; i < data.length; i++) {
      let currentAlumni = await User.findOne({ registrationNumber: data[i].registrationNumber });

      if (data[i].isEmployed && data[i].isEmployed.toLowerCase() === 'yes') {
        data[i].isEmployed = true;
      } else {
        data[i].isEmployed = false;
      }

      if (!currentAlumni) {
        // create new alumni
        const user = new User(data[i]);
        await user.save();
      } else {
        // currentAlumni = item;
        // await currentAlumni.save();
        await currentAlumni.updateOne(data[i])
      }


    }

    return res.status(200).json("Data updated");

  } catch (error) {

    return res.status(400).json({
      message: "Error",
      error: error
    })
  }
})

router.route("/getalumni/:pageno").get(async (req, res) => {
  try {

    var myAggregate = User.aggregate()
    const alumnis = await User.aggregatePaginate(myAggregate, { page: req.params.pageno || 1, limit: 10 })
    // const alumnis = await User.find();

    return res.status(200).json(alumnis);

  } catch (error) {
    console.log(error)
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
    if (!admin || admin.role !== req.body.loginType) return res.status(400).json({ message: "No account associated with this email!" });

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

    const stats = await Stats.findById("63aa98768e3df1c0311b0564");

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

router.route("/getcontacted/:pageno").get(async (req, res) => {
  try {
    var myAggregate = ContactUs.aggregate()
    const peopleContacted = await ContactUs.aggregatePaginate(myAggregate, { page: req.params.pageno || 1, limit: 10, sort: { _id: 'desc' } })

    return res.status(200).json(peopleContacted);

  } catch (error) {
    return res.status(400).json({
      message: "Error",
      error: error
    })
  }
});

router.route("/getcontactedbyid").post(async (req, res) => {
  try {

    const contacted = await ContactUs.findById(req.body.id);

    return res.status(200).json(contacted);

  } catch (error) {
    return res.status(400).json({
      message: "Error",
      error: error
    })
  }
})

router.route('/deletecontacted').delete(async (req, res) => {
  try {

    const deleted = await ContactUs.deleteOne({ _id: req.body._id });

    return res.status(200).json(deleted);
  } catch (error) {
    return res.status(400).json({
      message: "Error",
      error: error
    });
  }
});


module.exports = router;