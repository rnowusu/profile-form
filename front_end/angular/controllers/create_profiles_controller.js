application.controller('CreateProfilesController', ['$scope', '$routeParams', '$location', 'createProfileService', function($scope, $routeParams, $location, createProfileService){

  $scope.submitProfile = function(){
      // console.log('Submitting Profile');
      createProfileService.multipartForm('/api/profiles', $scope.newProfile).then(function(data){
        // console.log("Profile post request got through.");
        console.log(data);
        $location.url('/profiles')
      }, function(err){
        console.log("Failed to submit post." + err);
      })
    };

  $scope.switch = $scope.switch || "basic-info";
    // console.log($scope.switch);

    $scope.next = function(info){
      switch ($scope.switch) {
        case "basic-info":
            $scope.switch = "about";
            $scope.newProfile = info;
            $location.url('/create-profile/about');
          break;


          case "about":
             $scope.switch = "social_media";
             $scope.newProfile = info;
             $location.url('/create-profile/social_media');
            break;

            case "social_media":
            $scope.switch = "summary";
            $scope.newProfile = info;
            $location.url('/create-profile/summary');
            break;

          case "summary":
              $scope.switch = "basic-info";
              $scope.newProfile = info;
              $location.url('/create-profile/basic-info');
            break;
        default:

      }
    }

    $scope.back = function(){
      if($scope.switch === "about"){

        $scope.switch = "basic-info";
        $location.url('/create-profile/basic-info');

      } else if($scope.switch === "social_media"){

        $scope.switch = "about";
        $location.url('/create-profile/about');

      } else if ($scope.switch === "summary") {

        $scope.switch = "social_media";
        $location.url('/create-profile/social_media');

      }
    }


}]);
