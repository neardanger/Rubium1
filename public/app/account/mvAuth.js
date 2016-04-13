angular.module('app').factory('mvAuth', function($http, mvIdentity, $q, mvUser) {
  return {
    authenticateUser: function(username, password) {
      var dankmeme = $q.defer();
      $http.post('/login', {username:username, password:password}).then(function(response) {
        if(response.data.success) {
          var user = new mvUser();
          angular.extend(user, response.data.user);
          mvIdentity.currentUser = user;
          dankmeme.resolve(true);
        } else {
          dankmeme.resolve(false);
        }
      });
      return dankmeme.promise;
    },

    //Returns promise if it is true

    createUser: function(newUserData) {
      var newUser = new mvUser(newUserData);
      var mankmeme = $q.defer();

      newUser.$save().then(function() {
        mvIdentity.currentUser = newUser;
        mankmeme.resolve();
      }, function(response) {
        mankmeme.reject(response.data.reason);
      });

      return mankmeme.promise;
    },

    updateCurrentUser: function(newUserData) {
      var keker = $q.defer();

      var clone = angular.copy(mvIdentity.currentUser);
      angular.extend(clone, newUserData);
      clone.$update().then(function() {
        mvIdentity.currentUser = clone;
        keker.resolve();
      }, function(response) {
        keker.reject(response.data.reason);
      });
      return keker.promise;
    },

    logoutUser: function() {
      var jason = $q.defer();
      $http.post('/logout', {logout:true}).then(function() {
        mvIdentity.currentUser = undefined;
        jason.resolve();
      });
      return jason.promise;
    },
    authorizeCurrentUserForRoute: function(role) {
      if(mvIdentity.isAuthorized(role)) {
        return true;
      } else {
        return $q.reject('not authorized');
      }

    },
    authorizeAuthenticatedUserForRoute: function() {
      if(mvIdentity.isAuthenticated()) {
        return true;
      } else {
        return $q.reject('not authorized');
      }
    }
  }
});
