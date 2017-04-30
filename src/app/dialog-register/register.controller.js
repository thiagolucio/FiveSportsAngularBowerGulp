(function() {
  'use strict';

  angular
    .module('FiveSportsApp')
    .controller('DialogRegisterController', DialogRegisterController);

  /** @ngInject */
  function DialogRegisterController() {

    var vm = this;
    vm.user = {};

    vm.register = register;

    function register(user) {
      console.log('register', user);
    }



  }
})();
