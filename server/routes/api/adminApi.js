const express = require('express');
let router = express.Router();

const { checkLoggedIn } = require("../../middlewares/auth");

///////////// GET USER MODEL
const { Admin } = require("../../models/adminModel");

router.route("/register").post(async (req, res) => {
  try {
    // Check if email is taken
    if (await Admin.isEmailTaken(req.body.email)) {
      return res.status(400).json({ message: "This email is already taken!" });
    }

    // Create User
    const admin = new Admin({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name
    })

    // Generate Token
    // const token = admin.generateToken();
    const doc = await admin.save();
    console.log(doc);
    // Send response
    return res.status(200).json(doc);
  } catch (error) {
    console.log(error)
    return res.status(400).json({
      message: "Error",
      error: error
    })
  }
})

router.route("/login").post(async (req, res) => {
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
})

router.route("/sample").get(async (req, res) => {
  return res.status(200).json({
    workin: true
  })
})

// router.route("/auth").get(checkLoggedIn, async (req, res) => {
//   res.status(200).json(getUserProps(req.user));
// })

// router.route('/generateNumbers').get(async (req, res) => {
//   try {
//     const arr = [];
//     for (let i = 1; i <= 10; i++) {
//       let user;
//       let number;

//       do {
//         number = '03' + (Math.floor(Math.random() * (999999999 - 111111111) + 111111111)).toString();
//         user = await User.findOne({ simNumber: number });
//       } while (user);

//       arr.push(number);
//     }

//     return res.status(200).json(arr);
//   } catch (error) {
//     res.status(400).json({
//       message: "Error",
//       error: error
//     })
//   }
// })

// router.route('/registerNumber').patch(checkLoggedIn, async (req, res) => {
//   try {
//     const user = await User.findOne({ email: req.user.email });
//     if (user.simStatus === 'notAlloted') {
//       user.simStatus = "unactivated";
//       user.simNumber = req.body.simNumber;
//       user.firstname = req.body.firstname;
//       user.lastname = req.body.lastname;
//       user.cnic = req.body.cnic;
//       user.address = req.body.address;
//     }

//     const doc = await user.save();
//     return res.status(200).json(getUserProps(doc));
//   } catch (error) {
//     return res.status(400).json({
//       message: "Error",
//       error: error
//     })
//   }
// })

// router.route('/activatesim/:id').get(async (req, res) => {
//   try {
//     const id = req.params.id;
//     const user = await User.findById(id);
//     if (!user) return res.status(400).send(`<html style="background-color: #000"><body><h1 style="color: #fff">Invalid URL</h1></body></html>`);

//     user.simStatus = 'activated';
//     user.save();
//     return res.status(200).send(`<html style="background-color: #000"><body><h1 style="color: #fff">Sim Activated. Refresh your dashboard!</h1></body></html>`);
//   } catch (error) {
//     return res.status(400).send(`<html style="background-color: #000"><body><h1 style="color: #fff">Invalid URL</h1></body></html>`);
//   }
// })

const getAdminProps = (adminObj) => ({
  _id: adminObj._id,
  email: adminObj.email,
  firstname: adminObj.firstname,
  lastname: adminObj.lastname,
  cnic: adminObj.cnic,
  simNumber: adminObj.simNumber,
  simStatus: adminObj.simStatus,
  address: adminObj.address
})

module.exports = router;