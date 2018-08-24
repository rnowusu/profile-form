application.directive('editProfileForm', function(){
console.log("Hi from edit-profile-form");
  return {
    restrict: 'E',
    scope: false,
    templateUrl: './angular/directives/html_templates/edit_profile_templates/edit_profile_form.html'
  };
});
