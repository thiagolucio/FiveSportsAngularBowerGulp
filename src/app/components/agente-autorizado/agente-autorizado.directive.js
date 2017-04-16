(function() {
  'use strict';

  angular
    .module('FiveSportsApp')
    .directive('agenteAutorizado', agenteAutorizado);

  /** @ngInject */
  function agenteAutorizado() {
    var directive = {
      templateUrl: 'app/components/agente-autorizado/agente-autorizado.html',
      controller: AgenteAutorizadoController,
      controllerAs: 'vm',
      bindToController: true
    }

    return directive;
    /** @ngInject */
    function AgenteAutorizadoController() {}
  }

})();
