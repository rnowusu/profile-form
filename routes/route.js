const express = require('express');
const router = express.Router();
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, './uploads/');
  },
  filename: function(req, file, cb){
    cb(null, new Date().toISOString()+ "_" +file.originalname)
  }
})

const fileFilter = function(req, file, cb){
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
    cb(null, true);
  } else {
    cb(null, false);
  }
}

const upload = multer({
  storage: storage,
  limits: {
  filesize: 1024 * 1024 * 7
},
fileFilter: fileFilter
});



  const Profile = require('../models/profile.js');

  router.get('/profiles', function(req, res, next){
    Profile.find(function(err, profiles){
      res.json(profiles);
    })
  });

  router.get('/profiles/:id', function(req, res, next){
    console.log("Params are ");
    console.log(req.params);
    // res.send('Enter your profile info here');
    Profile.findById(req.params.id, function(err, result){
      console.log("Params are ");
      console.log(req.params);
      if(err){
        res.json(err)
      } else{
        console.log(result);
        res.json(result);
        // res.render('result', {first_name: result.first_name, last_name: result.last_name, phone: result.phone});
      }
    })
  });

  router.post('/profiles', upload.single('profileImage'), function(req, res, next){
  console.log("File is :");
  console.log(req.file);
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
    married: req.body.married,
    profileImage: req.file.path
  });
  console.log(req.body.social_media_handles);
  console.log(newProfile);

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
  Profile.findByIdAndUpdate({_id: req.params.id}, {
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
    married: req.body.married,
    profileImage: req.file.path
  }, function(err, result){
    if(err){
      console.log("Failed to update");
      res.json(err);
      console.log(err);
    } else {
      console.log("Update got through");
      res.json(result);
      console.log("Result is: ");
      console.log(result);
    }
  });
});



module.exports = router;
