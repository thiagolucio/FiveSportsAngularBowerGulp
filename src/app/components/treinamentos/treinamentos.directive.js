(function() {
  'use strict';

  angular
    .module('FiveSportsApp')
    .directive('treinamentos', treinamentos);

  /** @ngInject */
  function treinamentos() {
    var directive = {
      templateUrl: 'app/components/treinamentos/treinamentos.html',
      controller: TreinamentosController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;
    /** @ngInject */
    function TreinamentosController() { }
  }

})();
