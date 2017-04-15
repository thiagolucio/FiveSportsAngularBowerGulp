(function() {
  'use strict';

  describe('directive navbar', function() {
    // var $window;
    var vm;
    var el;
    
    beforeEach(module('FiveSportsApp'));
    beforeEach(inject(function($compile, $rootScope) {

      el = angular.element('<top-navbar></top-navbar>');

      $compile(el)($rootScope.$new());
      $rootScope.$digest();
      vm = el.isolateScope().vm;
      ctrl = el.controller('topNavbar');
    }));

    it('should be compiled', function() {
      expect(el.html()).not.toEqual(null);
    });   

  });
})();
