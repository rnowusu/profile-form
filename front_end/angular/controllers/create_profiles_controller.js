console.log("Hello from create profile controller.js");

application.controller('CreateProfilesController', ['$scope', '$routeParams', '$location', 'createProfileService', function($scope, $routeParams, $location, createProfileService){

  $scope.submitProfile = function(){
      // console.log('Submitting Profile');
      console.log($scope.newProfile);
      createProfileService.multipartForm('/api/profiles', $scope.newProfile).then(function(data){
        // console.log("Profile post request got through.");
        console.log(data);
        $location.url('/profiles')
      }, function(err){
        console.log("Failed to submit post.");
        console.log(err);
      })
    };

  $scope.switch = $scope.switch || "basic-info";
    console.log("$scope.switch is " + $scope.switch);
    // console.log($scope.switch);

    $scope.next = function(info){
      switch ($scope.switch) {
        case "basic-info":
            $scope.switch = "about";
            $scope.newProfile = info;
            // $location.url('/create-profile/about');
            console.log($scope.switch);
          break;


          case "about":
             $scope.switch = "social_media";
             $scope.newProfile = info;
             // $location.url('/create-profile/social_media');
             console.log($scope.switch);
            break;

            case "social_media":
            $scope.switch = "summary";
            $scope.newProfile = info;
            // $location.url('/create-profile/summary');
            console.log($scope.switch);
            break;

          case "summary":
              $scope.switch = "basic-info";
              $scope.newProfile = info;
              // $location.url('/create-profile/basic-info');
              console.log($scope.switch);
            break;
        default:

      }
    }

    $scope.back = function(){
      if($scope.switch === "about"){

        $scope.switch = "basic-info";
        // $location.url('/create-profile/basic-info');

      } else if($scope.switch === "social_media"){

        $scope.switch = "about";
        // $location.url('/create-profile/about');

      } else if ($scope.switch === "summary") {

        $scope.switch = "social_media";
        // $location.url('/create-profile/social_media');

      }
    }


    $scope.games = games;
    $scope.countries = countries;
    //games and countries come from the lists in the lists folder


}]);
