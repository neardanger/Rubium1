var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  development: {
    db: 'mongodb://localhost/Rubium1',
    port: 8000
  },
  rootPath: rootPath

  // production: {
  //   rootPath: rootPath,
  //   db: 'mongodb://Neardanger:magadan312@ds019480.mlab.com:19480/rubium1',
  //   port: process.env.PORT || 80
  // }
}
