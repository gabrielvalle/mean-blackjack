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
    vm.dealerData  = DealerService.dealerData;
    vm.playersData = RoomService.playersData;
    vm.allResults  = [];

    ///////////// Public Methods

    ///////////// Private Methods
    var _init             = _init;
    var _calculateResults = _calculateResults;
    var _payThePlayer     = _payThePlayer;

    ///////////// Methods Declarations
    function _init() {

      _calculateResults( vm.playersData, vm.dealerData );

    }

    /**
    *
    * Create a log of the player's result in the last game
    *
    * @param {Object} info - Informations about the player's last round
    *
    **/    
    function Result( info ) {

      this.player = info.name;
      this.score  = info.score;
      this.hand   = info.hand;
      this.wager  = info.wager;
      this.money  = info.money;
      this.result = info.result;

    }

    function _calculateResults( playersData, dealerData ) {

      var dealer  = dealerData;
      var results = [];

      playersData
        .forEach( function( player ) {

          if ( player.score > 21 ) {
            results
              .push( new Result({
                name : player.name,
                score : player.score,
                hand : player.hand,
                wager : player.wager,
                money : player.money,
                result : 'Lost'
              }));
          }

        });

      console.log( JSON.stringify( results, null, 2 ));

    }

    function _payThePlayer( player, amount ) {

    }

    ///////////// Start
    _init();

  }

}());