(function() {
  'use strict';

  angular
    .module('ChatControllers', [])
    .controller('ChatController', ChatController)
    .config(config);

    config.$inject = ['$stateProvider'];
    
    function config($stateProvider){
      $stateProvider
        .state('app.chat',{
          url : '/chat',
          templateUrl: './src/modules/chat/chat.html',
          controller : 'ChatController',
          controllerAs : 'vm',
          resolve : {
            messages : messages 
          }
        });
    };

    messages.$inject = ['ChatService'];
    function messages(ChatService){
      return ChatService.getMessages();
    };
    
    ChatController.$inject = ['messages'];

    function ChatController(messages){
      var vm = this;
      vm.messages = messages;
      vm.getPosition = getPosition;

      function getPosition(message){
        return message.tipo != 'ROBO' ? 'end' : 'none'
      };
    };
})();