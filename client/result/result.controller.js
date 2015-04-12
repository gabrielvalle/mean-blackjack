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

      vm.allResults = _calculateResults( vm.playersData, vm.dealerData );
      console.log( JSON.stringify( vm.allResults, null, 2 ));

    }

    /**
    *
    * Create a log of the player's result in the last game
    *
    * @param {Object} info - Informations about the player's last round
    *
    **/    
    function Result( player, result, prize ) {

      this.player = player.name;
      this.score  = player.score;
      this.hand   = player.hand;
      this.wager  = player.wager;
      this.money  = player.money;
      this.result = result;
      this.prize  = prize;

    }

    function _calculateResults( playersData, dealerData ) {

      var dealer  = dealerData;
      var results = [];

      playersData
        .forEach( function( player ) {

          if ( player.score > 21 ) {

            results
              .push( new Result( player, 'Burst', player.wager ));

          } else if ( player.score === 21 && player.hand.length === 2 ) {

            results
              .push( new Result( player, 'Won / Blackjack', player.wager * 2.5 ));

            _payThePlayer( player, player.wager * 2.5 );

          } else if ( player.score <= 21 && player.score < dealer.score ) {

            results
              .push( new Result( player, 'Lost', player.wager ));

          } else if ( player.score <= 21 && player.score === dealer.score ) {

            results
              .push( new Result( player, 'Tie / Push', 0 ));

            _payThePlayer( player, player.wager );

          } else if ( player.score <= 21 && player.score > dealer.score ) {

            results
              .push( new Result( player, 'Won', player.wager * 2 ));

            _payThePlayer( player, player.wager * 2 );

          }

        });

        RoomService.playersData = vm.playersData;

        return results;

    }

    function _payThePlayer( player, amount ) {

      player.money += amount;
      vm.playersData[ player.id - 1 ] = player;

    }

    ///////////// Start
    _init();

  }

}());