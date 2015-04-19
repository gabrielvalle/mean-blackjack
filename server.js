///////////// Modules
var express        = require( 'express' );
var bodyParser     = require( 'body-parser' );
var methodOverride = require( 'method-override' );
var mongoose       = require( 'mongoose' );

var app = express();

///////////// Configuration
var db = require( './config/db' );

var port = process.env.PORT || 3000;

///////////// DB Connection
mongoose.connect( db.url );

///////////// Middlewares
app.use( bodyParser.json()); 
app.use( bodyParser.urlencoded({ extended: true })); 
app.use( methodOverride( 'X-HTTP-Method-Override' )); 
app.use( express.static( __dirname + '/client' ));

///////////// Routes
require( './server/routes' )( app );

///////////// Start the app
app.listen( port, function() {
  console.log( 'Running at http://localhost:' + port );
});

exports = module.exports = app;
