// config/ cloudinary.js

require('dotenv').config()

const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
  cloud_name: process.env.cloudName,
  api_key: process.env.cloudKey,
  api_secret: process.env.cloudSecret
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'profile',
    format: async (req, file) => 'png', // supports promises as well
   public_id: (req, file) => {
   
   },
  },
});




const uploadCloud = multer({ storage: storage });


module.exports = uploadCloud;
