var mongoose = require('mongoose'),
  userModel = require('../models/User'),
  courseModel = require('../models/Course');

module.exports = function(config,dbURL) {
  mongoose.connect(dbURL);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error...'));
  db.once('open', function callback() {
    console.log('Rubium opened!');
  });

  userModel.createDefaultUsers();
  courseModel.createDefaultCourses();

};
