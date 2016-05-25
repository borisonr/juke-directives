'use strict';

juke.controller('SongChooseCtrl', function($scope, SongFactory) {

    $scope.songs = [];

    SongFactory.fetchAll()
        .then(function(songs) {
            $scope.songs = songs;
        });

    $scope.reset = function() {
        $scope.toAdd = null;
    };

    $scope.addIt = function() {
        $scope.addSong($scope.toAdd)
            .then(function() {
                $scope.reset();
            });
    };

});

juke.directive('songList', function(PlayerFactory, ArtistFactory, PlaylistFactory) {
    return {
        restrict: 'E',
        scope: {
            list: '='

        },
        templateUrl: '/js/song/templates/song-list.html',
        link: function(scope) {
            scope.toggle = function(song) {
                if (song !== PlayerFactory.getCurrentSong()) {
                    PlayerFactory.start(song, scope.list);
                } else if (PlayerFactory.isPlaying()) {
                    PlayerFactory.pause();
                } else {
                    PlayerFactory.resume();
                }
            };

            scope.getCurrentSong = function() {
                return PlayerFactory.getCurrentSong();
            };
            scope.isPlaying = function(song) {
                return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
            };

        }

    }
})

juke.directive('doubleClick', function(){
  return {
    restrict: 'A',
    scope: {
      doubleClick: '&'
    },
    link: function(scope, element){
      element.on('dblclick', function(){
        scope.doubleClick();
      })
    }
  }
})