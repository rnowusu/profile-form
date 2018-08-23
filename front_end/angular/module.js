var application = angular.module("myApp", ['ngRoute', 'ngAnimate']);

application.config(function($routeProvider, $locationProvider){
  $routeProvider.when('/profiles', {
    // templateUrl: './frontend/angular/directives/profiles/profiles.html',
    // controller: 'GetProfilesController'
  })
    .when('/create-profile/:section', {
        // templateUrl: './frontend/angular/directives/profiles/all.html',
        //controller: 'CreateProfilesController'
    })
    .when('/edit-profile/:id', {
      // templateUrl: './frontend/angular/directives/profiles/edit_profile_directives/edit_profile_form.html',
      // controller: 'EditProfilesController'
    })
  .otherwise({redirectTo: '/profiles'})
});
