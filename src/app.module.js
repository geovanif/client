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
      , 'ChatModule'
      , 'ConfigModule'
      , 'ConfigThemeModule'
      , 'AngularFacadeConfig'
    ]);
})();