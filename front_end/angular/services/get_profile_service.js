application.factory('getProfilesService', ['$http', function($http){
  return $http.get('/api/profiles').success(function(data){
    return data;
  }).error(function(err){
    return err;
  })
}]);
