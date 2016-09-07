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
    	function login(usuario){
    		AuthenticationService
          .login({username:usuario.email,password:usuario.senha},function(response){
            if(!response){
              return;
            }
            AuthenticationService.saveUser(response);
            $state.go('app.chat');
          },function(err){
            console.log('ERR ', err)
          })
    	};			
    };
})();