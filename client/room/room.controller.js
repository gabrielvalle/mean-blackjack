(function() {

  'use strict';

  angular
    .module( 'blackjack' )
    .controller( 'RoomController', RoomController );

  RoomController.$inject = [
    'RoomService',
    'DealerService'
  ];

  function RoomController( RoomService, DealerService ) {

    var vm = this;
  
    ///////////// Properties
    vm.totalPlayers  = RoomService.numberOfPlayers;
    vm.playersData   = [];
    vm.dealerData    = { hand : [] };
    vm.message       = DealerService.message;

    ///////////// Public Methods

    ///////////// Private Methods
    var _init = _init;
    var _createPlayers = RoomService.createPlayers;

    ///////////// Methods Declaration
    function _init() {

      vm.playersData = _createPlayers( vm.totalPlayers );
      //console.log( JSON.stringify( vm.playersData, null, 2 ));

    }

    ///////////// Start
    _init();
  
  }

}());
