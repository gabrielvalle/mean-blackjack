(function() {

  'use strict';

  angular
    .module( 'blackjack' )
    .service( 'DealerService', DealerService );

  DealerService.$inject = [];

  function DealerService() {
  
    var self = this;

    ///////////// Properties
    self.message       = 'Your turn!';
    self.currentPlayer = 0;

    ///////////// Methods

    ///////////// Functions Declaration
  
  }

}());
