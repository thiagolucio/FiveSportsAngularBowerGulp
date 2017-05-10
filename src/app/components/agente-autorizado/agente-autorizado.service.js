(function() {
  'use strict';

  angular
    .module('FiveSportsApp')
    .factory('AgenteAutorizadoService', AgenteAutorizadoService);

  /** @ngInject */
  function AgenteAutorizadoService($http, baseUrl) {
		var _getListaAgenteAutorizado = function () {
			return $http.get(baseUrl.URL + "/agenteAutorizado/all");
		};

		return {
			getListaAgenteAutorizado: _getListaAgenteAutorizado
		};
  }
})();
