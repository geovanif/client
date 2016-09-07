(function() {
  'use strict';

  angular
    .module('UserCreateControllers', [])
    .controller('UserCreateController', UserCreateController)
    .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider){
      $stateProvider
        .state('app.user-create',{
          url : '/user/create',
          templateUrl: './src/modules/user/user-create.html',
          controller : 'UserCreateController',
          controllerAs : 'vm'
        });
    };
    
    UserCreateController.$inject = [];
    function UserCreateController(){

    };
})(); 