application.controller('EditProfilesController', ['$scope', '$routeParams', '$location', 'editProfileService', function($scope, $routeParams, $location, editProfileService){

  $scope.changeProfile = editProfileService.editProfile('api/profiles/'+$routeParams.id).then(function(data){
    $scope.editProfile = data.data;
    $scope.editProfile.date_of_birth = new Date($scope.editProfile.date_of_birth)
    if(!($scope.editProfile.social_media_handles === '[object Object]')){

      $scope.editProfile.social_media_handles = JSON.parse($scope.editProfile.social_media_handles)
    } else {
      $scope.editProfile.social_media_handles = {};
      }

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
      $location.url('/profiles')
    })
    console.log("Change submitted");
  }

  $scope.editSwitch = $scope.editSwitch || "basic-info";


    $scope.editNext = function(info){
      switch($scope.editSwitch) {
        case "basic-info":
            $scope.editSwitch = "about";
            $scope.editProfile = info;

          break;


          case "about":
             $scope.editSwitch = "social_media";
             $scope.editProfile = info;

            break;

            case "social_media":
            $scope.editSwitch = "summary";
            $scope.editProfile = info;

            break;

          case "summary":
              $scope.editSwitch = "basic-info";
              $scope.editProfile = info;

            break;
        default:

      }
    }

    $scope.editBack = function(){
      if($scope.editSwitch === "about"){

        $scope.editSwitch = "basic-info";

      } else if($scope.editSwitch === "social_media"){

        $scope.editSwitch = "about";

      } else if ($scope.editSwitch === "summary") {

        $scope.editSwitch = "social_media";

      }
    }

    $scope.games = games;
    $scope.countries = countries;

}]);
