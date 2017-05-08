(function() {
  'use strict';

  angular
    .module('FiveSportsApp')
    .controller('DialogLoginController', DialogLoginController);

  /** @ngInject */
  function DialogLoginController($log) {
    var vm = this;


    vm.user = {};
    vm.login = login;

    function login(user) {
      $log.log('login', user );
    //   console.log('login',user);
    }

  }
})();
