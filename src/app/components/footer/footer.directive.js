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
    function NavbarFooterController($log) {
        var vm = this;

        vm.userNews = {};
        vm.newsletter = newsletter;

        function newsletter(userNews) {
            $log.log('newsletter', userNews);
            // console.log('newsletter', userNews);
        }
    }
  }
})();
