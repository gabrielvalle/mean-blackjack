var expect = chai.expect;

describe( 'RoomService', function() {

  beforeEach( function() {

    module( 'blackjack' );

    inject( function( _RoomService_ ) {
      RoomService = _RoomService_;
    });

  });

  describe('#createPlayers()', function() {

    var numberOfPlayers = 3;
    var playerModel     = {
      name  : 'Player #0',
      hand  : [],
      wager : 0,
      money : 1000,
      stand : false,
      score : 0,
      id    : 0
    };
    
    it( 'should create 3 players', function() {

      var players = RoomService.createPlayers( numberOfPlayers );

      expect( players ).to.have.length( 3 );
      expect( Object.keys( players[ 0 ] )).to.eql( Object.keys( playerModel ));

    });

  });

});