(function() {
  'use strict';

  angular
    .module('FiveSportsApp')
    .controller('DialogLoginController', DialogLoginController);

  /** @ngInject */
  function DialogLoginController() {
    var vm = this;


    vm.user = {};
    vm.login = login;

    function login(user) {
      console.log('login', user );
    }

  }
})();
