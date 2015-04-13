var Log = require( '../models/log' );

module.exports = function( app ) {

  app
    .get( '*', function( req, res ) {
      res.sendFile( 'client/index.html' );
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

    });

};