console.log("Hello from edit profiles controller.js");
application.controller('EditProfilesController', ['$scope', '$routeParams', '$location', 'editProfileService', function($scope, $routeParams, $location, editProfileService){

  $scope.changeProfile = editProfile.editProfile('api/profiles/'+$routeParams.id).then(function(data){
    $scope.editProfile = data.data;
    $scope.editProfile.date_of_birth = new Date($scope.editProfile.date_of_birth)
    console.log(data.data);
    // console.log($routeParams);
  });

  $scope.submitChangedProfile = function(){
    let changed = {
      name: $scope.editProfile.name,
      date_of_birth: $scope.editProfile.date_of_birth,
      nationality: $scope.editProfile.nationality,
      location: $scope.editProfile.location,
      association: $scope.editProfile.association,
      team: $scope.editProfile.team,
      gender: $scope.editProfile.gender,
      sports: $scope.editProfile.sports,
      about: $scope.editProfile.about,
      interests: $scope.editProfile.interests,
      charities: $scope.editProfile.charities,
      social_media_handles: $scope.editProfile.social_media_handles,
      pets: $scope.editProfile.pets,
      drinks_alcohol: $scope.editProfile.drinks_alcohol,
      married: $scope.editProfile.married,
      profileImage: $scope.editProfile.profileImage
    }

    editProfileService.submitChangeWithFile('/api/profiles/edit/'+$routeParams.id, changed).then(function(data){
      console.log(data.data);
      $location.url('/profiles')
    })
    console.log("Change submitted");
  }

  $scope.editSwitch = $scope.editSwitch || "basic-info";
    // console.log($scope.editSwitch);

    $scope.editNext = function(info){
      switch($scope.editSwitch) {
        case "basic-info":
            $scope.editSwitch = "about";
            $scope.editProfile = info;
            // $location.url('/edit-profile/about');
          break;


          case "about":
             $scope.editSwitch = "social_media";
             $scope.editProfile = info;
             // $location.url('/edit-profile/social_media');
            break;

            case "social_media":
            $scope.editSwitch = "summary";
            $scope.editProfile = info;
            // $location.url('/edit-profile/summary');
            break;

          case "summary":
              $scope.editSwitch = "basic-info";
              $scope.editProfile = info;
              // $location.url('/edit-profile/basic-info');
            break;
        default:

      }
    }

    $scope.editBack = function(){
      if($scope.editSwitch === "about"){

        $scope.editSwitch = "basic-info";
        // $location.url('/edit-profile/basic-info');

      } else if($scope.editSwitch === "social_media"){

        $scope.editSwitch = "about";
        // $location.url('/edit-profile/about');

      } else if ($scope.editSwitch === "summary") {

        $scope.editSwitch = "social_media";
        // $location.url('/edit-profile/social_media');

      }
    }

}]);
