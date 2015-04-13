var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var LogSchema = new Schema({
  player : { type  : String, required : true },
  hand   : [{ name : String, suit     : String }],
  wager  : { type  : Number },
  money  : { type  : Number },
  result : { type  : String }
});

var Log = mongoose.model( 'Log', LogSchema );

module.exports = Log;