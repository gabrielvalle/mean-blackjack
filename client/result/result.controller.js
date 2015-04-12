(function() {
  
  'use strict';

  angular
    .module( 'blackjack' )
    .controller( 'ResultController', ResultController );

  ResultController.$inject = [
    'DealerService',
    'RoomService'
  ];

  function ResultController( DealerService, RoomService ) {

    var vm = this;

    ///////////// Properties
    vm.dealerData = DealerService.dealerData;

    ///////////// Public Methods

    ///////////// Private Methods

    ///////////// Methods Declarations

    ///////////// Start

  }

}());