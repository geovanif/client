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
        resolve: {
          resolve : function(){
            return {};
          },
        },
        controller: AbstractController,
        template: '<ui-view/>'
      });
  };

  function AbstractController(){

  };
})();