(function() {
  'use strict';
    angular
    .module('App', [
      , 'IndexControllerModule'
      , 'ngMaterial'
      , 'ngMessages'
      , 'MaterialFacade'
      , 'ui.router'
      , 'UserModule'
      , 'ConfigModule'
      , 'ConfigThemeModule'
      , 'AngularFacadeConfig'
      , 'MessageModule'
    ]);
})();