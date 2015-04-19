var expect = chai.expect;

describe( 'HomeController', function() {

  beforeEach( module( 'blackjack' ));
  beforeEach( module( 'stateMock' ));

  describe( '#addRemovePlayer()', function() {

    beforeEach( inject( function( $controller ) {

      ctrl = $controller( 'HomeController' );

    }));

    it( 'should add 1 in totalPlayers when the parameter is equals to 1', function() {

      ctrl.totalPlayers = 1;
      ctrl.addRemovePlayer( 1 );

      expect( ctrl.totalPlayers ).to.equal( 2 );

    });

    it( 'should remove 1 in totalPlayers when the parameter is equals to -1', function() {

      ctrl.totalPlayers = 2;
      ctrl.addRemovePlayer( -1 );

      expect( ctrl.totalPlayers ).to.equal( 1 );

    });

  });

});