const express = require('express');
const router = express.Router();
const multer = require('multer');




  const Profile = require('../models/profile.js');

  router.get('/profiles', function(req, res, next){
    console.log("Params are ");
    console.log(req.params);
    Profile.find(function(err, profiles){
      res.json(profiles);
    })
  });

  router.get('/profiles/:id', function(req, res, next){
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


module.exports = router;
