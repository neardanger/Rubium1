var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  development: {
    db: 'mongodb://localhost/Rubium1',
    rootPath: rootPath,
    port: process.env.PORT || 8000
  },
  production: {
    rootPath: rootPath,
    db: 'mongodb://mongodb://Neardanger:magadan312@ds015750.mlab.com:15750/rubium',
    port: process.env.PORT || 80
  }
}
