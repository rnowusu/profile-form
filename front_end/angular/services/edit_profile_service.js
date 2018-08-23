application.factory('editProfileService', ['$http', function($http){
  console.log("Hello World from edit_profile.js");

  let Info = {};
  Info.editProfile = function(url, data){

    return $http.get(url).success(function(data){
      console.log(url);
      return data;
    }).error(function(err){
      return err;
    });
  }

  Info.submitChange = function(url, data){

    let _data = data || {};
    console.log('Put request submitted');

    return $http.put(url, {
      name: _data.name,
      date_of_birth: _data.date_of_birth,
      nationality: _data.nationality,
      location: _data.location,
      association: _data.association,
      team: _data.team,
      gender: _data.gender,
      sports: _data.sports,
      about: _data.about,
      interests: _data.interests,
      charities: _data.charities,
      social_media_handles: _data.social_media_handles,
      pets: _data.pets,
      drinks_alcohol: _data.drinks_alcohol,
      married: _data.married
    });
  }

  Info.submitChangeWithFile = function(url, data){
    var fd = new FormData();
    for (var key in data){
      fd.append(key, data[key]);
    }
    return $http.put(url, fd, {
      transformRequest: angular.identity,
      headers: {'Content-Type': undefined }

    })
  }
  return Info;

}]);
