(function() {
  'use strict';

  angular
    .module('AuthenticationServices', [])
    .factory('AuthenticationService', AuthenticationService);

    AuthenticationService.$inject = ['$cookies', '$http', '$state'];
    function AuthenticationService($cookies, $http, $state){
        var service = {
          login : login,
          saveUser : saveUser,
          getUser : getUser
        };
        
        return service;

      function login(user, callback,callbackErr){
          var method = 'POST'
          , url = 'http://localhost:8080/login',
          data = {
            username : user.username,
            password : user.password
          };
        $http({
          method : method,
          url : url,
          data : data
        }).then(callback,callbackErr);
      };

      function saveUser(user){
        $cookies.putObject('user',user.data);
      }

      function getUser(){
        return $cookies.getObject('user');
      }
    }

})();