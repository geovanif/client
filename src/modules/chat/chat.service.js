(function() {
  'use strict';

  angular
    .module('ChatServices', [])
    .factory('ChatService', ChatService);

    ChatService.$inject = ['$http'];
    function ChatService($http) {
      var service = {
          getMessages : getMessages
        , postMessage : postMessage
      };
      
      return service;

      function getMessages() {
        var method = 'GET'
        ,	url = 'http://10.7.8.63:8080/usuario/';

        var response = [
          {
            conteudo : 'ola mundo',
            dataAcontecimento : new Date(),
            tipo: 'ROBO',
            dataGeracao :  new Date()
          },{
            conteudo : 'ola mundo 2',
            dataAcontecimento : new Date(),
            tipo: 'ACAO',
            dataGeracao :  new Date()
          },{
            conteudo : 'ola mundo 2',
            dataAcontecimento : new Date(),
            tipo: 'ACAO',
            dataGeracao :  new Date()
          }
        ];

        return response;
        // return getHttp()({
        //   url : url,
        //   method : method,
        //   data : {
        //     userId : userId
        //   }
        // }).then(function(response){
        //   return response;
        // });
      };

      function postMessage(id, message) {
        var method = 'PUT'
        ,	url = 'http://localhost:8080/usuario';
        return getHttp()({
          url : url,
          method : method,
          data : {
            id : id,
            message : message
          }
        }).then(function(response) {
          return response;
        });
      };

      function getHttp() {
        return $http;
      }
    };
})();