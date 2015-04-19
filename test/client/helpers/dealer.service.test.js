var expect = chai.expect;

describe( 'DealerService', function() {

  beforeEach( function() {

    module( 'blackjack' );

    inject( function( _DealerService_, _RoomService_ ) {
      DealerService = _DealerService_;
      RoomService   = _RoomService_;
    });

  });

  describe( '#createDeck()', function() {

    var deck = [];
    var card = { name : 'A', suit : '♣' };
    
    it( 'should create 52 cards', function() {

      deck = DealerService.createDeck();

      expect( deck ).to.have.length( 52 );
      expect( deck[ 0 ]).to.eql( card );

    });

  });

  describe( '#giveCard()', function() {

    it( 'should give one card to a player', function() {

      RoomService.createPlayers( 3 );
      DealerService.createDeck();
      
      DealerService.giveCard( DealerService.length, RoomService.playersData[ 0 ]);

      expect( RoomService.playersData[ 0 ].hand ).to.have.length( 1 );

    });

  });

  describe( '#distributeCards()', function() {

    var players,
        deck;

    it( 'should give two cards for each player', function() {

      players = RoomService.createPlayers( 2 );
      deck    = DealerService.createDeck();
      
      DealerService.distributeCards( players );

      expect( players[ 0 ].hand ).to.have.length( 2 );
      expect( players[ 1 ].hand ).to.have.length( 2 );

    });

    it( 'should remove cards from the deck', function() {

      players = RoomService.createPlayers( 5 );
      deck    = DealerService.createDeck();
      
      DealerService.distributeCards( players );

      expect( deck ).to.have.length( 40 ); 
      // 52cards - 10cards ( 5 players ) - 2cards ( dealer ) = 40cards

    });

  });

});