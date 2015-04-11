(function() {
  
  'use strict';

  angular
    .module( 'blackjack', [
      'ui.router',
      'ngAnimate',
      'toastr'
    ])
    .config( function( $stateProvider, $urlRouterProvider ) {

      $urlRouterProvider
        .otherwise( '/home' );

      $stateProvider
        .state( 'home', {
          url : '/home',
          controller : 'HomeController as vm',
          templateUrl : 'home/home.html'
        })
        .state( 'room', {
          url : '/room',
          controller : 'RoomController as vm',
          templateUrl : 'room/room.html'
        });

    });


}());
