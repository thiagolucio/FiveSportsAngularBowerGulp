(function() {
  'use strict';

  angular.module('FiveSportsApp').directive('topSlide', topSlide);

  /** @ngInject */
  function topSlide() {
    var directive = {
        restrict: 'EA',
        templateUrl: 'app/components/top-slide/top-slide.html',
    link: function(scope) {
        scope.topSlides = [
          {
            // 'img': 'assets/images/slides/slide1.png',
            // 'classImgSlide': 'img-responsive slide01',
            'titleSlide': 'First Thumbnail label',
            'textSlide': 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.'
          }, {
            // 'img': 'assets/images/slides/slide2.png',
            // 'classImgSlide': 'img-responsive slide02',
            'titleSlide': 'Second Thumbnail label',
            'textSlide': 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.'
          }, {
            // 'img': 'assets/images/slides/slide3.png',
            // 'classImgSlide': 'img-responsive slide04',
            'titleSlide': 'Third Thumbnail label',
            'textSlide': 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.'
        },{
            // 'img': 'assets/images/slides/slide4.png',
            // 'classImgSlide': 'img-responsive slide03',
            'titleSlide': 'Four Thumbnail label',
            'textSlide': 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.'
        },{
            // 'img': 'assets/images/slides/slide4.png',
            // 'classImgSlide': 'img-responsive slide03',
            'titleSlide': 'Four Thumbnail label',
            'textSlide': 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.'
        },{
            // 'img': 'assets/images/slides/slide4.png',
            // 'classImgSlide': 'img-responsive slide03',
            'titleSlide': 'Four Thumbnail label',
            'textSlide': 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.'
        },{
            // 'img': 'assets/images/slides/slide4.png',
            // 'classImgSlide': 'img-responsive slide03',
            'titleSlide': 'Four Thumbnail label',
            'textSlide': 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.'
        },{
            // 'img': 'assets/images/slides/slide4.png',
            // 'classImgSlide': 'img-responsive slide03',
            'titleSlide': 'Four Thumbnail label',
            'textSlide': 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.'
          }
        ];
    }
    };
    return directive;
  }
})();
