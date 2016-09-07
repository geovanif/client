(function() {
  'use strict';

  angular
    .module('UserServices', [])
    .factory('UserService', UserService);

    UserService.$inject = ['$http', '$cookies'];
    function UserService($http, $cookies) {
      var service = {
        save  : save,
        login : login,
      }
      return service;

      function save(user){
        var method = 'POST'
        ,	url = 'http://10.7.8.63:8080/usuario';

        return getHttp()({
          url : url,
          method : method,
          data : user
        }).then(function(response){
          return response;
        });
      };

      function login(user){
        var method = 'POST'
        , url = 'http://10.7.8.63:8080/login';

        return getHttp()({
          url : url,
          method : method,
          data : user
        }).then(function(response){
          return response;
        });
      };

      function getHttp() {
        return $http;
      };
    };
})();