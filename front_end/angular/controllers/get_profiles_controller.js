application.controller('GetProfilesController', ['$scope', '$routeParams', '$location', 'getProfilesService',function($scope, $routeParams, $location, getProfilesService){
  $scope.getProfiles = getProfilesService.then(function(data){
  $scope.profiles = data.data;
  $scope.profiles.forEach(function(profile){
    if(!(profile.social_media_handles === '[object Object]')){
      profile.social_media_handles = JSON.parse(profile.social_media_handles)
    }

  })
}, function(err){console.log(err);})

}]);
