var Log = require( '../models/log' );

module.exports = function( app ) {

  app
    .get( '*', function( req, res ) {
      res.sendFile( 'client/index.html' );
    });

};