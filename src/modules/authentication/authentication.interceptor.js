(function(){
'use strict';
  angular
  .module('AuthenticationInterceptor',[])
  .config(config);

  config.$inject = ['$provide', '$httpProvider'];
  function config($provide, $httpProvider) {
    $provide.factory('HttpInterceptor', httpInterceptor);

    httpInterceptor.$inject = ['$q'];
    function httpInterceptor($q) {
      return {
        request: onRequest,
        response: onResponse,
        requestError: onRequestError,
        responseError: onResponseError
      };

      function onRequest(config){
        console.log('config {} ', config);
        return config;
      };
      
      function onResponse(response) {
        console.log('response {} ', response);
        return response;
      };
      
      function onRequestError(rejection) {
        console.log('rejection {} ', rejection);
        return $q.reject(rejection);
      };
      
      function onResponseError(rejection) {
        console.log('rejection {} ', rejection);
        return $q.reject(rejection);
      };
    };
    
    $httpProvider.interceptors.push('HttpInterceptor');
  };
}());