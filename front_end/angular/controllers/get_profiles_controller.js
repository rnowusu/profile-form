application.controller('GetProfilesController', ['$scope', '$routeParams', '$location', 'getProfilesService',function($scope, $routeParams, $location, getProfilesService){
  $scope.getProfiles = getProfilesService.then(function(data){
  $scope.profiles = data.data;
  $scope.profiles.forEach(function(profile){
    if(!(profile.social_media_handles === '[object Object]')){

      console.log(profile.social_media_handles);
      profile.social_media_handles = JSON.parse(profile.social_media_handles)

    }
  })
  console.log(data.data);
}, function(err){console.log(err);})

}]);
