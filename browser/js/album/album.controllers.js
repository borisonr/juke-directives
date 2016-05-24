'use strict';

/* ALBUMS (SINGULAR) CONTROLLER */

juke.controller('AlbumCtrl', function ($scope, PlayerFactory, theAlbum) {

  $scope.album = theAlbum;

});

/* ALBUMS (PLURAL) CONTROLLER */

juke.controller('AlbumsCtrl', function ($scope, allAlbums) {

  $scope.albums = allAlbums;

});

juke.directive('albumList', function(){
  return {
    restrict: 'E',
    scope: {
      albums: '='
      
    },
    templateUrl: '/js/album/templates/album-list.html'

  }

})