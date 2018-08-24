application.directive('getProfiles', function(){
  console.log("Hey from get profiles");
  return {
    restrict: 'E',
    scope: false,
    templateUrl:'./angular/directives/html_templates/get_profiles.html'
  }
})
