(function() {
  'use strict';

  angular
    .module('FiveSportsApp')
    .directive('footerNavbar', footerNavbar);

  /** @ngInject */
  function footerNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/footer/footer.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarFooterController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarFooterController(moment) {
      var vm = this;
    }
  }

})();
