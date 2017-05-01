(function() {
  'use strict';

  angular
    .module('FiveSportsApp')
    .directive('topSlide', topSlide);

  /** @ngInject */
  function topSlide() {
    var directive = {
      templateUrl: 'app/components/top-slide/top-slide.html',
      controller: TopSlideController,
      controllerAs: 'vm',
      bindToController: true
    };
    return directive;

    /** @ngInject */
    function TopSlideController() {
        var vm = this;

        vm.topSlides = [
            {
                'img':'assets/images/slides/slide1.png',
                'titleSlide':'First Thumbnail label',
                'textSlide':'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.'
            },
            {
                'img':'assets/images/slides/slide2.png',
                'titleSlide':'Second Thumbnail label',
                'textSlide':'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.'
            },
            {
                'img':'assets/images/slides/slide3.png',
                'titleSlide':'Third Thumbnail label',
                'textSlide':'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.'
            },
            {
                'img':'assets/images/slides/slide4.png',
                'titleSlide':'Four Thumbnail label',
                'textSlide':'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.'
            }
        ];
    }
  }

})();
