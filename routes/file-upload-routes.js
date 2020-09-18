const express = require('express');
const router = express.Router();

// include the model:
const uploadCloud = require('../configs/cloudinary-setup');


router.post('/upload', uploadCloud.single("image"),(req,res,next)=>{


  if(!req.file){
   // console.log(req);
    next(new Error('No file uploaded'))
    return;
  }
console.log(req.file);
  res.json(req.file);
})



module.exports = router;
