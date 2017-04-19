(function() {
  'use strict';

  angular
    .module('FiveSportsApp')
    .controller('DialogRegisterController', DialogRegisterController);

  /** @ngInject */
  function DialogRegisterController() {
    var vm = this;


    vm.name = {};
    vm.register = register;

    function register(name) {
      console.log('register', name );
    }



  }
})();
