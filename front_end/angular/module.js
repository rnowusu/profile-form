var application = angular.module("myApp", ['ngRoute', 'ngAnimate']);
console.log("Hey from module.js");
application.config(function($routeProvider, $locationProvider){
  $routeProvider.when('/profiles', {
    templateUrl: './angular/directives/html_templates/get_profiles.html',
    controller: 'GetProfilesController'
  })
    .when('/create-profile/:section', {
        templateUrl: './angular/directives/html_templates/create_profile_templates/create_profile_form.html',
        controller: 'CreateProfilesController'
    })
    .when('/edit-profile/:id', {
      templateUrl: './angular/directives/html_templates/edit_profile_templates/edit_profile_form.html',
      controller: 'EditProfilesController'
    })
  .otherwise({redirectTo: '/profiles'})
});
