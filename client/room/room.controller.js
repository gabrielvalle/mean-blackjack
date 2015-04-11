(function() {

  'use strict';

  angular
    .module( 'blackjack' )
    .controller( 'RoomController', RoomController );

  RoomController.$inject = [
    'RoomService'
  ];

  function RoomController( RoomService ) {

    var vm = this;
  
    ///////////// Properties
    vm.totalPlayers = RoomService.numberOfPlayers;

    ///////////// Public Methods

    ///////////// Private Methods

    ///////////// Methods Declaration
  
  }

}());
