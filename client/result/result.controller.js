(function() {
  
  'use strict';

  angular
    .module( 'blackjack' )
    .controller( 'ResultController', ResultController );

  ResultController.$inject = [
    'DealerService',
    'RoomService',
    '$state',
    'ResultService'
  ];

  function ResultController( DealerService, RoomService, $state, ResultService ) {

    var vm = this;

    ///////////// Properties
    vm.dealerData         = DealerService.dealerData;
    vm.playersData        = RoomService.playersData;
    vm.allResults         = [];

    ///////////// Public Methods
    vm.playAgain          = playAgain;
    vm.quit               = quit;

    ///////////// Private Methods
    var _init             = _init;
    var _calculateResults = _calculateResults;
    var _payThePlayer     = _payThePlayer;
    var _resetValues      = DealerService.resetValues;
    var _createLog        = _createLog;

    /* test-code */
    vm.calculateResults   = _calculateResults;
    /* end-test-code */

    ///////////// Methods Declarations
    function _init() {

      vm.allResults = _calculateResults( vm.playersData, vm.dealerData );

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

          } else if ( player.score <= 21 && dealer.score > 21 ) {

            results
              .push( new Result( player, 'Won', player.wager * 2 ));

            _payThePlayer( player, player.wager * 2 );

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

      player.money += Number( amount, 10 );
      vm.playersData[ player.id - 1 ] = player;

    }

    function playAgain() {

      RoomService
        .playersData
        .forEach( function( player ) {

          player.hand  = [];
          player.wager = 0;
          player.stand = false;
          player.score = 0;

          RoomService.playersData[ player.id - 1 ] = player;

        });

      _resetValues();
      _createLog( vm.allResults );

      $state
        .go( 'room' );

    }

    function quit() {

      _createLog( vm.allResults );
      
      _resetValues();
      RoomService.playersData     = [];
      RoomService.numberOfPlayers = 1;

      $state
        .go( 'home' );

    }

    function _createLog( results ) {

      results
        .forEach( function( log ) {

          ResultService
            .createLog( log )
            .then( function( data ) {
              console.log( 'Registered!' );
            }, function( error ) {
              console.log( 'Error to register.', error );
            });

        });

    }

    ///////////// Start
    _init();

  }

}());