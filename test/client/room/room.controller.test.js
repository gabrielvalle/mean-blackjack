var expect = chai.expect;

describe( 'RoomController', function() {

  beforeEach( module( 'blackjack' ));
  beforeEach( module( 'stateMock' ));

  describe( '#setWager()', function() {

    beforeEach( inject( function( $controller, $rootScope ) {

      var scope = $rootScope.$new(); 

      ctrl  = $controller( 'RoomController', {
        $scope : scope
      });

      ctrl.playersData = [{
        name  : 'Player #1',
        hand  : [],
        wager : 0,
        money : 1000,
        stand : false,
        score : 0,
        id    : 1
      }];

    }));

    it( 'should set the wager for the player passed', function() {

      ctrl.setWager( 1, 500 );

      expect( ctrl.playersData[ 0 ].wager ).to.equal( 500 );
      expect( ctrl.currentPlayer ).to.eql( ctrl.playersData[ 0 ] );

    });

  });

});