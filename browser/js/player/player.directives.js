juke.directive('player', function(PlayerFactory) {
    return {
        resict: 'E',
        templateUrl: '/js/player/player.html',
        link: function(scope, element, attributes) {
            angular.extend(scope, PlayerFactory);//annoying

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

            //scope.flag = false;
            // scope.shuffling = false;

            scope.shuffle = function() {
                // if (!scope.flag) {
                    var rand = Math.floor(Math.random() * 5);;
                    PlayerFactory.skip(rand)
                //     scope.next = scope.skip(rand);
                //     scope.flag = true;
                // }
                // else
                // {
                //     scope.next = PlayerFactory.next;
                //     scope.flag = false;
                // }

            };

            // scope.onDrag($event){
            //     consoel.log("I'm here: ", $event. originalEvent.pageX);
            // }
        }
    }
});
