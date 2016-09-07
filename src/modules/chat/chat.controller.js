(function() {
  'use strict';

  angular
    .module('ChatControllers', [])
    .controller('ChatController', ChatController)
    .config(config);

    config.$inject = ['$stateProvider'];
    
    function config($stateProvider) {
      $stateProvider
        .state('app.chat',{
          url : '/chat',
          templateUrl: './src/modules/chat/chat.html',
          controller : 'ChatController',
          controllerAs : 'vm',
          resolve : {
            getUser : getUser 
          }
        });
    };

    getUser.$inject = ['ChatService','AuthenticationService'];
    function getUser(ChatService, AuthenticationService) {
      return AuthenticationService.getUser();
    };
    
    ChatController.$inject = ['ChatService', 'getUser','AuthenticationService'];
    function ChatController(ChatService, getUser, AuthenticationService) {
      var vm = this;
      vm.usuario = getUser;
      vm.isRobo = isRobo;
      vm.postMessage = postMessage;
      vm.getImage = getImage;
      vm.postMessage = postMessage;
      init();

      function init(){
        vm.message = {
          tipo : 'ANOTAÇÃO',
          dataAcontecimento : new Date()
        }
      }

      function isRobo(message) {
        return message.tipo == 'ROBO';
      };

      function getImage(message){
        if(isRobo(message)){
          return 'src/images/baby.jpg'
        };
        return 'src/images/mae.jpg'
      };

      function postMessage(message){
        console.log('>>', message)
        ChatService
          .postMessage(vm.usuario.id,message)
          .then(function(response) {
            console.log('Response', response)
            vm.usuario = response.data;
          });

      }
    };
})();