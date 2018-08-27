application.factory('createProfileService', ['$http', function($http){

  let ProfileService = {};
  ProfileService.createProfile = function(url, data){
    let _data = data || {};

    return $http.post(url, {
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
      married: _data.married,
      profileImage: _data.profileImage
    });
  };

  ProfileService.multipartForm = function(url, data){
    var fd = new FormData();
    for (var key in data){
      fd.append(key, data[key]);
    }
    
    fd.set('social_media_handles', JSON.stringify(data['social_media_handles']))

    return $http.post(url, fd, {
      transformRequest: angular.identity,
      headers: {'Content-Type': undefined }

    })

  };

  return ProfileService;
}]);
