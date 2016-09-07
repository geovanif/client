(function() {
  'use strict';

  angular
    .module('IndexControllerModule', [])
    .controller('IndexController', IndexController);

    IndexController.$inject = ['$mdSidenav'];
    function IndexController($mdSidenav){
      var vm = this;
      vm.toggleLeft = toggleLeft;

      function toggleLeft(){
        $mdSidenav('left').toggle();
      };
    };
})();