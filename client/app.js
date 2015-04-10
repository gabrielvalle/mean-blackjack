(function() {
  
  'use strict';

  angular
    .module( 'blackjack', [
      'ui.router'
    ])
    .config( function( $stateProvider, $urlRouterProvider ) {

      $urlRouterProvider
        .otherwise( '/home' );

      $stateProvider
        .state( 'home', {
          url : '/home',
          templateUrl : 'home/home.html'
        })
        .state( 'room', {
          url : '/room',
          templateUrl : 'room/room.html'
        });

    });


}());