(function() {
  
  'use strict';

  angular
    .module( 'blackjack' )
    .controller( 'HomeController', HomeController );

  HomeController.$inject = [
    'RoomService'
  ];

  function HomeController( RoomService ) {

    var vm = this;

    ///////////// Properties
    vm.totalPlayers = RoomService.numberOfPlayers;

    ///////////// Public Methods
    vm.addRemovePlayer = addRemovePlayer;

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
        console.log( 'You need at least one player' );
      } else {
        players += value;
      }

      vm.totalPlayers = players;

    }

  }

}());
