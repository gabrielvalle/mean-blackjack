(function() {
  
  'use strict';

  angular
    .module( 'blackjack' )
    .service( 'ResultService', ResultService );

  ResultService.$inject = [
    '$http'
  ];

  function ResultService( $http ) {

    var self = this;

    ///////////// Properties

    ///////////// Public Methods
    self.createLog = createLog;

    ///////////// Private Methods

    ///////////// Methods Declarations
    function createLog( log ) {

      return $http.post( 'api/log', log );

    }

  }

}());