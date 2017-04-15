(function() {
  'use strict';

  angular
    .module('FiveSportsApp')
    .directive('topSlide', topSlide);

  /** @ngInject */
  function topSlide() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/top-slide/top-slide.html',
      scope: {
          creationDate: '='
      },
      controller: TopSlideController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function TopSlideController(moment) {
      var vm = this;
    }
  }

})();
