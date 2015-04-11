(function() {

  'use strict';

  angular
    .module( 'blackjack' )
    .service( 'DealerService', DealerService );

  DealerService.$inject = [];

  function DealerService() {
  
    var self = this;

    ///////////// Properties
    self.message = 'Your turn!';

    ///////////// Methods

    ///////////// Functions Declaration
  
  }

}());
