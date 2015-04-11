(function() {

  'use strict';

  angular
    .module( 'blackjack' )
    .controller( 'RoomController', RoomController );

  RoomController.$inject = [
    'RoomService',
    'DealerService',
    '$state'
  ];

  function RoomController( RoomService, DealerService, $state ) {

    var vm = this;
  
    ///////////// Properties
    vm.totalPlayers  = RoomService.numberOfPlayers;
    vm.playersData   = [];
    vm.dealerData    = { hand : [] };
    vm.message       = DealerService.message;
    vm.currentPlayer = [];

    ///////////// Public Methods
    vm.quit = quit;

    ///////////// Private Methods
    var _init = _init;
    var _createPlayers = RoomService.createPlayers;

    ///////////// Methods Declaration
    function _init() {

      vm.playersData = _createPlayers( vm.totalPlayers );
      //console.log( JSON.stringify( vm.playersData, null, 2 ));
      vm.currentPlayer = vm.playersData[ 0 ];

    }

    function quit() {
      RoomService.numberOfPlayers = 1;
      $state
        .go( 'home' );
    }

    ///////////// Start
    _init();
  
  }

}());
