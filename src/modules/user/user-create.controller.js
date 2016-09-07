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
    
    UserCreateController.$inject = ['message', 'UserService'];
    function UserCreateController(message, UserService){
      var vm = this;

      vm.save = save;
      
      function save(){
        UserService
          .save(vm.mae)
          .then(function(response){
            message.pop('Cadastro realizado com sucesso');
          });
      };

    };
})(); 