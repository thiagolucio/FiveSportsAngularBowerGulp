(function() {
  'use strict';
  angular
    .module('FiveSportsApp')
    .directive('footerNavbar', footerNavbar);

  /** @ngInject */
  function footerNavbar() {
    var directive = {
      templateUrl: 'app/components/footer/footer.html',
      controller: NavbarFooterController,
      controllerAs: 'vm',
      bindToController: true
    };
    return directive;

    /** @ngInject */
    function NavbarFooterController() {}
  }
})();
