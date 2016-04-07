var express = require('express');


var app = express();

var config = require('./server/config/config');

require('./server/config/express')(app, config);

var port = process.env.PORT || config.development.port

var dbURL = process.env.MONGOLAB_URI || config.development.db


require('./server/config/mongoose')(config,dbURL);

require('./server/config/passport')();

require('./server/config/routes')(app);

app.listen(port);
console.log('Listening on port ' + port + '...');





//THIS IS THE COOL ROUTES!!!! SOO FOR SHOO!!!
