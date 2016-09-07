(function() {
  'use strict';
  
  angular
    .module('UserLoginControllers', [])
    .controller('UserLoginController', UserLoginController)
    .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider){
      $stateProvider
        .state('login',{
          url : '/login',
          templateUrl: './src/modules/authentication/login.html',
          controller : 'UserLoginController',
          controllerAs : 'vm'
        });
    };
    
    UserLoginController.$inject = ['AuthenticationService', 'message', '$state'];
    function UserLoginController(AuthenticationService, message, $state){
    	var vm = this;
    	vm.login = login;
    	function login(){

 				 message.pop('Bem vinda.');

         AuthenticationService.setToken('dsadasdas');

         $state.go('app.chat');
         
    		/**
         *  AuthenticationService
    			.login(vm.mae)
    			.then(function(response){
    				message.pop('Bem vinda.');
    			});*/
    	};			
    };
})();