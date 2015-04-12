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
    self.currentGambler  = 0;
    self.currentPlayer   = 0;
    self.readyToGo       = false;
    self.deck            = [];
    self.dealerData      = { hand : [] };

    ///////////// Public Methods
    self.createDeck      = createDeck;
    self.giveCard        = giveCard;
    self.distributeCards = distributeCards;
    self.dealerAI        = dealerAI;

    ///////////// Private Methods
    var _handleHit       = _handleHit;
    var _handleStand     = _handleStand;
    var _handleBust      = _handleBust;

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
        .push( self.deck.splice( random, 1 )[ 0 ]);
    
    }

    /*
    *
    * Return a random number between min and max
    *
    * @param {number} min - inclusive
    * @param {number} max - exclusive
    *
    */
    function _randomNumberGenerator( min, max ) {  
      return Math.floor( Math.random() * ( max - min )) + min;  
    }

    /*
    *
    *  Give 2 card per player
    *
    * @param {Array} players
    *
    */
    function distributeCards( players ) {

      self.createDeck();

      players
        .push( self.dealerData );

      players
        .forEach( function( player ) {
        
          self.giveCard( self.deck.length, player );
          self.giveCard( self.deck.length, player );
        
        });

      self.dealerData = players.splice( players.length - 1, 1 )[ 0 ];
      
      return players;
    
    }

    /**
    *
    * Management of the game
    *
    * @param {Object} player
    * @param {String} action - "hit" or "stand"
    *
    **/
    function dealerAI( player, action ) {

      if ( action === "hit" ) {

      } else {

      }



    }
  
  }

}());
