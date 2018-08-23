application.controller('GetProfilesController', ['$scope', '$routeParams', '$location', 'getProfilesService',function($scope, $routeParams, $location, getProfilesService){

  $scope.getProfiles = getProfilesService.then(function(data){
  $scope.profiles = data.data;
  // console.log(data.data);
}, function(err){console.log(err);})

}]);
