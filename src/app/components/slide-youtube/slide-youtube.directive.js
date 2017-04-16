(function() {
  'use strict';

  angular
    .module('FiveSportsApp')
    .directive('slideYoutube', slideYoutube);

  /** @ngInject */
  function slideYoutube() {
    var directive = {
      templateUrl: 'app/components/slide-youtube/slide-youtube.html',
      controller: SlideYoutubeController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function SlideYoutubeController() {}
  }

})();
