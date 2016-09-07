(function() {
  'use strict';

  angular
    .module('AuthenticationModule', [
        'AuthenticationServices'
      , 'AuthenticationInterceptor'
    ]);
    
})();