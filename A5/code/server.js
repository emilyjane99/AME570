var url = require("url"),
	querystring = require("querystring");
var passport = require('passport');
var fs = require('fs');
	var dbURL = 'mongodb://44.200.209.114:27017/test';
var path = require('path'),
  express = require('express'),
  db = require('mongoskin').db(dbURL);


var mongoose = require('mongoose');
mongoose.connect(dbURL); // connect to our database

var app = express();
var secret = 'test' + new Date().getTime().toString()

var session = require('express-session');
app.use(require("cookie-parser")(secret));
var MongoStore = require('connect-mongo')(session);
app.use(session( {store: new MongoStore({
   url: dbURL,
   secret: secret
})}));
app.use(passport.initialize());
app.use(passport.session());
var flash = require('express-flash');
app.use( flash() );

var bodyParser = require("body-parser");
var methodOverride = require("method-override");

app.use(methodOverride());
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended:false
}));
require('./passport/config/passport')(passport); // pass passport for configuration
require('./passport/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport


app.get("/addImage", isLoggedIn, function(req,res){

})

app.get("/getImages", function(req,res){

})

app.use(express.static(path.join(__dirname, 'public')));
//app.listen(8080);

// DO NOT DO app.listen() unless we're testing this directly
if (require.main === module) { app.listen(9999); }
// Instead do export the app:
else{ module.exports = app; }


console.log("server running at http://localhost:9999")

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.send('noauth');
}
