angular.module('app').factory('mvCourse', function($resource) {
  return $resource('/api/courses/:id', {_id: "_@id"},
   {
     'get':  {method:'GET', isArray:true},
    'update': {method:'PUT',isArray:false}
  });
})
