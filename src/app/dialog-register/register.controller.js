(function() {
  'use strict';

  angular
    .module('FiveSportsApp')
    .controller('DialogRegisterController', DialogRegisterController);

  /** @ngInject */
  function DialogRegisterController($log) {

    var vm = this;
    vm.user = {};

    vm.register = register;

    function register(user) {
      $log.log('register', user);
    }
  }
})();
