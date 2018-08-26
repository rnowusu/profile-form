const mongoose = require('mongoose');

const ProfileSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  date_of_birth: {
    type: String,
    required: true
  },
  nationality: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  association: {
    type: String,
    required: true
  },
  team: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  sports: {
    type: String,
    required: true
  },
  about: {
    type: String,
    required: true
  },
  interests: {
    type: String,
    required: true
  },
  charities: {
    type: String,
    required: true
  },
  social_media_handles: {
    type: Object,
    required: true
  },
  pets: {
    type: Boolean,
    required: true
  },
  drinks_alcohol: {
    type: Boolean,
    required: true
  },
  married: {
    type: Boolean,
    required: true
  },
  profileImage: {
    type: String,
    required: false,
    default: 'uploads/2018-08-26T00:55:58.055Z_blank-profile-picture.png'
  }
});

const Profile = module.exports = mongoose.model('Profile', ProfileSchema)
