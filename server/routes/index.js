var Log  = require( '../models/log' );
var path = require( 'path' );

module.exports = function( app ) {

  app
    .get( '*', function( req, res ) {
      res.sendFile( path.join( __dirname, 'client', 'index.html' ));
    });

  // API routes
  app
    .post( '/api/log', function( req, res ) {

      var log = new Log();

      log.player = req.body.player;
      log.hand   = req.body.hand;
      log.wager  = req.body.wager;
      log.money  = req.body.money;
      log.result = req.body.result;

      log.save();

      res.send( 201 );

    });

};