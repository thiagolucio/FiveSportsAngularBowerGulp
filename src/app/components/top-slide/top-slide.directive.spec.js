(function() {
  'use strict';

  describe('directive slide', function() {
    // var $window;
    var vm;
    var el;

    beforeEach(module('FiveSportsApp'));
    beforeEach(inject(function($compile, $rootScope) {

      el = angular.element('<top-slide></top-slide>');

      $compile(el)($rootScope.$new());
      $rootScope.$digest();
      vm = el.isolateScope().vm;
      //ctrl = el.controller('topSlide');
    }));

    it('should be compiled', function() {
      expect(el.html()).not.toEqual(null);
    });

  });
})();
