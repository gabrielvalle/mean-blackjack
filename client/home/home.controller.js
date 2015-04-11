(function() {
  
  'use strict';

  angular
    .module( 'blackjack' )
    .controller( 'HomeController', HomeController );

  HomeController.$inject = [
    'RoomService',
    '$state',
    'toastr'
  ];

  function HomeController( RoomService, $state, toastr ) {

    var vm = this;

    ///////////// Properties
    vm.totalPlayers = RoomService.numberOfPlayers;

    ///////////// Public Methods
    vm.addRemovePlayer = addRemovePlayer;
    vm.goToRoom        = goToRoom;

    ///////////// Private Methods

    ///////////// Methods Declarations
    /*
    * @param {number} value
    */
    function addRemovePlayer( value ) {

      var players = vm.totalPlayers;
    
      if ( typeof value === 'number' && value !== value ) {
        return;
      } else if ( value === -1 && players <= 1 ) {
        toastr
          .info( 'You need at least one player' );
      } else {
        players += value;
      }

      vm.totalPlayers = players;

    }

    function goToRoom() {
      
      RoomService.numberOfPlayers = vm.totalPlayers;
      $state
        .go( 'room' );

    }

  }

}());
