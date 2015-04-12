(function() {

  'use strict';

  angular
    .module( 'blackjack' )
    .service( 'DealerService', DealerService );

  DealerService.$inject = [
    'RoomService'
  ];

  function DealerService( RoomService ) {
  
    var self = this;

    ///////////// Properties
    self.message         = 'Your turn!';
    self.currentGambler  = 0;
    self.currentPlayer   = 0;
    self.readyToGo       = false;
    self.deck            = [];
    self.dealerData      = { hand : [] };

    ///////////// Methods
    self.createDeck      = createDeck;
    self.giveCard        = giveCard;
    self.distributeCards = distributeCards;

    ///////////// Functions Declaration
    function createDeck() {
    
      var typeOfCards = [ 
        'A',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        'J',
        'Q',
        'K'
      ];
      var typeOfSuits = [
        '♣',
        '♥',
        '♠',
        '♦'
      ];

      typeOfCards
        .forEach( function( card ) {
        
          typeOfSuits
            .forEach( function( suit ) {
           
              if ( card === 'A' ) {
              
                self
                  .deck
                  .push({
                    name  : card,
                    suit  : suit,
                    value : [ 1, 11 ]
                  });

              } else if ( card === 'J' || card === 'Q' || card === 'K' ) {
              
                self
                  .deck
                  .push({
                    name  : card,
                    suit  : suit,
                    value : [ 10 ]
                  });
              
              } else {
              
                self
                  .deck
                  .push({
                    name  : card,
                    suit  : suit,
                    value : [ Number( card, 10 ) ]
                  });
              
              }
            
            });
        
        });
    
      return self.deck;

    }

    function giveCard( deckLength, player ) {

      var random = _randomNumberGenerator( 0, deckLength );
    
      player
        .hand
        .push( vm.deck.splice( random, 1 ));
    
    }

    /*
    * Return a random number between min and max
    *
    * @param {number} min - inclusive
    * @param {number} max - exclusive
    */
    function _randomNumberGenerator( min, max ) {  
      return Math.floor( Math.random() * ( max - min )) + min;  
    }
  
  }

  function distributeCards( playersArray ) {
  
    playersArray
      .push( self.dealerData );

    playersArray
      .forEach( function( player ) {
      
        self.giveCard( player );
        self.giveCard( player );
      
      });

    self.dealerData = playersArray.splice( playersArray.length - 1, 1 );
    
    return playersArray;
  
  }

}());
