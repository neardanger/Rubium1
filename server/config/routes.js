var auth = require('./auth'),
  users = require('../controllers/users'),
  courses = require('../controllers/courses'),
  mongoose = require('mongoose'),
  User = mongoose.model('User');

module.exports = function(app) {
//The api//////////////////////////////////////
  app.get('/api/users', auth.requiresRole('admin'), users.getUsers);
  app.post('/api/users', users.createUser);
  app.put('/api/users', users.updateUser);
  /////////////////////////////////////////////

  app.get('/api/courses', courses.getCourses);
  app.get('/api/courses/:id', courses.getCourseById);
  /////////////////////////////////////////////

//Renders all of the partials
  app.get('/partials/*', function(req, res) {
    console.log("req object should be here", req.params)
    res.render('../../public/app/' + req.params[0]);
  });

  app.post('/login', auth.authenticate);

  app.post('/logout', function(req, res) {
    req.logout();
    res.end();
  });

//Wild card route this is the route it goes to for all of the templates
  app.get('*', function(req, res) {
    res.render('index', {
      bootstrappedUser: req.user
    });
  });
}
