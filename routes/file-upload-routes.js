const express = require('express');
const router = express.Router();

// include the model:
const uploadCloud = require('../configs/cloudinary-setup');


const cloudinary = require('cloudinary').v2;
cloudinary.config({
  cloud_name: process.env.cloudName,
  api_key: process.env.cloudKey,
  api_secret: process.env.cloudSecret
});


router.post('/upload',   uploadCloud.single("image","oldImage"),(req,res,next)=>{


  if(!req.file){
   // console.log(req);
    next(new Error('No file uploaded'))
    return;
  }

  const lastItem = req.body.oldImage.substring(req.body.oldImage.lastIndexOf('/') + 1);

  console.log(lastItem);

  const lastItemSub = lastItem.split('.').slice(0, -1).join('.')
  cloudinary.uploader.destroy(`profile/${lastItemSub}`, function(error,result) {
    console.log(result, error) });

  res.json(req.file);
})



module.exports = router;
