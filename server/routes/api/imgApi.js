const cloudinary = require('cloudinary').v2;
const express = require('express');
let router = express.Router();

const { Image } = require('../../models/imgModel');

// Configuration 
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

router.route("/upload").post(async (req, res) => {
  try {
    const urls = [];

    for (let i = 0; i < req.body.images.length; i++) {
      const uploadedImage = await cloudinary.uploader.upload(req.body.images[i], {
        public_id: `${Date.now()}`,
        resource_type: "auto"
      });

      urls.push(uploadedImage.secure_url);
    }

    // const url = await cloudinary.uploader.upload(req.body.image, {
    //   public_id: `${Date.now()}`,
    //   resource_type: "auto"
    // });

    const img = new Image({
      heading: req.body.heading,
      urls: urls
    })

    const doc = await img.save();

    return res.status(200).json(doc);

  } catch (error) {

    return res.status(400).json({
      message: "Error",
      error: error
    })
  }
});

router.route("/getall").get(async (req, res) => {
  try {
    const images = await Image.find().sort({ date: -1 });
    return res.status(200).json(images);
  } catch (error) {
    return res.status(400).json({
      message: "Error",
      error: error
    })
  }
})

router.route('/delete').delete(async (req, res) => {
  try {

    const deletedImg = await Image.deleteOne({ _id: req.body._id });

    return res.status(200).json(deletedImg);
  } catch (error) {
    return res.status(400).json({
      message: "Error",
      error: error
    });
  }
});

module.exports = router;