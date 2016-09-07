(function() {
  'use strict';

  angular
    .module('ChatServices', [])
    .factory('ChatService', ChatService);

    function ChatService() {
      var service = {
          getMessages : getMessages
        , postMessage : postMessage
      };
      return service;

      function getMessages(){
        var method = 'POST'
        ,	url = '/app/messages';

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

      function postMessage(message){
        var method = 'POST'
        ,	url = '/app/messages';

        return getHttp()({
          url : url,
          method : method,
          data : {
              userId : userId
            , message : message
          }
        }).then(function(response){
          return response;
        });
      };

      function getHttp() {
        return $http;
      }
    };
})();