var expect = chai.expect;

describe( 'DealerService', function() {

  beforeEach( function() {

    module( 'blackjack' );

    inject( function( _DealerService_ ) {
      DealerService = _DealerService_;
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

});