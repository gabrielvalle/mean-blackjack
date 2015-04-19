var expect = chai.expect;

describe( 'ResultController', function() {

  beforeEach( module( 'blackjack' ));
  beforeEach( module( 'stateMock' ));
  beforeEach( inject( function( $controller, _$state_, _DealerService_, _RoomService_, _ResultService_ ) {

    ctrl          = $controller( 'ResultController' );
    $state        = _$state_;
    DealerService = _DealerService_;
    RoomService   = _RoomService_;
    ResultService = _ResultService_;

  }));

  describe( '#_calculateResults', function() {

    var players = [
      {
        name  : 'Player #1',
        hand  : [
          { name : 'A', suit : '♠' },
          { name : 'K', suit : '♠' }
        ],
        wager : 500,
        money : 500,
        stand : true,
        score : 21,
        id    : 1
      }, 
      {
        name  : 'Player #2',
        hand  : [
          { name : '8', suit : '♠' },
          { name : '10', suit : '♠' }
        ],
        wager : 900,
        money : 100,
        stand : true,
        score : 18,
        id    : 2
      }, 
      {
        name  : 'Player #3',
        hand  : [
          { name : '9', suit : '♠' }, 
          { name : '10', suit : '♥' }, 
          { name : '6', suit : '♠' }
        ],
        wager : 900,
        money : 100,
        stand : true,
        score : 25,
        id    : 3
      },
      {
        name  : 'Player #4',
        hand  : [
          { name : 'J', suit : '♥' }, 
          { name : 'Q', suit : '♥' }
        ],
        wager : 900,
        money : 100,
        stand : true,
        score : 20,
        id    : 4
      }
    ];

    var dealer = {
      hand  : [
        { name : 'J', suit : '♠' },
        { name : 'Q', suit : '♠' }
      ],
      stand : true,
      score : 20,
    };

    it( 'should return won/blackjack register', function() {

      var result = ctrl.calculateResults( [ players[ 0 ]], dealer );

      expect( result[ 0 ].result ).to.equal( 'Won / Blackjack' );

    });

    it( 'should return Lost register', function() {

      var result = ctrl.calculateResults( [ players[ 1 ]], dealer );

      expect( result[ 0 ].result ).to.equal( 'Lost' );

    });

    it( 'should return Burst register', function() {

      var result = ctrl.calculateResults( [ players[ 2 ]], dealer );

      expect( result[ 0 ].result ).to.equal( 'Burst' );

    });

    it( 'should return Tie / Push register', function() {

      var result = ctrl.calculateResults( [ players[ 3 ]], dealer );

      expect( result[ 0 ].result ).to.equal( 'Tie / Push' );

    });

  });


});