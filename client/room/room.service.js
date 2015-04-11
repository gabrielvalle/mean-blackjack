(function() {

  'use strict';

  angular
    .module( 'blackjack' )
    .service( 'RoomService', RoomService );

  RoomService.$inject = [];

  function RoomService() {
  
    ///////////// Properties
    this.numberOfPlayers = 1;
    this.playersData     = [];

    ///////////// Methods
    this.createPlayers = createPlayers;

    ///////////// Methods Declaration
    function Player( number ) {
      
      this.name  = 'Player #' + number;
      this.hand  = [];
      this.wager = 0;
      this.money = 1000;

    }

    function createPlayers( numberOfPlayers ) {
      
      if ( typeof numberOfPlayers === 'number' && numberOfPlayers === numberOfPlayers ) {
        
      }
    
    }

  }

}());
