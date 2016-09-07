(function() {
  'use strict';

  angular
    .module('AuthenticationServices', [])
    .factory('AuthenticationService', AuthenticationService);

    AuthenticationService.$inject = ['$cookies', '$http', '$state'];
    function AuthenticationService($cookies, $http, $state){
        var service = {
            getToken       : getToken,
            setToken       : setToken,
            hasToken       : hasToken,
            login          : login,
            logOut         : logOut,
            getContextUser : getContextUser,
            validateToken  : validateToken
        },
        TOKEN_NAME = 'senhoga-token',
        contextUser;
        return service;

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

      function setToken(newStatus){
        $cookies.put(TOKEN_NAME, newStatus);
      };

      function setContextUser(user){
        $cookies.put('contextUser', contextUser);
      };

      function getContextUser(){
        return $cookies.get('contextUser');
      };

      function getToken(){
        return $cookies.get(TOKEN_NAME);
      };

      function hasToken(){
        return angular.isDefined($cookies.get(TOKEN_NAME));
      };

      function validateToken(){
        if(!hasToken()){
          gotToLogin();
        };
      };

      function logOut(){
        destroyCookie();
        gotToLogin();
      };

      function destroyCookie(){
        delete $cookies.get(TOKEN_NAME);
      };

      function gotToLogin(){
        $state.go('login');
      };

      function getHttp() {
        return $http;
      };
    };
    
})();