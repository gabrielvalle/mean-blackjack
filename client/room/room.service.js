(function() {

  'use strict';

  angular
    .module( 'blackjack' )
    .service( 'RoomService', RoomService );

  RoomService.$inject = [];

  function RoomService() {
  
    ///////////// Properties
    this.numberOfPlayers = 1;

    ///////////// Methods

    ///////////// Methods Declaration

  }

}());
