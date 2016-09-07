(function() {
  'use strict';

  angular
    .module('ConfigRoutes', [])
    .config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];
  function config($stateProvider, $urlRouterProvider, $httpProvider) {
    
    $stateProvider
      .state('app', {
        abstract: true,
          resolve : {
            isLogadoPreLoading : function(){
              
            }
          },
        controller: AbstractController,
        template: '<ui-view/>'
      });

    $urlRouterProvider.otherwise('/');
  };

  AbstractController.$inject = ['$rootScope', 'AuthenticationService'];
  function AbstractController($rootScope, AuthenticationService){

    AuthenticationService.validateToken();
    
    $rootScope.$on('$stateChangeStart', stateChangeStart);

    function stateChangeStart(event, toState, toParams, fromState, fromParams, options){ 
       AuthenticationService.validateToken();
    };

  };
})();