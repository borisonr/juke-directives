juke.directive('player', ['PlayerFactory', function(PlayerFactory) {
    return {
        restrict: 'E',
        templateUrl: '/js/player/player.html',
        link: function(scope, element, attributes) {
            angular.extend(scope, PlayerFactory);
        	
            scope.toggle = function() {
                if (PlayerFactory.isPlaying()) PlayerFactory.pause();
                else PlayerFactory.resume();
            };

            scope.getPercent = function() {
                return PlayerFactory.getProgress() * 100;
            };

            scope.getCurrentSong = function() {
                return PlayerFactory.getCurrentSong();
            };
 
        }
    }
}]);
