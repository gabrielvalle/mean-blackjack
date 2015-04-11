(function() {

  'use strict';

  angular
    .module( 'blackjack' )
    .service( 'DealerService', DealerService );

  DealerService.$inject = [
    'RoomService'
  ];

  function DealerService( RoomService ) {
  
    var self = this;

    ///////////// Properties
    self.message        = 'Your turn!';
    self.currentGambler = 0;
    self.currentPlayer  = 0;
    self.readyToGo      = false;

    ///////////// Methods

    ///////////// Functions Declaration
  
  }

}());
