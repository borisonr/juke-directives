'use strict';

juke.controller('SidebarCtrl', function ($scope) {

  // nothing to see here for now… state transitions happening with ui-sref!

});

juke.directive('sidebar', function(){
	return {
		restrict: 'E',
		templateUrl: '/js/sidebar/sidebar.html'
	}
});

juke.directive('songName', ['PlayerFactory', function(PlayerFactory){
	return {
		restrict: 'E',
		link: function(scope){
			scope.getCurrentSong = function() {
                return PlayerFactory.getCurrentSong();
            };
		},
		template: '<p>{{getCurrentSong().name}}</p>'
	}
}])