(function() {

  'use strict';

  angular
    .module( 'blackjack' )
    .controller( 'RoomController', RoomController );

  RoomController.$inject = [
    'RoomService',
    'DealerService',
    '$state',
    'toastr'
  ];

  function RoomController( RoomService, DealerService, $state, toastr ) {

    var vm = this;
  
    ///////////// Properties
    vm.totalPlayers   = RoomService.numberOfPlayers;
    vm.playersData    = [];
    vm.dealerData     = { hand : [] };
    vm.message        = DealerService.message;
    vm.currentGambler = {};
    vm.currentPlayer  = {};
    vm.readyToGo      = DealerService.readyToGo;

    ///////////// Public Methods
    vm.quit     = quit;
    vm.setWager = setWager;

    ///////////// Private Methods
    var _init = _init;

    ///////////// Methods Declaration
    function _init() {

      vm.playersData = RoomService.playersData;
      //console.log( JSON.stringify( vm.playersData, null, 2 ));
      vm.currentGambler = vm.playersData[ DealerService.currentGambler ];

    }

    function quit() {
      RoomService.numberOfPlayers = 1;
      $state
        .go( 'home' );
    }

    function setWager( id, wager ) {
      
      var player = vm.playersData[ id - 1 ];

      if ( !wager ) {
        toastr
          .warning( 'Choose your wager!', 'Dealer says:' );
      } else if ( player.money - wager < 0 ) {
        toastr
          .warning( 'You do not have enough money!', 'Dealer says:' );
      } else if ( Number( wager, 10 ) !== Number( wager, 10 ) ) {
        toastr
          .info( 'Only numbers are allowed!', 'Dealer says:' );
      } else {
        
        player.wager                 = wager;
        player.money                 -= wager;
        vm.playersData[ id - 1 ]     = player;
        DealerService.currentGambler = id;

        if ( id < vm.playersData.length ) {
          
          vm.currentGambler = vm.playersData[ id ];
          //console.log( JSON.stringify( vm.currentGambler, null, 2 ));

        } else {
          
          DealerService.currentGambler = '';
          vm.currentGambler = {};
          vm.readyToGo = true;

        }
      }

      vm.wager = '';
    
    }

    ///////////// Start
    _init();
  
  }

}());
