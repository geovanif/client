(function() {
  'use strict';

  angular
    .module('UserServices', [])
    .factory('UserService', UserService);

    UserService.$inject = ['$http'];
    function UserService($http) {
      var service = {
        save : save
      };
      return service;

      function save(user){
        var method = 'POST'
        ,	url = '/app/cadastrar';

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
      }
    };
})();