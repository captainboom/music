angular.module('starter.controllers', [])

    .controller('DashCtrl', function ($scope) {
    })

    .controller('ArtistsCtrl', function ($scope, Artists) {
        $scope.artists = Artists.all();
    })

    .controller('AlbumsCtrl', function ($scope, $stateParams, Artists, Albums) {
        $scope.artist = Artists.get($stateParams.artistId);
        $scope.albums = Albums.all();
    })

    .controller('AccountCtrl', function ($scope) {
        $scope.settings = {
            enableFriends: true
        };
    });
