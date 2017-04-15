(function() {
  'use strict';

  describe('directive footer', function () {
    // var $window;
    var vm;
    var el;
    var timeInMs;

    beforeEach(module('FiveSportsApp'));
    beforeEach(inject(function($compile, $rootScope) {
      // $window = _$window_;
      el = angular.element('<footer-navbar></footer-navbar>');
      $compile(el)($rootScope.$new());
      $rootScope.$digest();
      vm = el.isolateScope().vm;
      // ctrl = el.controller('footerNavbar');
    }));

    it('should be compiled', function() {
      expect(el.html()).not.toEqual(null);
    });

  });
  
})();
