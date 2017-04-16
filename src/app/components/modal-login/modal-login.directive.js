(function() {
  'use strict';
  angular
    .module('FiveSportsApp')
    .directive('modalLogin', modalLogin);

  /** @ngInject */
  function modalLogin() {
    var directive = {
      templateUrl: 'app/components/modal-login/modal-login.html',
      controller: ModalLoginController,
      controllerAs: 'vm',
      bindToController: true
    };
    return directive;

    /** @ngInject */
    function ModalLoginController() {}
  }
})();
