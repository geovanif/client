(function() {
  'use strict';
    angular
    .module('App', [
      , 'IndexControllerModule'
      , 'ngMaterial'
      , 'ngMessages'
      , 'ngCookies'
      , 'MaterialFacade'
      , 'ui.router'
      , 'UserModule'
      , 'ChatModule'
      , 'ConfigModule'
      , 'ConfigThemeModule'
      , 'AuthenticationModule'
      , 'AngularFacadeConfig'
      , 'MessageModule'
    ]);
})();