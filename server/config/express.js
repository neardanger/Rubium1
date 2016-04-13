var express = require('express')
var stylus = require('stylus')
var logger = require('morgan')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var session = require('express-session')
var passport = require('passport')
//Require



module.exports = function(app, config) {
  function compile(str, path) {
    return stylus(str).set('filename', path);
  }

  //Middleware
app.set('views',config.rootPath + '/server/views')
app.set('view engine','jade')
app.use(logger('dev'))
app.use(stylus.middleware(
{
src:config.rootPath + '/public',
compile: compile
}))
app.use(cookieParser())
app.use(session({
secret: "A DANK MEME",
cookie: {_expires: 6000000}
}))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(passport.initialize())
app.use(passport.session())
app.use(express.static(config.rootPath + '/public'));

}
