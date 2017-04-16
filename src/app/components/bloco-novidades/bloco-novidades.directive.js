(function() {
  'use strict';

  angular
    .module('FiveSportsApp')
    .directive('blocoNovidades', blocoNovidades);

  /** @ngInject */
  function blocoNovidades() {
    var directive = {
      templateUrl: 'app/components/bloco-novidades/bloco-novidades.html',
      controller: BlocoNovidadesController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function BlocoNovidadesController() {}
  }

})();
