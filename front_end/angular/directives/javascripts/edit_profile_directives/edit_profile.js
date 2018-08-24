application.directive('editProfile', function(){
  // console.log("Hello from edit_profile.js");

  return {
    restrict: 'E',
    scope: false,
    templateUrl: './angular/directives/html_templates/edit_profile_templates/edit_profile.html'
  };
});
