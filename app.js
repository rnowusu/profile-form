const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const route = require('./routes/route.js');

var app = express();

//db services
mongoose.connect('mongodb://localhost:27017/profile_form');
//change host number
mongoose.connection.on('connected', function(){
  console.log('Connected to database mongodb @ 27017');
});

mongoose.connection.on('error', function(err){
  if(err){
    console.log('Error in database connection:' + err);
  }
});

//middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/uploads', express.static('uploads'))
app.use(express.static(path.join(__dirname, 'front_end')));
app.use('/api', route);


app.get('/', function(req, res){
  res.send("Hello World");
})

app.listen(5000, function(){
  console.log("Server started on Port 5000...");
})
