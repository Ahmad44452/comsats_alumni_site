const cloudinary = require('cloudinary').v2;
const express = require('express');
let router = express.Router();

const { Image } = require('../../models/imgModel');
const { Event } = require('../../models/eventModel');

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


router.route("/addevent").post(async (req, res) => {
  try {

    const uploadedImage = await cloudinary.uploader.upload(req.body.image, {
      public_id: `${Date.now()}`,
      resource_type: "auto"
    });

    const url = uploadedImage.secure_url;

    const event = new Event({
      name: req.body.name,
      location: req.body.location,
      timing: req.body.timing,
      description: req.body.description,
      image: url
    })

    const doc = await event.save();

    return res.status(200).json(doc);

  } catch (error) {

    return res.status(400).json({
      message: "Error",
      error: error
    })
  }
});


router.route("/getevents").get(async (req, res) => {
  try {

    const allEvents = await Event.find().sort({ _id: -1 });


    return res.status(200).json(allEvents);

  } catch (error) {

    return res.status(400).json({
      message: "Error",
      error: error
    })
  }
});

router.route('/deleteevent').delete(async (req, res) => {
  try {

    const deletedEvent = await Event.deleteOne({ _id: req.body._id });

    return res.status(200).json(deletedEvent);
  } catch (error) {
    return res.status(400).json({
      message: "Error",
      error: error
    });
  }
});


module.exports = router;