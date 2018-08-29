application.controller('CreateProfilesController', ['$scope', '$routeParams', '$location', 'createProfileService', function($scope, $routeParams, $location, createProfileService){

  $scope.submitProfile = function(){

      createProfileService.multipartForm('/api/profiles', $scope.newProfile).then(function(data){
        $location.url('/profiles')
      }, function(err){
        console.log("Failed to submit post.");
        console.log(err);
      })
    };

  $scope.switch = $scope.switch || "basic-info";
    console.log("$scope.switch is " + $scope.switch);


    $scope.next = function(info){
      switch ($scope.switch) {
        case "basic-info":
            $scope.switch = "about";
            $scope.newProfile = info;

          break;


          case "about":
             $scope.switch = "social_media";
             $scope.newProfile = info;

            break;

            case "social_media":
              $scope.switch = "summary";
              $scope.newProfile = info;
              
              break;

          case "summary":
              $scope.switch = "basic-info";
              $scope.newProfile = info;

            break;
        default:

      }
    }

    $scope.back = function(){
      if($scope.switch === "about"){

        $scope.switch = "basic-info";

      } else if($scope.switch === "social_media"){

        $scope.switch = "about";

      } else if ($scope.switch === "summary") {

        $scope.switch = "social_media";

      }
    }


    $scope.games = games;
    $scope.countries = countries;
    //games and countries come from the lists in the lists folder


}]);
