const express = require('express');
const router = express.Router();
const multer = require('multer');

const aws = require('aws-sdk');
const multerS3 = require('multer-s3');

aws.config.update({
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  accessKeyId: process.env.ACCESS_KEY_ID,
  region: process.env.REGION
});

// const storage = multer.diskStorage({
//   destination: function(req, file, cb){
//     cb(null, './uploads/');
//   },
//   filename: function(req, file, cb){
//     cb(null, new Date().toISOString()+ "_" +file.originalname)
//   }
// })

const fileFilter = function(req, file, cb){
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/gif') {
    cb(null, true);
  } else {
    cb(null, false);
  }
}

var s3 = new aws.S3();

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'profile-form-dev',
    key: function(req, file, cb){
      cb(null, new Date().toISOString()+ "_" +file.originalname)
    }
  }),
  limits: {
    filesize: 1024 * 1024 * 7
  },
  fileFilter: fileFilter
});

// const upload = multer({
//   storage: storage,
//   limits: {
//   filesize: 1024 * 1024 * 7
// },
// fileFilter: fileFilter
// });

  const Profile = require('../models/profile.js');

  router.get('/profiles', function(req, res, next){
    Profile.find(function(err, profiles){
      res.json(profiles);
    })
  });

  router.get('/profiles/:id', function(req, res, next){
    // res.send('Enter your profile info here');
    Profile.findById(req.params.id, function(err, result){

      if(err){
        res.json(err)
      } else{
        res.json(result);
      }
    })
  });

  router.post('/profiles', upload.single('profileImage'), function(req, res, next){
  let newProfile = new Profile({
    name: req.body.name,
    date_of_birth: req.body.date_of_birth,
    nationality: req.body.nationality,
    location: req.body.location,
    association: req.body.association,
    team: req.body.team,
    gender: req.body.gender,
    sports: req.body.sports,
    about: req.body.about,
    interests: req.body.interests,
    charities: req.body.charities,
    social_media_handles: req.body.social_media_handles,
    pets: req.body.pets,
    drinks_alcohol: req.body.drinks_alcohol,
    married: req.body.married
  });
  if (req.file){
    newProfile.profileImage = req.file.location;
  }

  newProfile.save(function(err, response){
    if(err){
      res.json({msg: "Failed to add to db: " + err});
    } else{
      res.json({msg: "Profile successfully added to db"});
    }
  })
})

router.put('/profiles/edit/:id', upload.single('profileImage'), function(req, res, next){
  //put or patch request
  var changeProfile = {
    name: req.body.name,
    date_of_birth: req.body.date_of_birth,
    nationality: req.body.nationality,
    location: req.body.location,
    association: req.body.association,
    team: req.body.team,
    gender: req.body.gender,
    sports: req.body.sports,
    about: req.body.about,
    interests: req.body.interests,
    charities: req.body.charities,
    social_media_handles: req.body.social_media_handles,
    pets: req.body.pets,
    drinks_alcohol: req.body.drinks_alcohol,
    married: req.body.married
  };
  if (req.file){
    changeProfile.profileImage = req.file.location;
  }
  Profile.findByIdAndUpdate({_id: req.params.id}, changeProfile, function(err, result){
    if(err){
      // console.log("Failed to update");
      res.json(err);
      // console.log(err);
    } else {
      // console.log("Update got through");
      res.json(result);

    }
  });
});

router.delete('/profiles/:id', function(req, res, next){
  Profile.findByIdAndRemove({_id: req.params.id}, function(err, result){
    if (err){
      console.log("Failed to delete");
      res.json(err);
      console.log(err);
    } else {
      console.log("Deleted!");
      // res.json(result);
      // console.log(result);
    }
  })
});


module.exports = router;
