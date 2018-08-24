application.directive('createProfileForm', function(){
console.log("Change all to create-profile-form");
  return {
    restrict: 'E',
    scope: false,
    templateUrl: './angular/directives/html_templates/create_profile_templates/create_profile_form.html'
  };
});
