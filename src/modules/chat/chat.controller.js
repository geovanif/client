(function() {
  'use strict';

  angular
    .module('ChatController', [])
    .controller('ChatController', ChatController)
    .config(config);

    config.$inject = ['$stateProvider'];
    
    function config($stateProvider){
      $stateProvider
        .state('app.chat',{
          url : '/chat',
          templateUrl: './src/modules/chat/chat.html',
          controller : 'ChatController',
          controllerAs : 'vm'
        });
    };
    
    ChatController.$inject = [];

    function ChatController(){

    };
})();